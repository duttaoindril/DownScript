const fs = require("fs");
const path = require("path");
const args = process.argv.slice(2);
const chokidar = require("chokidar");
const puppeteer = require("puppeteer");
const Downloader = require("mt-files-downloader");
const getDuration = require("get-video-duration");
const ignore = args[3] ? args[3] : 0;
let browserDownloads = [[], [], null, false];
var watcher = chokidar.watch("C:/Users/dutta/Downloads/*.mp4", { persistent: true });

// node index.js [url] [season #] "[title (optional)]" [# to ignore from beginning (optional)]

let getDownloadURLs = async target => {
    if (target.includes("C:") && target.includes("json")) return target;
    const browser = await puppeteer.launch({ headless: true });
    let tab = await browser.newPage();
    await tab.goto("http://kissanime.ru/login");
    await tab.waitFor(13000);
    await tab.click("#username");
    await tab.keyboard.type("dadrill");
    await tab.click("#password");
    await tab.keyboard.type("anasua21");
    await tab.click("#btnSubmit");
    await tab.waitFor(2000);
    tab = await browser.newPage();
    var prefix = "http://";
    if (target.substr(0, prefix.length) !== prefix) target = prefix + target;
    await tab.goto(target, { waitUntil: "domcontentloaded", timeout: 2147483647 });
    const urls = await tab.evaluate(() => {
        let links = [];
        for (let node of document.querySelectorAll("table.listing tbody tr td a")) if (node.href) links.push(node.href + "&s=rapidvideo");
        return links.reverse();
    });
    console.log(urls.length + " urls to download.");
    const downloadLinks = [];
    for (let url of urls) {
        await tab.goto(url, { waitUntil: "domcontentloaded" });
        await tab.setViewport({ width: 1000, height: 2000 });
        let rapidlink = await tab.evaluate(() => {
            return document.querySelector("#divDownload > a").href;
        });
        await tab.goto(rapidlink);
        let link = await tab.evaluate(() => {
            return [].slice.call(document.querySelectorAll("#button-download")).pop().href;
            [].slice
                .call(document.querySelectorAll("#button-download"))
                .pop()
                .click();
        });
        downloadLinks.push(link);
    }
    await browser.close();
    return [urls, downloadLinks];
};

getDownloadURLs(args[0]).then(async links => {
    let browser = await puppeteer.launch({ headless: false });
    browserDownloads[2] = browser;
    if (typeof links === "string" || links instanceof String) linearDownload(links);
    else {
        let name = (args[2] ? args[2] : args[0].substring(args[0].lastIndexOf("/") + 1)).replace(new RegExp("-", "g"), " ");
        let season = args[1];
        console.log(
            name + " season " + season + " has " + links[0].length + " episodes and " + links[1].length + " download links, ignoring " + ignore
        );
        if (links[0].length != links[1].length) console.log("Didn't get all the links...");
        links.push([]);
        for (let link of links[0]) {
            let episodeNum = parseInt(link.substring(link.indexOf("Episode-") + "Episode-".length, link.indexOf("?", link.indexOf("Episode-"))));
            links[2].push(isNaN(episodeNum) ? links[0].indexOf(link) + 1 : episodeNum);
        }
        ensureDirectoryExistence("C:/Users/dutta/Downloads/KissAnime/" + name + "/Season " + season + "/" + name + " links.json");
        fs.writeFile(
            "C:/Users/dutta/Downloads/KissAnime/" + name + "/Season " + season + "/" + name + " links.json",
            JSON.stringify({ name: name, season: season, links: links, ignore: ignore }, null, 4),
            e => console.log(e ? e : "")
        );
        console.log("\n---\n");
        syncDownloader(name, season, links, ignore);
    }
});

function linearDownload(url) {
    var data = JSON.parse(fs.readFileSync(url, "utf8"));
    syncDownloader(data.name, data.season, data.links, data.ignore);
}

function syncDownloader(name, season, links, index) {
    download(name, season, links[2][index], links[1][index], useBackup =>
        browserDownload(useBackup, name, season, links[2][index], links[1][index], () => {
            if (index < links[1].length - 1) syncDownloader(name, season, links, parseInt(index, 10) + 1);
            else checkCleanupBrowser(false);
        })
    );
}

async function browserDownload(useBackup, name, s, e, link, cb) {
    if (!useBackup) cb();
    else {
        console.log("Using backup on episode " + e + "...\n\nDownloading " + link + " on browser...\n\n");
        browserDownloads[0].push(link);
        browserDownloads[1].push(
            "C:/Users/dutta/Downloads/KissAnime/" + name + "/Season " + s + "/" + name + " S0" + s + "E" + (e < 10 ? "0" + e : e) + ".mp4"
        );
        browserDownloads[3] = true;
        let tab = await browserDownloads[2].newPage();
        tab.goto(link, err => console.log(err ? err : "")).catch(err => {});
        cb();
    }
}

watcher.on("add", path => {
    getDuration(path)
        .then(duration => {
            var index = browserDownloads[0].findIndex(val => val.includes(path.substring("C:\\Users\\dutta\\Downloads\\".length)));
            if (index > -1) {
                if (fs.existsSync(browserDownloads[1][index])) fs.unlinkSync(browserDownloads[1][index], err => console.log(err ? err : ""));
                var renamed = browserDownloads[1][index] + ".tmp";
                // "C:\\Users\\dutta\\Downloads\\" + browserDownloads[1][index].substring(browserDownloads[1][index].lastIndexOf("//") + 2);
                console.log("\nRenaming temporarily to:", renamed);
                fs.rename(path, renamed, err => {
                    fs.rename(renamed, browserDownloads[1][index], err => {
                        if (err) console.log("Full rename failed for " + browserDownloads[1][index] + ", please do manually.");
                        var urls = browserDownloads[0].splice(0);
                        var paths = browserDownloads[1].splice(0);
                        urls.splice(index, 1);
                        paths.splice(index, 1);
                        browserDownloads[0] = urls;
                        browserDownloads[1] = paths;
                        checkCleanupBrowser();
                    });
                });
            }
        })
        .catch(err => console.log(err, "Bad download."));
});

async function checkCleanupBrowser(val) {
    if (val === false) browserDownloads[3] = false;
    if (browserDownloads[0].length === 0 && !browserDownloads[3]) {
        console.log("Finished all browser downloads, exiting...");
        await browserDownloads[2].close();
        process.exit();
    }
}

function download(name, s, e, url, cb, threads = 100) {
    var totalTime = Date.now();
    let filePath = "C:/Users/dutta/Downloads/KissAnime/" + name + "/Season " + s + "/" + name + " S0" + s + "E" + (e < 10 ? "0" + e : e) + ".mp4";
    ensureDirectoryExistence(filePath);
    let dler = new Downloader();
    let dl = dler.download(url, filePath);
    dl.setOptions({ threadsCount: threads });
    dl.setRetryOptions({ maxRetries: 0, retryInterval: 2500 });
    dl.on("end", dl => {
        var size = getFilesizeInBytes(dl.filePath);
        console.log(
            "Finished downloading " +
                dl.filePath +
                " with " +
                size +
                "MB file size using " +
                threads +
                " threads in " +
                Math.round((Date.now() - totalTime) / 1000) +
                " seconds!\n"
        );
        getDuration(dl.filePath)
            .then(duration => {
                if (size < 5) {
                    dl.destroy();
                    dler.removeDownloadByFilePath(dl.filePath);
                } else dl.stop();
                cb(size < 5);
            })
            .catch(err => {
                dl.destroy();
                dler.removeDownloadByFilePath(dl.filePath);
                if (threads <= 10 || size < 5) cb(true);
                else download(name, s, e, url, cb, threads / 5);
            });
    });
    dl.on("error", dl => {
        dl.destroy();
        dler.removeDownloadByFilePath(dl.filePath);
        console.log(
            "\nERROR downloading " +
                dl.filePath +
                " with " +
                threads +
                " threads in " +
                Math.round((Date.now() - totalTime) / 1000) +
                " seconds XXX:\n" +
                dl.url +
                "\n"
        );
        if (threads > 10) download(name, s, e, url, cb, threads / 5);
        else cb(true);
    });
    console.log("Started downloading " + dl.filePath + " with " + threads + " threads...");
    dl.start();
}

function getFilesizeInBytes(filename) {
    return Math.floor(fs.statSync(filename).size / 1000000.0);
}

function ensureDirectoryExistence(filePath) {
    let dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) return true;
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}

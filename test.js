// const fs = require("fs");
// const getDuration = require("get-video-duration");
// const path = require("path");
// const Downloader = require("mt-files-downloader");

// let name = "Beelzebub";
// let s = 1;
// let e = 59;
// let urls = [
//     "https://www1063.playercdn.net/1p-dl/1/9JraN8O3cKfHrWxDpda75w/1529903163/170509/954iFYATfm6iDvv.mp4?name=CMSBeelzebub59720pB0BE1BF0r971.1r116-rh-699.mp4-720.mp4",
//     "https://www3374.playercdn.net/1p-dl/0/WTireQrdgEepodKy2x8AGg/1529903169/170509/2129zCttWGtVmYz.mp4?name=CMSBeelzebub60720p511A03CEr451.1r828-rh-794.mp4-720.mp4"
// ];

// download(name, s, e, urls[1]);

// function download(name, s, e, url, threads = 100) {
//     let filePath = "C:/Users/dutta/Downloads/KissAnime/" + name + "/Season " + s + "/" + name + " S0" + s + "E" + (e < 10 ? "0" + e : e) + ".mp4";
//     ensureDirectoryExistence(filePath);
//     let dl = new Downloader().download(url, filePath);
//     dl.setOptions({ threadsCount: threads });
//     dl.on("start", dl => console.log("Started downloading " + dl.filePath + "..."));
//     dl.on("end", dl => console.log("Finished downloading " + dl.filePath + "!"));
//     dl.on("error", dl => console.log(dl, "\nError with download " + dl.filePath + " XXX "));
//     dl.start();
// }

// download(
//     urls[1],
//     {
//         directory: "./downloads/" + name + "/Season " + s,
//         filename: name + " S0" + s + "E" + (e < 10 ? "0" + e : e) + ".mp4",
//         timeout: 2147483647
//     },
//     function(err) {
//         if (err) throw err;
//         console.log("done");
//     }
// );

// function ensureDirectoryExistence(filePath) {
//     let dirname = path.dirname(filePath);
//     if (fs.existsSync(dirname)) return true;
//     ensureDirectoryExistence(dirname);
//     fs.mkdirSync(dirname);
// }

// const { Builder, By, Key, until } = require("selenium-webdriver");
// var seleniumDrivers = require("selenium-drivers");
// var download = require("download-file");
// const webdriver = require("selenium-webdriver");
// const firefox = require("selenium-webdriver/firefox");
// profile = new firefox.Profile();
// profile.setAcceptUntrustedCerts(true);
// profile.setAssumeUntrustedCertIssuer(false);
// var opts = new firefox.Options();
// opts.setProfile(profile);

// let driver = new webdriver.Builder()
//     .forBrowser("firefox")
//     .setFirefoxOptions(/* ... */)
//     .build();
// driver.get(
//     "https://www927.playercdn.net/1p-dl/0/WMMCYxxOPHRrJq5qkBzPww/1529831374/170508/120Oz0GnGEG7hsA.mp4?name=CMSBeelzebub01720p633DC9E6r610.1r781-rh-601.mp4-720.mp4"
// );
// seleniumDrivers
//     .init({
//         browserName: "firefox",
//         download: true,
//         silent: true
//     })
//     .then(function() {
//         var driver = new Builder().forBrowser("firefox").build();
//         driver.get(
//             "https://www927.playercdn.net/1p-dl/0/WMMCYxxOPHRrJq5qkBzPww/1529831374/170508/120Oz0GnGEG7hsA.mp4?name=CMSBeelzebub01720p633DC9E6r610.1r781-rh-601.mp4-720.mp4"
//         );
//     });

// wget --output-document="./Beelzebub/Season 1/Beelzebub S01E01.mp4" https://www927.playercdn.net/1p-dl/0/WMMCYxxOPHRrJq5qkBzPww/1529831374/170508/120Oz0GnGEG7hsA.mp4?name=CMSBeelzebub01720p633DC9E6r610.1r781-rh-601.mp4-720.mp4

// var url =
//     "https://www927.playercdn.net/1p-dl/0/WMMCYxxOPHRrJq5qkBzPww/1529831374/170508/120Oz0GnGEG7hsA.mp4?name=CMSBeelzebub01720p633DC9E6r610.1r781-rh-601.mp4-720.mp4";
// download(
//     url,
//     {
//         directory: "./Beelzebub/Season 1/",
//         filename: "Beelzebub S01E01.mp4",
//         timeout: 9999999999999999999999999999
//     },
//     function(err) {
//         if (err) throw err;
//         console.log("done");
//     }
// );

// async function getPic() {
//     const browser = await puppeteer.launch({ headless: false });
//     var tabs = [await browser.newPage()];
//     await tabs[0].goto("https://google.com");
//     await tabs[0].setViewport({ width: 1000, height: 500 });
//     await tabs[0].screenshot({ path: "google.png" });
//     tabs.push(await browser.newPage());
//     await tabs[1].goto("https://facebook.com");
//     await tabs[1].setViewport({ width: 1000, height: 500 });
//     await tabs[1].screenshot({ path: "facebook.png" });
//     await browser.close();
// }

// getPic();

// download(
//     urls[1],
//     {
//         directory: "./downloads/" + name + "/Season " + s,
//         filename: name + " S0" + s + "E" + (e < 10 ? "0" + e : e) + ".mp4",
//         timeout: 2147483647
//     },
//     function(err) {
//         if (err) throw err;
//         console.log("done");
//     }
// );

// let urls = [];
// for (let node of document.querySelectorAll("table.listing tbody tr td a")) {
//     if (node.href) urls.push(node.href + "&s=rapidvideo");
// }
// urls.reverse();
// console.log(urls);
// //window.location = urls[0];

// // console.log(document.querySelector("#divDownload a").href);
// // window.location = document.querySelector("#divDownload a").href;

// function getElementsByText(str, tag = 'span') {
//     return Array.prototype.slice.call(document.getElementsByTagName(tag)).filter(el => el.textContent.trim() === str.trim());
// }

// console.log(getElementsByText("Download 720p")[0].parentElement.href);

// https://www927.playercdn.net/1p-dl/0/WMMCYxxOPHRrJq5qkBzPww/1529831374/170508/120Oz0GnGEG7hsA.mp4?name=CMSBeelzebub01720p633DC9E6r610.1r781-rh-601.mp4-720.mp4

// const puppeteer = require("puppeteer");
// let getDownloadURLs = async target => {
//     const browser = await puppeteer.launch({ headless: false });
//     var tab = await browser.newPage();
//     tab.goto(
//         "https://www2485.playercdn.net/1p-dl/1/VqtkMTc0MU7OGK4qPycWRw/1529915453/170509/715UNeoTPFtzB39.mp4?name=HighschooloftheDeadEp12AllDeadsAttack1080pBluRayx264ggTHORAr752.1r916-rh-650.mp4-720.mp4",
//         { waitUntil: "load" }
//     );
//     var tab = await browser.newPage();
//     tab.goto(
//         "https://www3009.playercdn.net/1p-dl/1/3utjPsC1gVOdCfW1iBDCYg/1529913816/170510/0180AleKmjDLkJj.mp4?name=OZCBlackLagoonE12GuerrillasintheJungler599.1r664-rh-297.mp4-720.mp4",
//         { waitUntil: "load" }
//     );
// };
// getDownloadURLs();

// console.log(fs.statSync("C:/Users/dutta/Downloads/KissAnime/Clannad/Season 1/Clannad S01E17.mp4"));
// console.log(fs.statSync("C:/Users/dutta/Downloads/KissAnime/Clannad/Season 1/Clannad S01E18.mp4"));

// getDuration("C:/Users/dutta/Downloads/KissAnime/Clannad/Season 2/Clannad S02E03.mp4")
//     .then(duration => {
//         console.log("Good file 03");
//     })
//     .catch(err => {
//         console.log("Bad file 03");
//     });
// getDuration("C:/Users/dutta/Downloads/KissAnime/Clannad/Season 2/Clannad S02E04.mp4")
//     .then(duration => {
//         console.log("Good file 04");
//     })
//     .catch(err => {
//         console.log("Bad file 04");
//     });

// getDownloadURLs(args[0]).then(async links => {
//     const browser = await puppeteer.launch({ headless: false });
//     for (let link of links[1]) {
//         let tab = await browser.newPage();
//         tab.goto(link, err => console.log(err));
//     }
// });

// var a = ["a", "b", "c", "d"];
// var search = "c";
// var wow = parseInt("waow");
// console.log(wow);
// // console.log(isNaN(wow));
// console.log(isNaN(wow) ? a.indexOf(search) + 1 : wow);

// cls && node index.js [url] [season #] "[title (optional)]" [# to ignore from beginning (optional)]
// cls && node index.js http://kissanime.ru/Anime/Spice-and-Wolf 1 "Spice and Wolf" && node index.js http://kissanime.ru/Anime/Spice-and-Wolf-II 2 "Spice and Wolf"
// cls && node index.js http://kissanime.ru/Anime/Trigun-Sub 1 "Trigun"
// cls && node index.js http://kissanime.ru/Anime/Trinity-Seven 1
// cls && node index.js http://kissanime.ru/Anime/School-Days 1
// cls && node index.js http://kissanime.ru/Anime/Saraiya-Goyou 1 "House of Five Leaves"
// cls && node index.js http://kissanime.ru/Anime/Ryuuou-no-Oshigoto 1 "The Ryuo's Work is Never Done!"
// cls && node index.js http://kissanime.ru/Anime/Yu-Yu-Hakusho-Sub 1 "Yu Yu Hakusho" 32
// cls && node index.js http://kissanime.ru/Anime/Plastic-Memories 1 "Plastic Memories" 1
// cls && node index.js http://kissanime.ru/Anime/Nogizaka-Haruka-no-Himitsu 1 "Haruka Nogizaka's Secret" 4
// cls && node index.js http://kissanime.ru/Anime/Nogizaka-Haruka-no-Himitsu-Purezza 2 "Haruka Nogizaka's Secret" 2
// cls && node index.js http://kissanime.ru/Anime/Kaze-no-Stigma-Sub 1 "Stigma of the Wind"
// cls && node index.js http://kissanime.ru/Anime/Kaiji 1 "Kaiji" && node index.js http://kissanime.ru/Anime/Kaiji-2 2 "Kaiji"
// cls && node index.js http://kissanime.ru/Anime/Hunter-x-Hunter-2011 1 "Hunter x Hunter"
// cls && node index.js http://kissanime.ru/Anime/Net-juu-no-Susume 1 "Recovery of an MMO Junkie"
// cls && node index.js http://kissanime.ru/Anime/Itsudatte-Bokura-no-Koi-wa-10-cm-Datta 1 "Our love has always been 10 centimeters apart"
// cls && node index.js kissanime.ru/Anime/CLANNAD-After-Story 2 "Clannad"
// cls && node index.js http://kissanime.ru/Anime/Fukumenkei-Noise 1 "Anonymous Noise"

// if (threads === 1) cb(true);
// if (size < 5) download(name, s, e, url, threads/10);

// download(name, season, links[2][index], links[1][index], useBackup => {
//     if (useBackup) {
//         console.log("Using backup...");
//         backup.goto(links[1][index]);
//     }
//     if (index < links[1].length - 1) downloadHandler(name, season, links, index + 1, backup);
// });

// function asyncDownloader(name, season, links, index, browser) {
//     // var backupUrls = [];
//     // var episodesHandled = 0;
//     for (let i = index; i < links[1].length; i++)
//         download(name, season, links[2][i], links[1][i], useBackup => {
//             if (useBackup) {
//                 console.log("Using backup on episode " + links[2][i] + "...");
//                 // backupUrls.push(links[1][i]);
//                 browserDownload(browser, links[1][index]);
//             }
//             // episodesHandled += 1;
//             // if (episodesHandled == links[2].length && backupUrls.length > 0) handleBackups(backupUrls);
//         });
// }

// const fs = require("fs");
// const chokidar = require("chokidar");
// const getDuration = require("get-video-duration");

// var browserDownloads = [
//     [
//         "https://www2372.playercdn.net/1p-dl/0/BnTkWB0nIGtUIvM5AA8QEQ/1530092896/180625/dD3BMaH2kHAid1X.mp4?name=[HorribleSubs]_Fumikiri_Jikan_-_12_[720p].avi-720.mp4"
//     ],
//     ["C:/Users/dutta/Downloads/KissAnime/Crossing Time S01E12.mp4"]
// ];
// var watcher = chokidar.watch("C:/Users/dutta/Downloads/*.mp4", { persistent: true });

// watcher.on("add", (path, stats) => {
//     console.log(path);
//     var fname = path.substring("C:\\Users\\dutta\\Downloads\\".length);
//     console.log(fname);
//     // console.log(stats);
//     getDuration(path)
//         .then(duration => {
//             console.log("Good Video");
//             var index = browserDownloads[0].findIndex(val => val.includes(fname));
//             console.log("Index of file data:", index);
//             fs.rename(path, browserDownloads[1][index], err => console.log(err ? err : ""));
//         })
//         .catch(err => {
//             console.log("Bad Video");
//         });
// });

// function asyncDownloader(name, season, links, index, browser) {
//     for (let i = index; i < links[1].length; i++)
//         download(name, season, links[2][i], links[1][i], useBackup => {
//             if (useBackup) {
//                 console.log("Using backup on episode " + links[2][i] + "...");
//                 browserDownload(links[1][index]);
//             }
//         });
// }

// async function handleBackups(links) {
//     const browser = await puppeteer.launch({ headless: false });
//     for (let link of links) {
//         let tab = await browser.newPage();
//         tab.goto(link, err => console.log("Downloading " + link + " on browser..."));
//     }
// }

// const fs = require("fs");
// console.log(fs.statSync("C:/Users/dutta/Downloads/KissAnime/The Royal Tutor/Season 1/The Royal Tutor S01E11.mp4"));
// C:\\Users\\dutta\\Downloads\\KissAnime\\Oushitsu Kyoushi Haine\\Season 1\\Oushitsu Kyoushi Haine S01E11.mp4
// "C:\Users\dutta\Downloads\KissAnime\Oushitsu Kyoushi Haine\Season 1\Oushitsu Kyoushi Haine S01E11.mp4"

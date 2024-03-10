"use server";
import page from "@/app/page";
import { request } from "http";
import { extractAqi, extractWeather } from "../extractdata";
const args = [
  "--aggressive-cache-discard",
  "--disable-cache",
  "--disable-application-cache",
  "--disable-offline-load-stale-cache",
  "--disable-gpu-shader-disk-cache",
  "--media-cache-size=0",
  "--disk-cache-size=0",
  "--disable-notifications",
];
const blockedUrls = [
  "https://accuweather-com.videoplayerhub.com/btTag.js",
  "https://cdn.p-n.io/pushly-sdk.min.js",
  "https://fastlane.rubiconproject.com/a/api/fastlane.json",
  "https://hbopenbid.pubmatic.com/translator",
  "https://htlb.casalemedia.com/openrtb/pbjs",
  "https://ib.adnxs.com/ut/v3/prebid",
  "https://s.go-mpulse.net/boomerang/WVCM2-8MB3H-J4PHA-TKSJD-9YGAB",
  "https://sb.scorecardresearch.com/p",
  "https://securepubads.g.doubleclick.net/gampad/adx",
  "https://tlx.3lift.com/header/auction",
  "https://www.accuweather.com/akam/13/7efb0628",
];
const puppeteerExtra = require("puppeteer-extra");
const Stealth = require("puppeteer-extra-plugin-stealth");
puppeteerExtra.use(Stealth());

const presets = {
  viewport: {
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  },
  geo: { latitude: 51.1657, longitude: 10.4515 },
  useragents:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
};

export const scrapeWeather = async (weatherUrl: string) => {
  const browser = await puppeteerExtra.launch({
    headless: false,
    args,
  });
  try {
    const Page = await browser.newPage();
    await Page.setGeolocation(presets.geo);
    await Page.setUserAgent(presets.useragents);
    await Page.setDefaultNavigationTimeout(0);
    await Page.setRequestInterception(true);
    Page.on("request", (req: any) => {
      const requestUrl = req.url();
      if (
        req.resourceType() == "stylesheet" ||
        req.resourceType() == "font" ||
        req.resourceType() == "image" ||
        blockedUrls.some((url) => requestUrl.includes(url))
      ) {
        req.abort();
      } else {
        req.continue();
      }
    });

    await Page.goto(weatherUrl);
    const WeatherContent = await Page.content();
    await Page.goto(
      weatherUrl.replace("weather-forecast", "air-quality-index")
    );
    const AQIContent = await Page.content();
    await browser.close();
    const WeatherData = await extractWeather(WeatherContent);
    const AQIData = await extractAqi(AQIContent);

    return {
      WeatherData,
      AQIData,
    };
  } catch (error) {
    console.error(error);
  }
};
export const findCity = async () => {
  const browser = await puppeteerExtra.launch({
    headless: false,
    args,
  });
  try {
    const Page = await browser.newPage();
    await Page.setGeolocation(presets.geo);
    await Page.setUserAgent(presets.useragents);
    await Page.setDefaultNavigationTimeout(0);
    // await Page.setRequestInterception(true);
    // Page.on("request", (req: any) => {
    //   const requestUrl = req.url();
    //   if (
    //     req.resourceType() == "stylesheet" ||
    //     req.resourceType() == "font" ||
    //     req.resourceType() == "image" ||
    //     blockedUrls.some((url) => requestUrl.includes(url))
    //   ) {
    //     req.abort();
    //   } else {
    //     req.continue();
    //   }
    // });
    await Page.goto("https://www.accuweather.com/");
    await Page.waitForSelector(".search-input");
    await Page.type(
      ".search-input",
      "lahore"
    );
    await Page.keyboard.press("Enter");
    await browser.close();
    const WeatherContent = await Page.content();
    console.log(WeatherContent);
  } catch (error) {
    console.error(error);
  }
};

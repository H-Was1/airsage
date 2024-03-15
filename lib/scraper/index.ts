"use server";
import { extractAqi, extractWeather, extractNames } from "../extractdata";
import { getCityByUrl } from "../actions";

const args = [
  "--incognito",
  "--aggressive-cache-discard",
  "--disable-cache",
  "--disable-application-cache",
  "--disable-offline-load-stale-cache",
  "--disable-gpu-shader-disk-cache",
  "--media-cache-size=0",
  "--disk-cache-size=0",
  "--disable-notifications",
  "--no-sandbox",
  "--disable-setuid-sandbox",
  "--ignore-certificate-errors",
  '--proxy-server="direct://"',
  "--proxy-bypass-list=*",
];

import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import Adblocker from "puppeteer-extra-plugin-adblocker";

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
export const scrapeWeather = async (url: string) => {
  await puppeteer.use(Adblocker({ blockTrackers: true }));
  const browser = await puppeteer.use(StealthPlugin()).launch({
    // headless: false,
    args,
  });
  try {
    const Page = (await browser.pages())[0];
    await Page.setGeolocation(presets.geo);
    await Page.setUserAgent(presets.useragents);
    await Page.setDefaultNavigationTimeout(0);
    await Page.setRequestInterception(true);
    Page.on("request", (req: any) => {
      const requestUrl = req.url();
      if (
        req.resourceType() == "stylesheet" ||
        req.resourceType() == "font" ||
        req.resourceType() == "image"
      ) {
        req.abort();
      } else {
        req.continue();
      }
    });

    await Page.goto(url);
    const WeatherContent = await Page.content();
    const aqiUrl = await Page.url();
    await Page.goto(aqiUrl.replace("weather-forecast", "air-quality-index"));
    const AQIContent = await Page.content();
    await browser.close();
    console.log("closed");
    const weatherData = await extractWeather(WeatherContent);
    const aqiData = await extractAqi(AQIContent);

    return {
      weatherData,
      aqiData,
    };
  } catch (error) {
    console.error("scraping weather + aqi" + error);
  }
};
export const findCity = async (query: string) => {
  "use client";
  await puppeteer.use(Adblocker({ blockTrackers: true }));
  const browser = await puppeteer.use(StealthPlugin()).launch({
    // headless: false,
    args,
  });
  try {
    const Page = (await browser.pages())[0];
    await Page.setGeolocation(presets.geo);
    await Page.setUserAgent(presets.useragents);
    await Page.setDefaultNavigationTimeout(0);
    await Page.setRequestInterception(true);
    Page.on("request", (req: any) => {
      const requestUrl = req.url();
      if (
        // req.resourceType() == "stylesheet" ||
        req.resourceType() == "font" ||
        req.resourceType() == "image"
      ) {
        req.abort();
      } else {
        req.continue();
      }
    });
    await Page.goto(
      `https://www.accuweather.com/en/search-locations?query=${
        query.includes(" ") ? query.split(" ").join("+") : query
      }`
    );
    await Page.waitForSelector(".search-results-heading");
    const content = await Page.content();
    await browser.close();
    console.log("closed");

    const data = await extractNames(content);
    return data;
  } catch (error) {
    console.error("Finding City name" + error);
  }
};

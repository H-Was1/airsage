"use server";
import { extractAqi, extractWeather, extractNames } from "../extractdata";
import { getCityByUrl } from "../actions";

const StealthPlugin = require("puppeteer-extra-plugin-stealth");
import puppeteer from "puppeteer-extra";
import Adblocker from "puppeteer-extra-plugin-adblocker";
import { initializer, args } from "../utils";
puppeteer.use(Adblocker({ blockTrackers: true }));

export const scrapeWeather = async (url) => {
  const browser = await puppeteer.launch({
    // headless: false,
    args,
  });
  try {
    const Page = (await browser.pages())[0];
    await initializer(Page);
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
export const findCity = async (query) => {
  // "use client";
  const browser = await puppeteer.launch({
    headless: false,
    args,
  });
  try {
    const Page = (await browser.pages())[0];
    await initializer(Page);
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

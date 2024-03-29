import { initializer, args } from "../utils";
// const puppeteer = require("puppeteer-core");
import puppeteer from "puppeteer-core";

export const scrapeWeather = async (url) => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: process.env.SBR_WS_ENDPOINT,
  });
  try {
    const page = (await browser.pages())[0];
    await initializer(page);
    await page.goto(url);
    const WeatherContent = await page.content();
    const aqiUrl = await page.url();
    await page.goto(aqiUrl.replace("weather-forecast", "air-quality-index"));
    const AQIContent = await page.content();
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
  } finally {
    return await browser.close();
  }
};
export const findCity = async (query) => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: process.env.SBR_WS_ENDPOINT,
  });
  try {
    const page = (await browser.pages())[0];
    await initializer(page);
    await page.goto(
      `https://www.accuweather.com/en/search-locations?query=${
        query.includes(" ") ? query.split(" ").join("+") : query
      }`
    );
    await page.waitForSelector(".search-results-heading");
    const content = await page.content();
    await browser.close();
    console.log("closed");

    const data = await extractNames(content);
    return data;
  } catch (error) {
    console.error("Finding City name" + error);
  } finally {
    return await browser.close();
  }
};

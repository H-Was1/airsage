"use server";
import * as cheerio from "cheerio";
const aqiDataSelectors = {
  quality: {
    index:
      "#current > div > div > div.content-wrapper > div.particle-chart > div > div > div > div.aq-number",
    scale:
      "#current > div > div > div.content-wrapper > div.air-quality-data-wrapper > h3 > p.category-text",
    description:
      "#current > div > div > div.content-wrapper > div.air-quality-data-wrapper > h3 > p.statement",
  },
  pollutants: {
    PM10: {
      value:
        "#pollutants > div:nth-child(1) > div.column.desktop-left > div.pollutant-index",

      conclusion: "#pollutants > div:nth-child(1) > h3 > div.category",
    },
    PM25: {
      value:
        "#pollutants > div:nth-child(2) > div.column.desktop-left > div.pollutant-index",
      conclusion: "#pollutants > div:nth-child(2) > h3 > div.category",
    },
    NO2: {
      value:
        "#pollutants > div:nth-child(3) > div.column.desktop-left > div.pollutant-index",

      conclusion: "#pollutants > div:nth-child(3) > h3 > div.category",
    },
    O3: {
      value:
        "#pollutants > div:nth-child(4) > div.column.desktop-left > div.pollutant-index",
      conclusion: "#pollutants > div:nth-child(4) > h3 > div.category",
    },
  },
};
const weatherDataSelectors = {
  today:
    "body > div > div.two-column-page-content > div.page-column-1 > div.page-content.content-module > div.today-forecast-card.content-module > a > div.body > div:nth-child(1) > p",
  tonight:
    "body > div > div.two-column-page-content > div.page-column-1 > div.page-content.content-module > div.today-forecast-card.content-module > a > div.body > div:nth-child(2) > p",
  current: {
    temperature:
      "body > div > div.two-column-page-content > div.page-column-1 > div.page-content.content-module > a.cur-con-weather-card.lbar-panel.content-module > div.cur-con-weather-card__body > div:nth-child(1) > div.forecast-container > div > div.temp",
    weather:
      "body > div > div.two-column-page-content > div.page-column-1 > div.page-content.content-module > a.cur-con-weather-card.lbar-panel.content-module > div.cur-con-weather-card__body > div:nth-child(1) > div:nth-child(2) > span.phrase",
  },
  wind: "body > div > div.two-column-page-content > div.page-column-1 > div.page-content.content-module > a.cur-con-weather-card.lbar-panel.content-module > div.cur-con-weather-card__body > div.cur-con-weather-card__panel.details-container > div:nth-child(2) > span.value",
  collectionTime:
    "body > div > div.two-column-page-content > div.page-column-1 > div.page-content.content-module > a.cur-con-weather-card.lbar-panel.content-module > div.title-container > p",
};

export async function extractAqi(data: string) {
  const $ = cheerio.load(data);
  const $scale = $(aqiDataSelectors.quality.scale).text();
  const $description = $(aqiDataSelectors.quality.description).text().trim();
  const $index = $(aqiDataSelectors.quality.index).text();
  //PM10

  //

  const $pm10Value = $(aqiDataSelectors.pollutants.PM10.value).text();

  const $pm10conclusion = $(aqiDataSelectors.pollutants.PM10.conclusion).text();
  //PM2.5

  //

  const $pm2Value = $(aqiDataSelectors.pollutants.PM25.value).text();

  const $pm2conclusion = $(aqiDataSelectors.pollutants.PM25.conclusion).text();
  //NO2

  //

  const $no2Value = $(aqiDataSelectors.pollutants.NO2.value).text();

  const $no2conclusion = $(aqiDataSelectors.pollutants.NO2.conclusion).text();
  //O3

  //

  const $o3Value = $(aqiDataSelectors.pollutants.O3.value).text();

  const $o3conclusion = $(aqiDataSelectors.pollutants.O3.conclusion).text();
  //Data

  //

  return {
    quality: {
      scale: $scale,
      index: ($index.match(/\d+/)?.[0] as string) || "",
      description: $description,
    },
    pollutants: {
      pm10: {
        value: $pm10Value,

        conclusion: $pm10conclusion,
      },
      pm25: {
        value: $pm2Value,

        conclusion: $pm2conclusion,
      },
      no2: {
        value: $no2Value,

        conclusion: $no2conclusion,
      },
      o3: {
        value: $o3Value as string,
        conclusion: $o3conclusion as string,
      },
    },
  };
}
export async function extractWeather(data: string) {
  const $ = cheerio.load(data);
  const $collectionTime = $(weatherDataSelectors.collectionTime).text().trim();

  const $today = $(weatherDataSelectors.today)
    .text()
    .replace(/\t/g, "")
    .replace(/\n/g, "")
    .replace(/Hi.*$/, "")
    .replace(/Lo.*$/, "");
  const $tonight = $(weatherDataSelectors.tonight)
    .text()
    .replace(/\t/g, "")
    .replace(/\n/g, "")
    .replace(/Lo.*$/, "")
    .replace(/Hi.*$/, "")
    .replace("Tomorrow:", "")
    .replace("Tonight:", "");

  const $temperature = $(weatherDataSelectors.current.temperature).text();
  const $weather = $(weatherDataSelectors.current.weather).text();
  const $wind = $(weatherDataSelectors.wind).text();
  if ($collectionTime.includes("PM")) {
    return {
      tonight: $today,
      tomorrow: $tonight,
      today: "",
      current: {
        temperature: $temperature,
        weather: $weather,
      },
      wind: $wind,
      collectionTime: $collectionTime,
    };
  } else {
    return {
      today: $today,
      tonight: $tonight,
      tomorrow: "",
      current: {
        temperature: $temperature,
        weather: $weather,
      },
      wind: $wind,
      collectionTime: $collectionTime,
    };
  }
}

export async function extractNames(data: string) {
  const $ = cheerio.load(data);
  const locations: Array<{
    name: string;
    longName: string;
    url: string;
    index: number;
  } | null> = [];

  // Select the elements containing the location names
  $(".locations-list a").each((index, element) => {
    // Extract the short and long names
    const name = $(element).find(".location-name").text();
    const longName = $(element).find(".location-long-name").text();
    // Extract the URL
    const url =
      $(element).attr("href") ||
      "";

    // Create an object with the extracted data
    const location = {
      name,
      longName,
      url,
      index,
    };

    // Push the object into the array
    locations.push(location);
  });

  return locations;
}

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getAllCities } from "./actions";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const organs = [
  {
    name: "General",
    description:
      "Almost every organ in the body can be impacted by air pollution due to its ability to penetrate the bloodstream and cause systemic inflammation and carcinogenicity. This includes the liver, kidneys, and other organs that may not be directly mentioned but are still at risk .",
  },
  {
    name: "Lungs",
    description:
      "Air pollution, including poor AQI, directly impacts the lungs by causing inflammation, oxidative stress, and immunosuppression. This can lead to conditions like chronic obstructive pulmonary disease (COPD), lung cancer, and pneumonia .",
  },
  {
    name: "Heart",
    description:
      "Exposure to air pollutants can increase the risk of ischemic heart disease and stroke. Particle pollution, a significant component of poor AQI, is particularly harmful to the cardiovascular system .",
  },
  {
    name: "Brain",
    description:
      "Air pollution can lead to cognitive impairment and neurological diseases. The brain is highly sensitive to air pollutants, which can affect its function and lead to long-term health issues .",
  },
  {
    name: "Eyes",
    description:
      "Poor air quality, especially with high levels of particulate matter, can increase the risk of cataracts and other eye-related health problems. This is particularly concerning for household air pollution .",
  },
  {
    name: "Respiration",
    description:
      "Beyond the lungs, poor AQI can worsen existing respiratory conditions like asthma and emphysema, leading to more frequent asthma attacks and diminished lung function .",
  },
];
export interface CityProps {
  _id?: any;
  name: string;
  longName: string;
  weatherUrl: string;
  weatherData?: {
    tonight: string;
    tomorrow: string;
    today: string;
    wind: string;
    collectionTime: string;
    current: {
      temperature: string;
      weather: string;
    };
  };
  aqiData?: {
    quality: {
      scale: string;
      index: string;
      description: string;
    };
    pollutants: {
      no2: {
        value: String;
        conclusion: String;
      };
      pm25: {
        value: String;
        conclusion: String;
      };
      pm10: {
        value: String;
        conclusion: String;
      };
      o3: {
        value: String;
        conclusion: String;
      };
    };
  };
}
export const args = [
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
  `--no-sandbox`,
  `--headless`,
  `--disable-gpu`,
  `--disable-dev-shm-usage`,
];
export const presets = {
  viewport: {
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  },
  geo: { latitude: 51.1657, longitude: 10.4515 },
  useragents:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
};
//@ts-ignore
export const interceptor = (req) => {
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
};
//@ts-ignore

export const initializer = async (Page) => {
  await Page.setGeolocation(presets.geo);
  await Page.setUserAgent(presets.useragents);
  await Page.setDefaultNavigationTimeout(0);
  await Page.setRequestInterception(true);
  Page.on("request", interceptor);
};

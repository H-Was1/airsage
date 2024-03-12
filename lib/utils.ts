import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const organs = [
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
    name: "Respiratory System",
    description:
      "Beyond the lungs, poor AQI can worsen existing respiratory conditions like asthma and emphysema, leading to more frequent asthma attacks and diminished lung function .",
  },
  {
    name: "General Health",
    description:
      "Almost every organ in the body can be impacted by air pollution due to its ability to penetrate the bloodstream and cause systemic inflammation and carcinogenicity. This includes the liver, kidneys, and other organs that may not be directly mentioned but are still at risk .",
  },
];
export interface CityProps {
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
       pm10: {
         value: string;
         conclusion: string;
       };
       pm25: {
         value: string;
         conclusion: string;
       };
       no2: {
         value: string;
         conclusion: string;
       };
       o3: {
         value: string;
         conclusion: string;
       };
     };
  };
 }

"use server";

import console from "console";
import City from "../db/city";
import connectToDB from "../mongoose";
import { scrapeWeather } from "../scraper";
import { CityProps } from "../utils";

// import { generateEmailBody, sendEmail } from "../NodeMailer";

export async function getAllCities() {
  connectToDB();
  const cities = await City.find({});
  return cities;
}

export async function getCity(name: string) {
  connectToDB();
  try {
    const city = await City.findOne({ name });
    if (city === null) throw new Error("City is unavailable right now");
    return city;
  } catch (error) {
    console.error(error);
  }
}
export async function getCityByUrl(url: string) {
  connectToDB();
  try {
    const city = await City.findOne({ weatherUrl: url });
    if (city === null) throw new Error("City is unavailable right now");
    return city;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function updateAll() {
  try {
    const cities = await getAllCities();

    for (const city of cities) {
      const data = await scrapeWeather(city.weatherUrl);

      await City.findByIdAndUpdate(
        { _id: city._id },
        { $set: { aqiData: data?.AQIData, weatherData: data?.WeatherData } }
      );
    }
    return 1;
  } catch (error: any) {
    console.error("ERROR: updating daily data- " + error.message);
    return null;
  }
}

// export async function sendAll() {
//   try {
//     const cities = await getAllCities();

//     for (const city of cities) {
//       const emails = city.emails;
//       if (emails.length > 0) {
//         const body = await generateEmailBody(city, "Data");
//         await sendEmail(body, emails);
//       }
//     }
//     return 1;
//   } catch (error) {
//     console.error("ERROR: sending Emails " + error.message);
//     return null;
//   }
// }

// export async function subscribe(city: string, email: string) {
//   try {
//     const document = await getCity(city);
//     const emailPresent = document.emails.includes(email);
//     if (emailPresent) return undefined as undefined;

//     await City.updateOne({ name: city }, { $push: { emails: email } });
//     const data = await generateEmailBody(document, "Welcome");
//     sendEmail(data, [email]);
//     return 1;
//   } catch (error) {
//     console.error("ERROR: Adding Email " + error.message);
//   }
// }

export async function unsubscribe(email: string) {
  try {
    connectToDB();
    await City.updateMany({}, { $pull: { emails: email } });
    return 1;
  } catch (error) {
    console.error("Removing Email " + error);
  }
}
export async function manageNewLocation({
  url,
  name,
  longName,
  index,
}: {
  url: string;
  name: string;
  longName: string;
  index: number;
}) {
  const scrapedData = await scrapeWeather(url);
  const finalData = {
    name,
    longName,
    weatherUrl: url,
    weatherData: scrapedData?.WeatherData,
    aqiData: scrapedData?.AQIData,
    ...scrapedData,
  };
  const existing = getCityByUrl(finalData.weatherUrl);
  if (!existing) return;
  await addOne(finalData);
}

export async function addOne(data: CityProps) {
  try {
    connectToDB();
    const newCity = await City.create({ ...data });
    return 1;
  } catch (error) {
    console.error("Adding City " + error);
  }
}

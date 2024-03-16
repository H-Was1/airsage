"use server";

import console from "console";
import City from "../db/city";
import connectToDB from "../mongoose";
import { scrapeWeather } from "../scraper";
import { CityProps } from "../utils";
import { revalidatePath } from "next/cache";

export async function getAllCities() {
  connectToDB();
  const cities: CityProps[] = await City.find({});
  return cities;
}

export async function getCity(name: string) {
  connectToDB();
  try {
    const city: CityProps | null = await City.findOne({ name });
    if (city === null) throw new Error("City is unavailable right now");
    return city;
  } catch (error:any) {
    console.error(error.message);
  }
}
export async function getCityByUrl(url: string) {
  connectToDB();
  try {
    const city = await City.findOne({ weatherUrl: url });
    if (city === null) throw new Error("City is unavailable right now");
    return city;
  } catch (error:any) {
    console.error(error.message);
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
        { $set: { aqiData: data?.aqiData, weatherData: data?.weatherData } }
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
//   } catch (error:any) {
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
//   } catch (error:any) {
//     console.error("ERROR: Adding Email " + error.message);
//   }
// }

export async function unsubscribe(email: string) {
  try {
    connectToDB();
    await City.updateMany({}, { $pull: { emails: email } });
    return 1;
  } catch (error:any) {
    console.error("Removing Email " + error.message);
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
  try {
    if (!url) throw new Error("URL not provided");
    const extendedUrl = url?.replace("/", "https://www.accuweather.com/");
    const existing = await City.findOne({ weatherUrl: extendedUrl });
    if (existing) throw new Error(`${name} already exists`);
    const scrapedData = await scrapeWeather(extendedUrl);
    const finalData = {
      name,
      longName,
      weatherUrl: extendedUrl,
      ...scrapedData,
    };
    await addOne(finalData);
  } catch (error:any) {
    console.error("managing location: " + error.message);
    throw error;
  }
}

export async function addOne(data: CityProps) {
  try {
    connectToDB();
    const newCity = await City.create(data);
    revalidatePath("/locations");
  } catch (error:any) {
    console.error("Adding City " + error.message);
    throw error;
  }
}

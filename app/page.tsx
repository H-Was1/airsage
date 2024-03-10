import Hero from "@/app/_frags/hero";
import Navbar from "./_frags/Navbar";
import { findCity, scrapeWeather } from "@/lib/scraper";

export default async function Home() {
  await findCity();
  // const data = await scrapeWeather(
  //   "https://www.accuweather.com/en/pk/gulberg/259953/weather-forecast/259953"
  // );
  // console.log(data);

  return (
    <>
      <Navbar />
      <section className="relative">
        <Hero />
      </section>
    </>
  );
}
// bg-gradient-to-bl from-green-600 via-green-400 via-30% to-emerald-400 to-90%

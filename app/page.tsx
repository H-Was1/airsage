import Hero from "@/app/_frags/hero";
import Navbar from "./_frags/Navbar";
import { findCity, scrapeWeather } from "@/lib/scraper";
import Image from "next/image";
import TabComp from "./_frags/tab";
import Footer from "./_frags/footer";
import View from "./_frags/view";
import connectToDB from "@/lib/mongoose";
import { manageNewLocation } from "@/lib/actions";
import { url } from "inspector";

export default async function Home() {
  (async function () {
    // const locations = await findCity("karachi");
    // const newLocation = locations[3];
    // console.log(newLocation);

    await manageNewLocation({
      name: "Butt Karachi",
      longName: "Lahore, PB PAK",
      url: "https://www.accuweather.com/web-api/three-day-redirect?key=GEO_74%2E324%2c31%2E567&postalCode=&target=",
      index: 3,
    });
  })();
  return (
    <>
      <Navbar />
      <section className="relative">
        <Hero />
      </section>
      <main className="backdrop-blur-3xl bg-gray-900/5 pt-10">
        <section className="relative flex items-center justify-center flex-col min-h-[60vh]">
          <div className="flex w-full h-full items-center justify-center blur-3xl opacity-10 absolute -z-10">
            <div className="bg-emerald-500 h-[40%] w-[70%]"></div>
          </div>
          <div className="absolute top-0 -translate-y-7">
            <p className="select-none text-yellow-600/50 lg:text-[9rem] text-7xl max-sm:text-5xl">
              Global Insights
            </p>
          </div>
          <div className="relative -z-10 flex flex-col justify-center items-center">
            <div className="bg-slate-50/10 backdrop-blur-sm rounded-3xl h-[8rem] w-auto absolute bottom-7 flex items-center justify-between px-4 gap-8 text-rose-500 sm:text-3xl">
              <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl max-sm:text-2xl font-bold tracking-wider">
                  &gt;30M
                </h1>
                <p>FORECASTS</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl max-sm:text-2xl font-bold tracking-wider">
                  &gt;1,108
                </h1>
                <p>LOCATIONS</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl max-sm:text-2xl font-bold tracking-wider">
                  &gt;99.99%
                </h1>
                <p>UPTIME</p>
              </div>
            </div>
            <div className="w-[90%] overflow-hidden select-none">
              <Image
                src={"/globe.png"}
                width={1120}
                height={120}
                alt="globe"
              ></Image>
            </div>
          </div>
        </section>
        <section className="lg:px-[10rem] px-8 relative pt-6">
          <div className="flex w-auto h-full items-center justify-center blur-3xl opacity-10 absolute -z-10">
            <div className="bg-rose-500 h-[40%] w-[70vw]"></div>
          </div>
          <div className="py-4 flex flex-col gap-3 justify-center items-center">
            <h1 className="text-yellow-400/80 sm:text-5xl sm:font-semibold text-2xl">
              Your Health Compass
            </h1>
            <p>How Our App Revolutionizes Your Well-being ?</p>
          </div>
          <div className="feature-grid md:grid-cols-12 md:grid-rows-12 grid-cols-1 md:min-h-screen gap-4">
            <div className="grid-acc rounded-[3rem] backdrop-blur-xl bg-slate-50/10 row-start-1 row-end-5 col-span-6 flex flex-col justify-center px-6 group gap-8">
              <div className="text-rose-600 flex items-center justify-center gap-2 transition-transform">
                <h1 className="text-3xl font-semibold">Accuracy</h1>
                <span className="translate-y-6 scale-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-150 group-hover:transition-transform duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    className="stroke-red-600"
                    role="icon"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </div>
              <p className="text-[.9rem]">
                Experience unparalleled accuracy in daily AQI and weather data,
                delivered straight to your inbox, powered by our advanced web
                scraping technology.
              </p>
              <div className="flex justify-between gap-1 max-md:w-full max-md:px-6 max-md:pb-3">
                <div className="flex h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="flex h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="flex h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="flex h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="flex h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="flex h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="flex h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="flex h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="flex h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="flex h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="flex h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="flex h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="flex h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="flex h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="flex h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="flex h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16 hidden md:flex">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16 hidden md:flex">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16 hidden md:flex">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16 hidden md:flex">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16 hidden md:flex">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16 hidden md:flex">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16 hidden md:flex">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16 hidden md:flex">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16 hidden md:flex">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16 hidden md:flex">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16 hidden md:flex">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16 hidden md:flex">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16 hidden md:flex">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
                <div className="h-10 w-[8px] items-end rounded-full bg-black/20 md:h-16 hidden md:flex">
                  <span className="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
              </div>
            </div>
            <div className="grid-time rounded-[3rem] backdrop-blur-xl bg-slate-50/10 row-start-1 row-end-5 col-span-6 group flex flex-col justify-center px-6 py-4 gap-4">
              <div className="text-rose-600 flex items-center justify-center gap-2 transition-transform">
                <h1 className="text-3xl font-semibold">Timely Updates</h1>
                <span className="translate-y-6 scale-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-150 group-hover:transition-transform duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    className="stroke-red-600"
                    role="icon"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </div>
              <p className="text-[.9rem]">
                Stay updated with our application&apos;s timely weather & AQI
                updates feature, delivering the latest weather and air quality
                information to your inbox . . .
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="bg-black/40 rounded-2xl px-4 py-4">
                  <h1 className="text-rose-500 text-[18px] text-center">
                    Everyday
                  </h1>
                  <p className="text-sm text-yellow-500">
                    Daily updates, your daily dose of knowledge.
                  </p>
                </div>
                <div className="bg-black/40 rounded-2xl px-4 py-4">
                  <h1 className="text-rose-500 text-[18px] text-center">
                    Twice A Day
                  </h1>
                  <p className="text-sm text-yellow-500">
                    Twice the updates, twice the insight.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-impact rounded-[3rem] backdrop-blur-xl bg-slate-50/10 row-start-5 row-end-13 col-span-8 group flex flex-col items-center gap-6 justify-center px-4 py-6">
              <div className="text-rose-600 flex items-center justify-center gap-4 transition-transform">
                <h1 className="text-3xl font-semibold">Impact on Health</h1>
                <span className="translate-y-6 scale-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-150 group-hover:transition-transform duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    className="stroke-red-600"
                    role="icon"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </div>
              <p className="text-[.9rem]">
                Air quality affects your health, and we&lsquo;re here to help.
                With our updates, you can protect yourself from the harmful
                effects of poor air quality, reducing the risk of premature
                death and costly health issues.
              </p>
              <TabComp />
            </div>
            <div className="grid-view rounded-[3rem] backdrop-blur-xl bg-slate-50/10 row-start-5 row-end-13 col-span-4 h-auto overflow-hidden px-4 group">
              <View />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

"use client";
import Link from "next/link";
import React, { useState } from "react";

function Hero() {
  const gradients = [
    "from-red-800 to-yellow-600",
    "from-emerald-500 to-yellow-400",
    "from-blue-600 to-sky-100",
    "from-orange-800 to-orange-200",
    "from-violet-600 to-violet-100",
  ];
  const gradientsb = [
    "from-red-800/10 to-yellow-300/30",
    "from-emerald-500/10 to-yellow-400/30",
    "from-blue-600/10 to-sky-300/30",
    "from-orange-800/10 to-orange-300/30",
    "from-violet-600/10 to-violet-300/30",
  ];
  const [hover, setHover] = useState(0);
  return (
    <>
      <div
        className={`absolute flex justify-center items-end h-[80%] -z-40 w-full`}
      >
        <div
          className={`bg-gradient-to-r from-20% blur-3xl ${gradientsb[hover]} h-[60%] w-[70%]`}
        ></div>
      </div>
      <main className="backdrop-blur-3xl h-screen lg:px-[10rem]">
        <div className="mx-auto max-w-screen px-6 md:px-10 pt-16">
          <h1
            className={`flex flex-col gap-1 transition font-display text-6xl font-bold leading-none md:text-[7rem] bg-gradient-to-r from-20% bg-clip-text text-transparent ${gradients[hover]} text-center`}
          >
            <span>We Monitor</span>
            <span>Weather & AQI</span>
            <span className="text-3xl">so you don&lsquo;t have to . . .</span>
          </h1>
          <div className="mt-8 grid gap-2 md:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <div
              onMouseEnter={() => setHover(1)}
              onMouseLeave={() => setHover(0)}
              className="group relative flex flex-col items-center p-6 md:p-8 cursor-default bg-white/5 backdrop-blur transition rounded-lg xl:first:!rounded-l-[3rem] xl:last:!rounded-r-[3rem] text-zinc-50 hover:scale-[1.02] hover:bg-white/10"
            >
              <Link className="absolute inset-0 z-10" href="/weather"></Link>
              <h3 className="flex items-center gap-1 text-zinc-50 font-display text-xl font-medium leading-none md:text-2xl">
                <span>Weather</span>
              </h3>
              <p className="mt-2 grow opacity-60 xl:mx-4">
                Weather forecasts for every city, every day.
              </p>
              <Link
                target="_blank"
                className="group-hover:bg-emerald-600 group-hover:text-zinc-50 cursor-pointer items-center transition gap-1 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-emerald-400 hover:text-emerald-950 disabled:bg-white/5 disabled:text-zinc-50 mt-4 hidden md:inline-flex bg-zinc-50 text-zinc-950"
                href="/weather"
              >
                <span>Check Weather</span>
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
                  className="inline-flex shrink-0 text-xl ml-auto opacity-60 group-hover:stroke-slate-100"
                  role="icon"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </div>

            <div
              onMouseEnter={() => setHover(2)}
              onMouseLeave={() => setHover(0)}
              className="group relative flex flex-col items-center p-6 md:p-8 cursor-default bg-white/5 backdrop-blur transition rounded-lg xl:first:!rounded-l-[3rem] text-zinc-50 xl:last:!rounded-r-[3rem] hover:scale-[1.02] hover:bg-white/10"
            >
              <Link className="absolute inset-0 z-10" href="/aqi"></Link>
              <h3 className="flex items-center gap-3 text-zinc-50 font-display text-xl font-medium leading-none md:text-2xl">
                <span>AQI</span>
                <span className="text-[13px] opacity-80">
                  {"( Air Qualty Index )"}
                </span>
              </h3>
              <p className="mt-2 grow opacity-60 xl:mx-4">
                Know your air quality, stay informed.
              </p>
              <Link
                target="_blank"
                className="group-hover:bg-indigo-600 group-hover:text-zinc-50 cursor-pointer items-center transition gap-1 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover: hover:text-emerald-950 disabled:bg-white/5 disabled:text-zinc-50 mt-4 hidden md:inline-flex bg-zinc-50 text-zinc-950"
                href="/aqi"
              >
                <span>Check AQI</span>
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
                  className="inline-flex shrink-0 text-xl ml-auto opacity-60"
                  role="icon"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </div>
            <div
              onMouseEnter={() => setHover(3)}
              onMouseLeave={() => setHover(0)}
              className="group relative flex flex-col items-center p-6 md:p-8 cursor-default bg-white/5 backdrop-blur transition rounded-lg xl:first:!rounded-l-[3rem] text-zinc-50 xl:last:!rounded-r-[3rem] hover:scale-[1.02] hover:bg-white/10"
            >
              <Link className="absolute inset-0 z-10" href="/cities"></Link>
              <h3 className="flex items-center gap-1 text-zinc-50 font-display text-xl font-medium leading-none md:text-2xl">
                <span>Global</span>
                <span className="ml-0.5 rounded bg-orange-500 px-1.5 py-1 text-xs font-semibold leading-none tracking-wide">
                  NEW
                </span>
              </h3>
              <p className="mt-2 grow opacity-60 xl:mx-4">
                Beyond borders, beyond limits. Experience the world .
              </p>
              <Link
                target="_blank"
                className="group-hover:bg-orange-500 group-hover:text-zinc-50 cursor-pointer items-center transition gap-1 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-emerald-400 hover:text-emerald-950 disabled:bg-white/5 disabled:text-zinc-50 mt-4 hidden md:inline-flex bg-zinc-50 text-zinc-950"
                href="/cities"
              >
                <span>Check Any City</span>
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
                  className="inline-flex shrink-0 text-xl ml-auto opacity-60"
                  role="icon"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </div>
            <div
              onMouseEnter={() => setHover(4)}
              onMouseLeave={() => setHover(0)}
              className="group relative flex flex-col items-center p-6 md:p-8 cursor-default bg-white/5 backdrop-blur transition rounded-lg xl:first:!rounded-l-[3rem] text-zinc-50 xl:last:!rounded-r-[3rem] hover:scale-[1.02] hover:bg-white/10"
            >
              <Link className="absolute inset-0 z-10" href="/subscribe"></Link>
              <h3 className="flex items-center gap-1 text-zinc-50 font-display text-xl font-medium leading-none md:text-2xl">
                <span>Email</span>
              </h3>
              <p className="mt-2 grow opacity-60 xl:mx-4">
                Email service, ensuring you&lsquo;re always informed .
              </p>
              <Link
                target="_blank"
                className="group-hover:bg-violet-600 group-hover:text-zinc-50 cursor-pointer items-center transition gap-1 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-emerald-400 hover:text-emerald-950 disabled:bg-white/5 disabled:text-zinc-50 mt-4 hidden md:inline-flex bg-zinc-50 text-zinc-950"
                href="/subscribe"
              >
                <span>Subscribe</span>
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
                  className="inline-flex shrink-0 text-xl ml-auto opacity-60"
                  role="icon"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;

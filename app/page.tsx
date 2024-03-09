import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-black/80 relative">
        <div className="absolute h-full -z-40 w-full bg-gradient-to-r from-20%  from-emerald-400 to-yellow-300"></div>
        <main className="backdrop-blur-3xl">
          <div className="mx-auto max-w-screen px-6 md:px-10">
            <h1 className="flex flex-col gap-1 transition font-display text-6xl font-bold leading-none md:text-[7rem] bg-gradient-to-r from-20% bg-clip-text text-transparent from-emerald-400 to-yellow-300 text-center">
              <span>We Monitor</span>
              <span>Weather & AQI</span>
              <span className="text-3xl">so you don&lsquo;t have to . . .</span>
            </h1>
            <div className="mt-8 grid gap-2 md:mt-16 md:grid-cols-2 xl:grid-cols-4">
              <div className="group/hero-product relative flex flex-col items-center p-6 md:p-8 cursor-default bg-white/5 backdrop-blur transition rounded-lg xl:first:!rounded-l-[3rem] xl:last:!rounded-r-[3rem] hover:scale-[1.02] hover:bg-white/10">
                <a
                  className="absolute inset-0 z-10"
                  href="https://console.upstash.com"
                ></a>
                <h3 className="flex items-center gap-1 text-zinc-50 font-display text-xl font-medium leading-none md:text-2xl">
                  <span>Redis</span>
                  <span className="text-[.9em] opacity-20">®*</span>
                </h3>
                <p className="mt-2 grow opacity-60 xl:mx-4">
                  Serverless database with Redis API
                </p>
                <a
                  target="_blank"
                  className="group/link-new cursor-pointer items-center transition gap-1 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-emerald-400 hover:text-emerald-950 disabled:bg-white/5 disabled:text-zinc-50 mt-4 hidden md:inline-flex bg-zinc-50 text-zinc-950"
                  href="https://console.upstash.com"
                >
                  <span>Create Database</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
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
                </a>
              </div>
              <div className="group/hero-product relative flex flex-col items-center p-6 md:p-8 cursor-default bg-white/5 backdrop-blur transition rounded-lg xl:first:!rounded-l-[3rem] xl:last:!rounded-r-[3rem] hover:scale-[1.02] hover:bg-white/10">
                <a
                  className="absolute inset-0 z-10"
                  href="https://console.upstash.com"
                ></a>
                <h3 className="flex items-center gap-1 text-zinc-50 font-display text-xl font-medium leading-none md:text-2xl">
                  <span>Kafka</span>
                  <span className="text-[.9em] opacity-20">®</span>
                </h3>
                <p className="mt-2 grow opacity-60 xl:mx-4">
                  Serverless Kafka and Connectors
                </p>
                <a
                  target="_blank"
                  className="group/link-new cursor-pointer items-center transition gap-1 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-emerald-400 hover:text-emerald-950 disabled:bg-white/5 disabled:text-zinc-50 mt-4 hidden md:inline-flex bg-zinc-50 text-zinc-950"
                  href="https://console.upstash.com"
                >
                  <span>Create Cluster</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
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
                </a>
              </div>
              <div className="group/hero-product relative flex flex-col items-center p-6 md:p-8 cursor-default bg-white/5 backdrop-blur transition rounded-lg xl:first:!rounded-l-[3rem] xl:last:!rounded-r-[3rem] hover:scale-[1.02] hover:bg-white/10">
                <a
                  className="absolute inset-0 z-10"
                  href="https://console.upstash.com"
                ></a>
                <h3 className="flex items-center gap-1 text-zinc-50 font-display text-xl font-medium leading-none md:text-2xl">
                  <span>Vector</span>
                  <span className="ml-0.5 rounded bg-orange-500 px-1.5 py-1 text-xs font-semibold leading-none tracking-wide">
                    NEW
                  </span>
                </h3>
                <p className="mt-2 grow opacity-60 xl:mx-4">
                  Serverless Vector Database
                </p>
                <a
                  target="_blank"
                  className="group/link-new cursor-pointer items-center transition gap-1 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-emerald-400 hover:text-emerald-950 disabled:bg-white/5 disabled:text-zinc-50 mt-4 hidden md:inline-flex bg-zinc-50 text-zinc-950"
                  href="https://console.upstash.com"
                >
                  <span>Create Index</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
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
                </a>
              </div>
              <div className="group/hero-product relative flex flex-col items-center p-6 md:p-8 cursor-default bg-white/5 backdrop-blur transition rounded-lg xl:first:!rounded-l-[3rem] xl:last:!rounded-r-[3rem] hover:scale-[1.02] hover:bg-white/10">
                <a
                  className="absolute inset-0 z-10"
                  href="https://console.upstash.com"
                ></a>
                <h3 className="flex items-center gap-1 text-zinc-50 font-display text-xl font-medium leading-none md:text-2xl">
                  <span>QStash</span>
                </h3>
                <p className="mt-2 grow opacity-60 xl:mx-4">
                  Messaging for the Serverless
                </p>
                <a
                  target="_blank"
                  className="group/link-new cursor-pointer items-center transition gap-1 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-emerald-400 hover:text-emerald-950 disabled:bg-white/5 disabled:text-zinc-50 mt-4 hidden md:inline-flex bg-zinc-50 text-zinc-950"
                  href="https://console.upstash.com"
                >
                  <span>Publish Messages</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
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
                </a>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
// bg-gradient-to-bl from-green-600 via-green-400 via-30% to-emerald-400 to-90%

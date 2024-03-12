import { HeartPulse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center gap-3 py-6">
      <Link href={"/"} className="max-w-[8rem]">
        <Image src={"/airsage.svg"} width={130} height={40} alt="logo"></Image>
      </Link>
      <p className="flex items-center justify-center px-4 py-2 bg-emerald-500/20 rounded-xl text-lg sm:text-xl">
        Built with
        <span>
          <HeartPulse className="stroke-rose-700 mx-1.5" />
        </span>
        by
        <Link
          href={"https://hammad-wasi.vercel.app/"}
          className="ml-1.5 hover:scale-105 hover:-translate-y-1/20 hover:shadow-lg shadow-white"
        >
          Hammad <span className="text-rose-500">Wasi</span>
        </Link>
      </p>
    </footer>
  );
}

export default Footer;

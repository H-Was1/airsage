"use server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

async function Navbar() {
  return (
    <main className="md:px-[10rem] px-[6rem] max-sm:px-[2rem] sticky top-0 backdrop-blur-md ,md:h-[90px] z-40">
      <ul className="flex items-center justify-between gap-12 list-none py-2 sm:py-4 border-b border-slate-50/10">
        <Link href={"/"} className="max-w-[8rem]" title="Go To HomePage">
          <Image
            src={"/airsage.svg"}
            width={120}
            height={40}
            alt="logo"
          ></Image>
        </Link>
        <li className="text-zinc-50 max-md:hidden flex items-center justify-between gap-8 w-auto">
          <Link
            href={"/locations"}
            className="px-3 py-2 hover:bg-zinc-50/10 hover:-translate-y-1 hover:scale-105 transition-all duration-300 rounded-lg"
          >
            Locations
          </Link>
          <Link
            href={"/weather"}
            className="px-3 py-2 hover:bg-zinc-50/10 hover:-translate-y-1 hover:scale-105 transition-all duration-300 rounded-lg"
          >
            Weather
          </Link>
          <Link
            href={"/aqi"}
            className="px-3 py-2 hover:bg-zinc-50/10 hover:-translate-y-1 hover:scale-105 transition-all duration-300 rounded-lg"
          >
            AQI
          </Link>
          <Link
            href={"/subscribe"}
            className="px-3 py-2 hover:bg-zinc-50/10 hover:-translate-y-1 hover:scale-105 transition-all duration-300 rounded-lg"
          >
            Subscribe
          </Link>
        </li>
        <li className="md:hidden text-zinc-50">
          <Sheet>
            <SheetTrigger asChild>
              <Menu />
            </SheetTrigger>
            <SheetContent className="bg-slate-800/20 backdrop-blur-md text-zinc-50 !border-none w-[16rem]">
              <SheetHeader>
                <div className="flex flex-col gap-12 mt-16">
                  <SheetClose>
                    <Link href={"/locations"}>Locations</Link>
                  </SheetClose>
                  <SheetClose>
                    <Link href={"/weather"}>Weather</Link>
                  </SheetClose>
                  <SheetClose>
                    <Link href={"/aqi"}>AQI</Link>
                  </SheetClose>
                  <SheetClose>
                    <Link href={"/subscribe"}>Subscribe</Link>
                  </SheetClose>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </li>
      </ul>
    </main>
  );
}

export default Navbar;

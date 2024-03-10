import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HammerIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

function Navbar() {
  return (
    <main className="sm:px-[10rem] px-[1rem] sticky top-0 backdrop-blur-md h-[90px] z-40">
      <ul className="flex items-center justify-between gap-12 list-none py-2 sm:py-4 border-b border-slate-50/10">
        <Link href={"/"} className="max-w-[8rem]">
          <Image
            src={"/airsage.svg"}
            width={120}
            height={40}
            alt="logo"
          ></Image>
        </Link>
        <li className="text-zinc-50 max-md:hidden flex items-center justify-between gap-8 w-auto">
          <Link href={"/cities"}>Cities</Link>
          <Link href={"/weather"}>Weather</Link>
          <Link href={"/aqi"}>AQI</Link>
          <Link href={"/subscribe"}>Subscribe</Link>
        </li>
        <li className="md:hidden text-zinc-50">
          <Sheet>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent className="bg-slate-800/20 backdrop-blur-md text-zinc-50 !border-none w-[16rem]">
              <SheetHeader>
                <div className="flex flex-col gap-12 mt-16">
                  <SheetClose>
                    <Link href={"/cities"}>Cities</Link>
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

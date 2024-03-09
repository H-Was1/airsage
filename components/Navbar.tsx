import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex h-[3rem] items-center justify-between">
      <Link href={"/"}>
        <Image src={"/airsage.svg"} width={120} height={50} alt="logo"></Image>
      </Link>
      <div className="flex gap-6 items-center justify-between font-bold text-slate-500">
        <Link
          className="hover:text-black hover:scale-125 transition-all duration-500"
          href={"/cities"}
        >
          Cities
        </Link>
        <Link
          className="hover:text-black hover:scale-125 transition-all duration-500"
          href={"/about"}
        >
          Track
        </Link>
        <Link
          className="hover:text-black hover:scale-125 transition-all duration-500"
          href={"/about"}
        >
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

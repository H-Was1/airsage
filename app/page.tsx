import Hero from "@/app/components/hero";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
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

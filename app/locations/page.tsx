import React from "react";
import Navbar from "../_frags/Navbar";
import { getAllCities } from "@/lib/actions";
import Footer from "../_frags/footer";
import LocationsComp from "../_frags/locationsComp";
import { CityProps } from "@/lib/utils";
import console from "console";

async function Cities() {
  const locations: CityProps[] = await getAllCities();
  const data: Omit<CityProps, "_id">[] = locations;
  console.log(locations);

  return (
    <div className="flex flex-col relative">
      <Navbar />
      <main>
        <section className="lg:px-[10rem] px-8  min-h-screen">
          <div className="flex w-[80%] h-full items-center justify-center blur-3xl opacity-10 absolute -z-10">
            <div className="bg-rose-500/70 h-[40%] w-[60%]"></div>
          </div>
          <div className="min-h-[35vh] flex flex-col items-center justify-center gap-6 text-lg">
            <h1 className="text-7xl max-md:text-4xl max-sm:text-3xl font-semibold text-rose-500">
              Uncover Locations
            </h1>
            <p>
              Discover the air quality and weather conditions of your favorite
              locations
            </p>
          </div>
          <LocationsComp data={data} />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default Cities;

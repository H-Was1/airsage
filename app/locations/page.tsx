import React from "react";
import Navbar from "../_frags/Navbar";
import { Input } from "@/components/ui/input";
import { getAllCities } from "@/lib/actions";
import Footer from "../_frags/footer";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

async function Cities() {
  // const locations = await getAllCities();
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
          <div className="flex max-sm:flex-wrap gap-6">
            <div className="min-w-[20%] h-full sm:sticky top-36">
              <p className="text-slate-300/70 tracking-wider border-b border-slate-400/20 py-2">
                FILTER
              </p>
              <div></div>
              <div className=""></div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <div className="w-full flex justify-center border-b border-slate-400/20 pb-2 items-center gap-8">
                <Input
                  className="h-8 rounded-lg bg-slate-700/20 max-w-[27rem] focus-visible:border-emerald-400 px-6 focus-visible:border focus-visible:outline-none"
                  placeholder="Search for a Location"
                ></Input>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="hover:bg-slate-50/10 hover:text-zinc-50 text-black bg-emerald-500 font-semibold h-8 tracking-wide">
                      Add new Location
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-slate-50/5 backdrop-blur-md border border-slate-500/20">
                    <DialogHeader>
                      <DialogTitle className="text-rose-500">
                        Enter Location&apos;s Name
                      </DialogTitle>
                      <DialogDescription>
                        <p className="text-yellow-500">
                          The Name should be accurate.
                        </p>
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                      <div className="grid flex-1 gap-2">
                        <Input
                          className="focus-visible:outline-none bg-black/20 focus-visible:border border-emerald-400/40"
                          placeholder="Enter City, Province, State or a famous location"
                        />
                      </div>
                    </div>
                    <DialogFooter className="sm:justify-start">
                      <Button
                        type="button"
                        className="hover:bg-slate-50/10 hover:text-zinc-50 text-black bg-emerald-500 font-semibold tracking-wide"
                      >
                        <Loader className="animate-spin px-1" />
                        Proceed
                      </Button>
                    </DialogFooter>
                    <div>
                      <h1 className="my-6">
                        Did&apos;nt find your location ? Be more specific !
                      </h1>
                      <div className="transition-all duration-500 overflow-y-scroll custom-scrollbar max-h-[30rem] flex flex-col items-center justify-center gap-3">
                        <div
                          className="bg-black/20 min-h-16 rounded-xl px-3 h-fit flex flex-col items-center justify-center cursor-pointer hover:bg-emerald-600/10 w-[90%]"
                          // onClick={()=>}
                        >
                          <h1 className="text-rose-500 text-2xl">Islamabad</h1>
                          <p className="text-sm text-yellow-500">
                            Islamabad, PB, Pak
                          </p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="location-grid w-full grid gap-4 py-6">
                <Link
                  href={`/`}
                  className="bg-zinc-50/10 group hover:bg-emerald-600/10 backdrop-blur-md rounded-2xl col-span-1 row-span-1 flex flex-col items-center justify-center gap-5"
                >
                  <h1 className="text-3xl text-rose-500 font-semibold">Name</h1>
                  <p className="text-yellow-500">c.longName</p>
                  <div className="flex gap-2 items-center justify-center flex-wrap">
                    <span className="bg-black/30 py-1 rounded-lg px-1.5 group-hover:bg-emerald-400/60 group-hover:text-black">
                      Weather
                    </span>
                    <span className="bg-black/30 py-1 rounded-lg px-1.5 group-hover:bg-emerald-400/60 group-hover:text-black">
                      AQI
                    </span>
                    <span className="bg-black/30 py-1 rounded-lg px-1.5 group-hover:bg-emerald-400/60 group-hover:text-black">
                      Subscription
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default Cities;

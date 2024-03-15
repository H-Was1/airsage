"use client";
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
import { Checkbox } from "@/components/ui/checkbox";

import { Input } from "@/components/ui/input";
import { manageNewLocation } from "@/lib/actions";
import { findCity } from "@/lib/scraper";
import { Button } from "@/components/ui/button";
import { FileDiff, Loader, Loader2 } from "lucide-react";
import { CityProps } from "@/lib/utils";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { locations } from "./servercomp";

// import { locationsData } from "@/lib/utils";

interface dataProps {
  index: number;
  name: string;
  longName: string;
  url: string;
}

function LocationsComp({ data }: { data: Array<Omit<CityProps, "_id">> }) {
  const [locations, setlocations] = useState(data);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [fquery, setFQuery] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [checked, setChecked] = useState({
    name: false,
    aqi: false,
    followers: false,
  });
  const [results, setResults] = useState<Array<{
    index: number;
    name: string;
    longName: string;
    url: string;
  }> | null>([]);

  async function manageSearch(query: string) {
    try {
      setIsLoading(true);
      setResults([]);
      if (query.length < 3) throw new Error("Plz enter a location name");
      const result = await findCity(query);
      if (result && result.length < 1) throw new Error("Could not find city");
      // Check if result is not undefined or null before calling setResults
      if (result) {
        //@ts-ignore
        setResults(result);
      }
    } catch (error) {
      console.error("Searching City: " + error);
      return null;
    } finally {
      setIsLoading(false);
    }
  }
  async function addNew(result: {
    index: number;
    name: string;
    longName: string;
    url: string;
  }) {
    try {
      setIsAdding(true);
      const handler = await manageNewLocation(result);
      toast.success(`${result.name} has been added successfully`);
    } catch (error: any) {
      toast.error(`Something went wrong: ${error.message}`);
    } finally {
      setResults([]);
      setIsAdding(false);
    }
  }
  const dataRef = useRef(data);
  useEffect(() => {
    if (fquery && fquery.length >= 2) {
      const filteredLocations = data.filter((loc) => loc.name.includes(fquery));
      setlocations(filteredLocations);
    } else {
      setlocations(data);
    }
  }, [data, fquery]);
  function handleSort() {}

  return (
    <div className="flex max-sm:flex-wrap gap-6">
      <div className="min-w-[20%] h-full sm:sticky top-36">
        <p className="text-slate-300/70 tracking-wider border-b border-slate-400/20 py-4">
          Sort Locations
        </p>
        <div className="flex flex-col gap-4 items-start justify-center py-4 px-6">
          <div className="flex gap-4 items-center text-slate-300/70 tracking-wider">
            <Checkbox />
            <span>Name</span>
          </div>
          <div className="flex gap-4 items-center text-slate-300/70 tracking-wider">
            <Checkbox />
            <span>AQI</span>
          </div>
          <div className="flex gap-4 items-center text-slate-300/70 tracking-wider">
            <Checkbox />
            <span>Followers</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-center border-b border-slate-400/20 pb-2 items-center gap-8">
          <Input
            className="h-12 rounded-lg bg-slate-50/10 max-w-[27rem] focus-visible:border-emerald-400 px-6 focus-visible:border focus-visible:outline-none"
            placeholder="Search in the existing list."
            value={fquery}
            onChange={(e) =>
              setFQuery(
                e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
              )
            }
          ></Input>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="hover:bg-slate-50/10 hover:text-zinc-50 text-black bg-emerald-500 font-semibold h-10 tracking-wide"
                onClick={() => {
                  setQuery("");
                  setResults([]);
                }}
              >
                Add new Location
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-slate-50/10 backdrop-blur-md">
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
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    disabled={isLoading}
                    className="focus-visible:outline-none bg-black/30 focus-visible:border border-emerald-400/40"
                    placeholder="Enter City, Province, State or a famous location"
                  />
                </div>
              </div>
              <DialogFooter className="sm:justify-start">
                <Button
                  type="button"
                  disabled={isLoading}
                  onClick={() => manageSearch(query)}
                  className="hover:bg-slate-50/10 hover:text-zinc-50 text-black bg-emerald-500 font-semibold tracking-wide"
                >
                  <Loader
                    className={`animate-spin px-1 ${isLoading ? "" : "hidden"}`}
                  />
                  {isLoading
                    ? "Searching ... This may Take few seconds"
                    : "Proceed"}
                </Button>
              </DialogFooter>
              <div>
                <h1 className="my-6">
                  Did&apos;nt find your location ? Be more specific !
                </h1>
                <div
                  className={`transition-all duration-500 overflow-y-scroll no-scrollbar max-h-[30rem] h-auto flex flex-col items-center gap-3 ${
                    results && results.length < 1 ? "hidden" : ""
                  }`}
                >
                  {results &&
                    results.length > 0 &&
                    results.map((result) => (
                      <div
                        className={`relative rounded-xl px-3 py-1.5 min-h-fit flex flex-col items-center justify-center hover:bg-emerald-600/10 w-[90%] border border-yellow-500/40 hover:border-emerald-300/30 ${
                          isAdding ? "cursor-not-allowed" : "bg-black/20 cursor-pointer"
                        }`}
                        onClick={() => addNew(result)}
                        key={result.longName}
                        title={result.longName}
                      >
                        {isAdding ? (
                          <div className="flex items-center justify-center gap-4">
                            <Loader2 className="animate-spin" />
                            <span>Adding your Desired Location</span>
                          </div>
                        ) : (
                          <>
                            <h1 className="text-rose-500 text-2xl">
                              {result.name}
                            </h1>
                            <p className="text-sm text-yellow-500 h-auto">
                              {result.longName}
                            </p>
                          </>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        {locations.length > 0 ? (
          <div className="location-grid w-full grid gap-3 py-6">
            {locations.map((location) => (
              <Link
                key={location.longName}
                href={`/${location.name.replace(/ /g, "-")}`}
                className="bg-zinc-50/10 group hover:bg-emerald-600/10 backdrop-blur-md rounded-2xl col-span-1 row-span-1 flex flex-col items-center justify-center gap-5"
              >
                <h1 className="text-3xl text-rose-500 font-semibold">
                  {location.name}
                </h1>
                <p className="text-yellow-500">{location.longName}</p>
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
            ))}
          </div>
        ) : (
          <div className="w-full min-h-[60vh] flex flex-col gap-8 items-center justify-center">
            <h1 className="md:text-5xl text-rose-500 max-md:text-3xl">
              No Location is available right now
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default LocationsComp;

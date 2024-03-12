import React from "react";

import { getCity } from "@/lib/actions";
import { CityProps } from "@/lib/utils";

export default async function Page({ params }: { params: { name: string } }) {
  const location:CityProps = await getCity(params.name.replace("-", " "));
  return <div>My Post: {location.weatherData?.tonight}</div>;
}

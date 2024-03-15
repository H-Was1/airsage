import { getAllCities } from "@/lib/actions";

export const locations = async () => {
  const data = await getAllCities();
  return { ...data, _id: null };
};

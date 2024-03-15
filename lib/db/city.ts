import mongoose from "mongoose";

export const citySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    longName: { type: String, required: true, unique: true },
    weatherUrl: { type: String, required: true, unique: true },
    emails: [{ type: String, required: true, unique: true }],
    aqiData: {
      quality: {
        scale: { type: String },
        index: { type: String },
        description: { type: String },
      },
      pollutants: {
        no2: {
          value: String,
          conclusion: String,
        },
        pm25: {
          value: String,
          conclusion: String,
        },
        pm10: {
          value: String,
          conclusion: String,
        },
        o3: {
          value: String,
          conclusion: String,
        },
      },
    },
    weatherData: {
      tonight: { type: String },
      today: { type: String },
      tomorrow: { type: String },
      current: {
        temperature: { type: String },
        weather: { type: String },
      },
      wind: { type: String },
      collectionTime: { type: String },
    },
  },
  { collection: "cities" }
);

const City = mongoose.models.City || mongoose.model("City", citySchema);
export default City;

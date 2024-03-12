import mongoose from "mongoose";

export const citySchema = new mongoose.Schema(
 {
    name: { type: String, required: true, unique: true },
    longName: { type: String, required: true, unique: true },
    weatherUrl: { type: String, required: true, unique: true },
    emails: [{ type: String, required: true, unique: true }],
    AQIData: {
      quality: {
        scale: { type: String },
        index: { type: String },
        description: { type: String },
      },
      pollutants: {
        no2: {
          value: { type: String },
          conclusion: { type: String },
        },
        pm25: {
          value: { type: String },
          conclusion: { type: String },
        },
        pm10: {
          value: { type: String },
          conclusion: { type: String },
        },
        o3: {
          value: { type: String },
          conclusion: { type: String },
        },
      },
    },
    WeatherData: {
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
    // Placeholder for additional fields
    // additionalField1: { type: String },
    // additionalField2: { type: String },
    // additionalField3: { type: String },
    // additionalField4: { type: String },
 },
 { collection: "cities" }
);

const City = mongoose.models.City || mongoose.model("City", citySchema);
export default City;

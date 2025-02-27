import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "");
    console.log("Mongodb tei amjilttai holbogdloo");
  } catch (error) {
    console.log("Mongodb tei holbogdohod aldaa garlaa", error);
  }
};

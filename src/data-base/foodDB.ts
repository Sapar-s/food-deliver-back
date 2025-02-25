import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";

export async function createFood(name: any, price: any, ingredients: any) {
  configDotenv();
  const uri = process.env.MONGODB_URL || "";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = await client.db("food_delivery");
    const collection = database.collection("foods");
    await collection.insertOne({ name, price, ingredients });
  } catch (error) {
    console.log("Error", error);
  }
}

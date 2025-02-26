import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";

export async function createStudent(
  studendtsData: any
  //   name: string,
  //   age: string,
  //   gender: string,
  //   gpa: string,
  //   courses: string
) {
  configDotenv();
  const uri = process.env.MONGODB_URL || "";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = await client.db("school");
    const collection = database.collection("students");
    await collection.insertMany(studendtsData);
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getStudent() {
  configDotenv();
  const uri = process.env.MONGODB_URL || "";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = await client.db("school");
    const collection = database.collection("students");
    const users = await collection
      .find({
        $or: [{ gpa: { $gt: 3 } }, { gap: { $lt: 4 } }],
      })
      .toArray();
    return users;
  } catch (error) {
    console.log("Error", error);
  }
}

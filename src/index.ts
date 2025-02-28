import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectMongoDB } from "./data-base/foodCategoryDB";
import categoryRoute from "./routes/food-category.route";

configDotenv();
connectMongoDB();

const app = express();
app.use(bodyParser.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send("helloo woorld");
});

app.use("/food-category", categoryRoute);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

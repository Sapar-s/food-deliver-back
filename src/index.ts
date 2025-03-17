import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectMongoDB } from "./data-base/DB";
import categoryRoute from "./routes/food-category.route";
import foodRoute from "./routes/food.route";
import authRoute from "./routes/authentication.route";
import cors from "cors";

configDotenv();
connectMongoDB();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 5000;

app.get("/", (req, res) => {
  res.send("helloo woorld");
});

app.use("/food-category", categoryRoute);
app.use("/food", foodRoute);
app.use("/auth", authRoute);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

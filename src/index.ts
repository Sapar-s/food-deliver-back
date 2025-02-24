import express from "express";
import bodyParser from "body-parser";
import { getMovies } from "./data-base/mongodb";

const app = express();
app.use(bodyParser.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send("helloo woorld");
});

app.get("/movies", async (req, res) => {
  try {
    const { year, imdb } = await req.query;
    const movies = await getMovies(Number(year), Number(imdb));
    res.status(201).json({ message: "success", movies: movies });
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

import express from "express";
import bodyParser from "body-parser";
import { getMovies } from "./data-base/mongodb";
import { createFood } from "./data-base/foodDB";
import { createStudent, getStudent } from "./data-base/studentsDB";

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

app.post("/foods", async (req, res) => {
  const { name, price, ingredients } = req.body;
  try {
    await createFood(name, price, ingredients);
    res.status(201).json({ message: "Amjilttai food nemlee" });
  } catch (error) {
    console.log("Error", error);
  }
});

app.post("/students", async (req, res) => {
  const { studendtsData } = req.body;
  // const { name, age, gender, gpa, courses } = req.body;
  try {
    await createStudent(studendtsData);
    res.status(201).json({ message: "Amjilttai student nemlee" });
  } catch (error) {
    console.log("Error", error);
  }
});

app.get("/students", async (req, res) => {
  try {
    const users = await getStudent();
    res.status(201).json({ message: "success", users: users });
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

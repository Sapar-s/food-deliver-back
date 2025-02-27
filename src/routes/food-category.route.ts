import express from "express";
import { createFoodCategory } from "../controllers/food-category.controller";

const route = express.Router();

route.post("/", createFoodCategory);

export default route;

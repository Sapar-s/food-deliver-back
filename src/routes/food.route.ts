import express from "express";
import {
  createFood,
  deleteFood,
  getFood,
  updateFood,
} from "../controllers/food.controller";

const route = express.Router();

route
  .post("/", createFood)
  .get("/:foodId", getFood)
  .put("/:foodId", updateFood)
  .delete("/:foodId", deleteFood);

export default route;

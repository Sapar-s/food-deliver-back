import express from "express";
import {
  createFoodOrder,
  getFoodOrder,
  updateFoodOrder,
} from "../controllers/food-order.controller";

const route = express.Router();

route
  .post("/", createFoodOrder)
  .get("/", getFoodOrder)
  .put("/", updateFoodOrder);

export default route;

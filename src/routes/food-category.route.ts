import express from "express";
import {
  createFoodCategory,
  deleteFoodCategory,
  getAllFoodCategory,
  updateFoodCategory,
} from "../controllers/food-category.controller";

const route = express.Router();

route
  .post("/", createFoodCategory)
  .get("/", getAllFoodCategory)
  .put("/:foodCategoryId", updateFoodCategory)
  .delete("/:foodCategoryId", deleteFoodCategory);

export default route;

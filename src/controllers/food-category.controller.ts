import { Request, Response } from "express";
import foodCategoryModel from "../models/food-category.model";

export const createFoodCategory = async (req: Request, res: Response) => {
  try {
    const categoryData = req.body;
    const newCategory = await foodCategoryModel.create(categoryData);
    res
      .status(200)
      .json({ message: "Successfully created category", newCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in createFoodCategory", error });
  }
};

export const getAllFoodCategory = async (req: Request, res: Response) => {
  try {
    const getCategory = await foodCategoryModel.find();
    res.status(200).json({
      message: "All categories",
      length: foodCategoryModel.length,
      getCategory,
    });
  } catch (error) {
    res.status(500).json({ message: "Error  createFoodCategory", error });
  }
};

export const updateFoodCategory = async (req: Request, res: Response) => {
  const { foodCategoryId } = req.params;
  const updateData = req.body;

  try {
    const updateCategory = await foodCategoryModel.updateOne(
      {
        _id: foodCategoryId,
      },
      updateData
    );
    res
      .status(200)
      .json({ message: "Successfully updated category", data: updateCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in  updateFoodCategory", error });
  }
};

export const deleteFoodCategory = async (req: Request, res: Response) => {
  const { foodCategoryId } = req.params;
  const deleteReq = req.body;
  try {
    const deleteCategory = await foodCategoryModel.deleteOne(
      { _id: foodCategoryId },
      deleteReq
    );
    res
      .status(200)
      .json({ message: "Successfully deleted category", data: deleteCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in  deleteFoodCategory", error });
  }
};

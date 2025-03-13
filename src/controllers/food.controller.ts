import { Request, Response } from "express";
import foodModel from "../models/food.model";

export const createFood = async (req: Request, res: Response) => {
  try {
    const foodData = req.body;
    const newFood = await foodModel.create(foodData);
    res.status(201).json({ message: "Successfully created new food", newFood });
  } catch (error) {
    res.status(500).json({ message: "Error in create food", error });
  }
};

export const getFood = async (req: Request, res: Response) => {
  try {
    const { foodId } = req.params;
    const getFood = await foodModel.findById(foodId);
    res.status(200).json({ message: "Successfully get food", getFood });
  } catch (error) {
    res.status(500).json({ message: "Error in getFood", error });
  }
};

export const getFoods = async (req: Request, res: Response) => {
  try {
    const getFood = await foodModel.find();
    res.status(200).json({ message: "Successfully get foods", getFood });
  } catch (error) {
    res.status(500).json({ message: "Error in getFoods", error });
  }
};

export const updateFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  const updateData = req.body;
  try {
    const updateFood = await foodModel.updateOne({ _id: foodId }, updateData);
    res.status(200).json({ message: "Successfully updated food", updateFood });
  } catch (error) {
    res.status(500).json({ message: "Error in updateFood", error });
  }
};

export const deleteFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  try {
    const deleteFood = await foodModel.deleteOne({ _id: foodId });
    res.status(200).json({ message: "Successfully deleted food", deleteFood });
  } catch (error) {
    res.status(500).json({ message: "Error in deletefood ", error });
  }
};

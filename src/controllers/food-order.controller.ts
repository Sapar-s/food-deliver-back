import { Request, Response } from "express";
import foodOrderModel from "../models/food-order.model";

export const createFoodOrder = async (req: Request, res: Response) => {
  try {
    const postFoodOrder = req.body;
    const newFoodOrder = await foodOrderModel.create(postFoodOrder);
    res
      .status(201)
      .json({ message: "Successfully created new food order", newFoodOrder });
  } catch (error) {
    res.status(500).json({ message: "Error in create food order", error });
  }
};

export const getFoodOrder = async (req: Request, res: Response) => {
  try {
    const getFoodOrder = await foodOrderModel
      .find()
      .populate("food")
      .populate("user");
    res
      .status(200)
      .json({ message: "Successfully get food order", getFoodOrder });
  } catch (error) {
    res.status(500).json({ message: "Error in getFoodOrder", error });
  }
};

export const updateFoodOrder = async (req: Request, res: Response) => {
  try {
    const { _id, totalPrice, status } = req.body;
    const updateFoodOrder = await foodOrderModel.updateOne(
      { _id },
      { totalPrice, status }
    );
    res
      .status(200)
      .json({ message: "Successfully updated food order", updateFoodOrder });
  } catch (error) {
    res.status(500).json({ message: "Error in updateFoodOrder", error });
  }
};

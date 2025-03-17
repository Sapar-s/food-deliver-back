import { Request, Response } from "express";
import userModel from "../../models/user.model";
import { hashSync } from "bcryptjs";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      res.status(401).json({ message: "Please write email" });
      return;
    }

    const hashedPassword = hashSync(password, 10);

    const createdUser = await userModel.create({
      email,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "Successfully created user", data: createdUser });
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
};

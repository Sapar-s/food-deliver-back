import { Request, Response } from "express";
import userModel from "../../models/user.model";
import { compareSync } from "bcryptjs";

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      res.status(401).json({ message: "Please write email", error: true });
      return;
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      res
        .status(404)
        .json({ message: "Burtgelgui hereglegch baina", error: true });
      return;
    }

    const isCorrect = compareSync(password, user?.password);

    if (!isCorrect) {
      res.status(401).json({ message: "Wrong password", error: true });
      return;
    }

    res
      .status(401)
      .json({ message: "Successfully signed in", data: user, error: false });
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
};

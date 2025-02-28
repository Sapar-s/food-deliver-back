import { Schema } from "mongoose";

const foodSchema: Schema = new Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

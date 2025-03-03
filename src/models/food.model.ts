import mongoose, { Schema } from "mongoose";

type foodSchemaType = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
};

const foodSchema: Schema = new Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    ingredients: { type: String, required: true },
    // category:{}
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<foodSchemaType>("Food", foodSchema);

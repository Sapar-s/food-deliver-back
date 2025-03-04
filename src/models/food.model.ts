import mongoose, { Schema } from "mongoose";

type foodSchemaType = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  category: mongoose.Schema.Types.ObjectId;
};

const foodSchema: Schema = new Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    ingredients: { type: String, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FoodCategory",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<foodSchemaType>("Food", foodSchema);

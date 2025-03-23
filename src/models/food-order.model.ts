import mongoose, { Schema } from "mongoose";

enum Status {
  PENDING = "PENDING",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

type foodOrderSchemaType = {
  food: Schema.Types.ObjectId;
  quantity: number;
  user: Schema.Types.ObjectId;
};

const foodOrderSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user", required: true },
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: Object.values(Status),
      default: Status.PENDING,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<foodOrderSchemaType>(
  "FoodOrder",
  foodOrderSchema
);

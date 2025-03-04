import mongoose, { Schema } from "mongoose";

type authShemaType = {
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
};
const authShema: Schema = new Schema({});
export default mongoose.model("Authentication", authShema);

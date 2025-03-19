import express from "express";
import { signUp } from "../controllers/auth/signUp.controller";
import { signIn } from "../controllers/auth/signIn.controller";
import { forgetPassword } from "../controllers/auth/forget-password.controller";

const route = express.Router();

route.post("/signup", signUp);
route.post("/signin", signIn);
route.post("/reset-password-request", forgetPassword);

export default route;

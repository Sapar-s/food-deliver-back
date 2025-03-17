import express from "express";
import { signUp } from "../controllers/auth/signUp.controller";
import { signIp } from "../controllers/auth/signIn.controller";

const route = express.Router();

route.post("/signup", signUp);
route.post("/signin", signIp);

export default route;

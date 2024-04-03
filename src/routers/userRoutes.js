import express from "express";
import { createUser, loginUser } from "../controllers/userControllers.js";

const router = express.Router();

router.post("/create-user", createUser);

router.post("/login-user", loginUser);

export default router;

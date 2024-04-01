import express from "express";
import {login, logout, register, myProfile} from "../controller/userController.js";
import {isVerified} from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);
router.get("/logout", isVerified, logout);
router.get("/profile", isVerified, myProfile);
router.post("/register", register);

export default router;
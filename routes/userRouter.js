import { Express } from "express";
import {login, logout, register, myProfile} from "../controller/userController.js";

const router = express.Router();

router.post("/login", login);
router.get("/logout", logout);
router.get("profile", myProfile);
router.post("/register", register);

export default router;
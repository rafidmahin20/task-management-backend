import {createTask, deleteTask, getMyTask, updateTask, getSingleTask} from "../controller/taskController.js";
import express from "express";
import {isVerified} from "../middlewares/auth.js"

const router = express.Router();

router.post("/post", isVerified, createTask);
router.delete("/delete/:id", isVerified, deleteTask);
router.put("/update/:id", isVerified, updateTask);
router.get("/mytask", isVerified, getMyTask);
router.get("/singletask/:id", isVerified, getSingleTask);

export default router;
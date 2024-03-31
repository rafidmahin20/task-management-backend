import {createTask, deleteTask, getMyTask, updateTask, getSingleTask} from "../controller/taskController.js";
import express from "express";

const router = express.Router();

router.post("/post", createTask);
router.delete("/delete/:id", deleteTask);
router.put("/update/:id", updateTask);
router.get("/mytask", getMyTask);
router.get("/singletask/:id", getSingleTask);

export default router;
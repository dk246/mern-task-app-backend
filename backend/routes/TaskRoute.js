import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/taskController.js";
const router = express.Router();

router.route("/").post(createTask);
router.route("/").get(getTasks);
router.route("/:id").get(getTask);
router.route("/:id").delete(deleteTask);
router.route("/:id").put(updateTask);

export default router;

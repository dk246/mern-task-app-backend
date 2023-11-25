import mongoose, { mongo } from "mongoose";
const takSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "please add at task"] },
    completed: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", takSchema);

export default Task;

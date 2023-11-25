import express from "express";
// import ConnectDB from "./config/ConnectDB.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Task from "./models/taskModel.js";
import router from "./routes/TaskRoute.js";
import cors from "cors";

dotenv.config();
const app = express();
//https://mern-task-app-api.onrender.com
//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [
      "http://localhost:3000/",
      "https://mern-task-app-ms02.onrender.com",
      "https://mern-task-app-api-loyn.onrender.com",
    ],
  })
);
app.use("/api/tasks", router);

const port = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`server started at ${port}`);
    });
  })
  .catch((error) => console.log(error));

//ConnectDB();

//Routes
app.get("/", (req, res) => {
  res.send("home page");
});

// app.listen(port, console.log(`Server started on PORT ${port}`));

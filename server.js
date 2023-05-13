import "dotenv/config.js";

import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

import { router as todoRoute } from "./routes/todo.js";
app.use("/todo", todoRoute);

app.listen(3000, () => console.log("listening on port 3000"));

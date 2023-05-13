import express from "express";
import mongoose from "mongoose";
import { Todo } from "../models/todo.js";
const router = express.Router();

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

db.on("connect", () => {
  console.log("Connected to mongoose database");
});

router.get("/", async (req, res) => {
  try {
    const todo = await Todo.find({});
    res.send(todo);
  } catch (err) {
    if (todo != null) {
      res.send("could not find todo items");
    } else {
      err.message;
    }
  }
});

router.post("/", async (req, res) => {
  try {
    const { task } = req.body;
    const todo = await Todo.create({ task });
    res.send(todo);
  } catch (err) {
    console.log(err.message);
  }
});

router.put("/:id", async (req, res) => {
  let todo;
  try {
    todo = await Todo.findById(req.params.id);
    {
      todo.task = req.body.task;
    }
    await todo.save();
    res.send(todo);

    res.send("todo");
  } catch {
    if (todo != null) {
      res.status(404).send();
    }
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const todo = Todo.findById(req.params.id);
  } catch {}
});

export { router };

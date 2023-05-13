import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

export { Todo };

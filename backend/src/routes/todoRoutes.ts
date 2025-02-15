import express, { Request, Response } from "express";
import authMiddleware from "../middlewares/authmiddleware";
import TodoModel from "../models/TodoModel";
const todoRoute = express.Router();
import mongoose from "mongoose";
todoRoute.use(authMiddleware);
todoRoute.post("/addTodo", async (req: Request, res: Response) => {
  const { description, title, dueDate, timeLimit, priority } = req.body;

  const todo = await TodoModel.create({
    description,
    title,
    userId: req.id,
    dueDate,
    timeLimit,
    priority,
  });

  res.json({ todo });
  return;
});

todoRoute.get("/allTodo", async (req: Request, res: Response) => {
  const todo = await TodoModel.find(
    {
      userId: req.id,
    },
    {
      __v: 0,
      userId: 0,
    }
  );

  res.json({ todo });
});

todoRoute.put("/changeStatus/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const todo = await TodoModel.findOne({ _id: id });
  if (!todo) {
    res.json({ msg: "Todo Not found" });
    return;
  }
  const updatedTodo = await TodoModel.findOneAndUpdate(
    { _id: id },
    { completed: !todo.completed }
  );

  if (!updatedTodo) {
    res.json({ msg: "Todo Not Found" });
    return;
  }
  res.json({
    msg: "Todo Updated",
    todo,
  });
});

todoRoute.delete("/deleteAll", async (req, res) => {
  const id = req.id;

  const deletedTodos = await TodoModel.deleteMany({
    userId: id,
  });

  if (!deletedTodos) {
    res.json({
      msg: "Todo Not Found",
    });
    return;
  }
  res.json({ msg: "All Todos Deleted" });
  return;
});
todoRoute.delete("/deleteTodo/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedTodo = await TodoModel.findOneAndDelete({ _id: id });

  if (!deletedTodo) {
    res.json({
      msg: "Todo Not Found",
    });
    return;
  }
  res.json({
    msg: "Todo Deleted",
  });
});
export default todoRoute;

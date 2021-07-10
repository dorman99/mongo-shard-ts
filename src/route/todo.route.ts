import express, { Request, Response } from "express";
const router = express.Router();
import { AccountService, TodoService } from "../service";
import mongoose from "mongoose";

const _tranformPayloatCreatTodoDto = (req: Request) => {
  return {
    accountId: mongoose.Types.ObjectId(req.body.accountId),
    name: req.body.name,
  };
};

router.get("/todos", async (req: Request, res: Response) => {
  try {
    const todos = await TodoService.findAll(
      parseInt(req.params.limit || "10"),
      parseInt(req.params.skip || "0")
    );
    const data = { count: todos.length, results: todos };
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/todos", async (req: Request, res: Response) => {
  try {
    const createTodoDto = _tranformPayloatCreatTodoDto(req);
    const account = await AccountService.find(createTodoDto.accountId);
    if (!account) {
      res.status(403).json({ message: "Forbidden" });
      return;
    }
    await TodoService.create(createTodoDto);
    res.status(201).json({ message: "accepted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/todos/accounts/:id", async (req: Request, res: Response) => {
  try {
    const id = mongoose.Types.ObjectId(req.params.id);
    const todos = await TodoService.findAccount(
      id,
      parseInt(req.params.limit || "10"),
      parseInt(req.params.limit || "0")
    );
    const data = {count: todos.length, results: todos};
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

export { router as TodoRouter };

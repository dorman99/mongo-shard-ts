import express from "express";
import { AccountRouter } from "./account.route";
import { TodoRouter } from "./todo.route";
const router = express.Router();

router.use(AccountRouter);
router.use(TodoRouter);

export { router as V1Router };

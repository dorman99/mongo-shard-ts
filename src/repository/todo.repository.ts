import { ObjectId, Types } from "mongoose";
import { CreateTodoDto } from "../dto/create_todo.dto";
import { TodoModel } from "../entity";
import { TodoInterface } from "../interface";

export const create = async (
  createTodoDto: CreateTodoDto
): Promise<TodoInterface> => {
  return await TodoModel.create(createTodoDto);
};

export const findAccount = async (
  id: Types.ObjectId,
  limit: number,
  skip: number
): Promise<TodoInterface[]> => {
  return await TodoModel.find({ accountId: id, deleted: false })
    .limit(limit)
    .skip(skip)
    .exec();
};

export const findAll = async (
  limit: number,
  skip: number
): Promise<TodoInterface[]> => {
  return await TodoModel.find({ deleted: false })
    .limit(limit)
    .skip(skip)
    .exec();
};

export const find = async (id: Types.ObjectId): Promise<TodoInterface | null> => {
  return await TodoModel.findOne({ _id: id, deleted: false }).exec();
};

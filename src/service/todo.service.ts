import { TodoInterface } from "../interface";
import { TodoRepository } from "../repository";
import { Types } from "mongoose";
import { CreateTodoDto } from "../dto/create_todo.dto";

export const findAll = async (
  limit: number,
  skip: number
): Promise<TodoInterface[]> => {
  return await TodoRepository.findAll(limit, skip);
};

export const find = async (id: Types.ObjectId): Promise<TodoInterface | null> => {
  return await TodoRepository.find(id);
};

export const create = async (
  createTodoDto: CreateTodoDto
): Promise<TodoInterface> => {
  return await TodoRepository.create(createTodoDto);
};

export const findAccount = async (
  id: Types.ObjectId,
  limit: number,
  skip: number
): Promise<TodoInterface[]> => {
  return await TodoRepository.findAccount(id, limit, skip);
};

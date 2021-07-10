import { Types } from "mongoose";
import { CreateAccountDto } from "../dto";
import { AccountInterface } from "../interface";
import { AccountRepository } from "../repository";

export const create = async (
  createAccountDto: CreateAccountDto
): Promise<AccountInterface> => {
  return AccountRepository.create(createAccountDto);
};

export const find = async (id: Types.ObjectId): Promise<AccountInterface | null> => {
  return AccountRepository.find(id);
};

export const findAll = async (
  limit: number,
  skip: number
): Promise<AccountInterface[]> => {
  return AccountRepository.findAll(limit, skip);
};

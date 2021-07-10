import { AccountModel } from "../entity";
import { CreateAccountDto } from "../dto";
import { AccountInterface } from "../interface";
import { Types } from "mongoose";

export const create = async (
  createAccountDto: CreateAccountDto
): Promise<AccountInterface> => {
  return await AccountModel.create(createAccountDto);
};


export const find = async (id: Types.ObjectId): Promise<AccountInterface | null> => {
    return await AccountModel.findOne({_id: id, deleted: false}).exec();
}

export const findAll = async (limit: number, skip: number ): Promise<AccountInterface[]> => {
    return await AccountModel.find({deleted: false}).limit(limit).skip(skip).exec();
}
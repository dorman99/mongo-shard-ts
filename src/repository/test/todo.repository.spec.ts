import { getObjectId } from "mongo-seeding";
import * as dbHandler from "./db.fake";
import { TodoModel } from "../../entity";
import { CreateTodoDto } from "../../dto/create_todo.dto";
import * as TodoRepository from "../todo.repository";

describe("Todo Repository", () => {
  beforeAll(async () => {
    await dbHandler.connect();
  });

  afterAll(async () => {
    await dbHandler.closeDatabase();
  });

  describe("Create", () => {
    it("Should Success", async () => {
      const spyCreate = jest.spyOn(TodoModel, "create");
      const createTodoDto: CreateTodoDto = {
        name: "Testing",
        accountId: getObjectId("John Doe"),
      };
      const create = await TodoRepository.create(createTodoDto);
      expect(spyCreate).toHaveBeenCalled();
      expect(create._id).toBeDefined();
      expect(create.accountId).toEqual(createTodoDto.accountId);
    });
  });

  describe("Find By Account", () => {
    it("Should Success", async () => {
      const accountId = getObjectId("John Doe");
      const spyFind = jest.spyOn(TodoModel, "find");
      const limit = 10;
      const skip = 0;
      const data = await TodoRepository.findAccount(accountId, limit, skip);
      expect(spyFind).toHaveBeenCalled();
      expect(data.length).toBeLessThanOrEqual(limit);
    });
  });

  describe("Find All", () => {
    it("Should Succes", async () => {
      const limit = 10;
      const skip = 0;
      const spyFind = jest.spyOn(TodoModel, "find");
      const data = await TodoRepository.findAll(limit, skip);
      expect(spyFind).toHaveBeenCalled();
      expect(data.length).toBeLessThanOrEqual(limit);
    });
  });

  describe("Find", () => {
    it("Should Success", async () => {
      const id = getObjectId("code");
      const spyFind = jest.spyOn(TodoModel, "findOne");
      const data = await TodoRepository.find(id);
      expect(spyFind).toHaveBeenCalled();
      expect(data._id).toEqual(id);
    });
  });
});

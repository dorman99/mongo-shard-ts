import { getObjectId } from "mongo-seeding";
import { TodoService } from "..";
import { CreateTodoDto } from "../../dto/create_todo.dto";
import { TodoRepository } from "../../repository";
import { generateTodoSeed } from "../../seed/mongodb/helper";

describe("Todo Service", () => {
  describe("Create", () => {
    it("should success", async () => {
      const mockTodo = generateTodoSeed(
        "code",
        false,
        false,
        getObjectId("John Doe")
      );
      const createTodoDto: CreateTodoDto = {
        name: "code",
        accountId: getObjectId("John Doe"),
      };
      const spyRepo = jest
        .spyOn(TodoRepository, "create")
        .mockResolvedValue(mockTodo);
      const create = await TodoService.create(createTodoDto);
      expect(spyRepo).toHaveBeenCalled();
      expect(create.accountId).toEqual(mockTodo.accountId);
    });
  });

  describe("Find", () => {
    it("Should Success", async () => {
      const mockTodo = generateTodoSeed(
        "code",
        false,
        false,
        getObjectId("John Doe")
      );
      const spyRepo = jest
        .spyOn(TodoRepository, "find")
        .mockResolvedValue(mockTodo);
      const id = getObjectId("code");
      const find = await TodoService.find(id);
      expect(spyRepo).toHaveBeenCalled();
      expect(find._id).toEqual(id);
    });
  });

  describe("Find by Account", () => {
    it("Should Succes", async () => {
      const todos = ["code", "learn", "test", "speak", "smoke"];
      const accountId = getObjectId("dorman");
      const mockDatas = todos.map((t) =>
        generateTodoSeed(t, false, false, accountId)
      );
      const spyRepo = jest
        .spyOn(TodoRepository, "findAccount")
        .mockResolvedValue(mockDatas);
      const limit = 10;
      const skip = 0;
      const datas = await TodoService.findAccount(accountId, limit, skip);
      expect(spyRepo).toHaveBeenCalled();
      expect(datas.length).toEqual(todos.length);
      const sample = datas[0];
      expect(sample.accountId).toEqual(accountId);
    });
  });

  describe("Find All", () => {
    it("Should Sucess", async () => {
      const todos = ["code", "learn", "test", "speak", "smoke"];
      const accountId = getObjectId("dorman");
      const mockDatas = todos.map((t) =>
        generateTodoSeed(t, false, false, accountId)
      );
      const spyRepo = jest
        .spyOn(TodoRepository, "findAll")
        .mockResolvedValue(mockDatas);
      const limit = 10;
      const skip = 0;
      const data = await TodoService.findAll(limit, skip);
      expect(spyRepo).toHaveBeenCalled();
      expect(data.length).toEqual(todos.length);
    });
  });
});

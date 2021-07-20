import * as dbHandler from "./db.fake";
import * as AccountRepository from "../account.repository";
import { AccountModel } from "../../entity";
import { CreateAccountDto } from "../../dto";
import { getObjectId } from "mongo-seeding";

describe("Account Repository", () => {
  beforeAll(async () => {
    await dbHandler.connect();
  });

  afterAll(async () => {
    await dbHandler.closeDatabase();
  })

  describe("Create", () => {
    it("Should be Success", async () => {
      const spyModel = jest.spyOn(AccountModel, "create");
      let createAccountDto: CreateAccountDto = {
        name: "Dorman",
      };
      const create = await AccountRepository.create(createAccountDto);
      expect(spyModel).toHaveBeenCalled();
      expect(create._id).toBeDefined();
    });

    describe("Find One", () => {
      it("Should Be Found", async () => {
        const spyModel = jest.spyOn(AccountModel, "findOne");
        const id = getObjectId("John Doe");
        const data = await AccountRepository.find(id);
        expect(spyModel).toHaveBeenCalled();
        expect(data._id).toEqual(id);
      });

      it("Should Be Not Found", async () => {
        const spyModel = jest.spyOn(AccountModel, "findOne");
        const id = getObjectId("None");
        const data = await AccountRepository.find(id);
        expect(spyModel).toHaveBeenCalled();
        expect(data).toBe(null);
      });

      describe("Find All", () => {
        it("Should Return Data", async () => {
          const limit = 10;
          const skip = 0;
          const spyModel = jest.spyOn(AccountModel, "find");
          const data = await AccountRepository.findAll(limit, skip);
          expect(spyModel).toHaveBeenCalled();
          expect(data.length).toBeLessThanOrEqual(limit);
          for(let i = 0; i < data.length; i++) {
            expect(data[i]._id).toBeDefined();
          }
        });

        it("Should Return Empty", async () => {
          const limit = 10;
          const skip = 99999;
          const spyModel = jest.spyOn(AccountModel, "find");
          const data = await AccountRepository.findAll(limit, skip);
          expect(spyModel).toHaveBeenCalled();
          expect(data.length).toBeLessThanOrEqual(0);
        })
      })
    });
  });
});

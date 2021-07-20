import { getObjectId } from "mongo-seeding";
import { CreateAccountDto } from "../../dto";
import { AccountRepository } from "../../repository";
import { generateAccountSeed } from "../../seed/mongodb/helper";
import * as AccountService from "../account.service";

describe("Account Service", () => {
  describe("Create", () => {
    it("Succes", async () => {
      const account = generateAccountSeed("Testi");
      const createAccountDto: CreateAccountDto = {
        name: "Testi",
      };
      const spyRepo = jest
        .spyOn(AccountRepository, "create")
        .mockResolvedValue(account);
      const create = await AccountService.create(createAccountDto);
      expect(spyRepo).toHaveBeenCalled();
      expect(create._id).toEqual(getObjectId("Testi"));
    });
  });

  describe("Find", () => {
    it("Should Success", async () => {
      const id = getObjectId("Testi");
      const account = generateAccountSeed("Testi");
      const spyRepo = jest
        .spyOn(AccountRepository, "find")
        .mockResolvedValue(account);
      const find = await AccountService.find(id);
      expect(spyRepo).toHaveBeenCalled();
      expect(find._id).toEqual(id);
    });
  });

  describe("Find All", () => {
    it("Should Sucess", async () => {
      const limit = 10;
      const skip = 0;
      const names = [
        "anton",
        "andi",
        "dorman",
        "ricard",
        "elrich",
        "gilfoyle",
        "dhines",
      ];
      const accs = names.map((n) => generateAccountSeed(n));
      const spyRepo = jest
        .spyOn(AccountRepository, "findAll")
        .mockResolvedValue(accs);
      const data = await AccountService.findAll(limit, skip);
      expect(spyRepo).toHaveBeenCalled();
      expect(data.length).toEqual(names.length);
    });
  });
});

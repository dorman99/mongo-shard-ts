import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { CreateAccountDto } from "../dto";
import { AccountService } from "../service";
const router = express.Router();

const _createPayloadTransformer = (req: Request): CreateAccountDto => {
  return {
    name: req.body.name,
  } as CreateAccountDto;
};

router.post("/accounts", async (req: Request, res: Response) => {
  const createAccountPayload = _createPayloadTransformer(req);
  try {
    const acc = await AccountService.create(createAccountPayload);
    res.status(200).json(acc);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/accounts", async (req: Request, res: Response) => {
  try {
    const accs = await AccountService.findAll(
      parseInt(req.params.limit || "10"),
      parseInt(req.params.skip || "0")
    );
    res.status(200).json({ count: accs.length, results: accs });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/accounts/:id", async (req: Request, res: Response) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      res.status(400).json({ message: "Not Valid Object Id" });
      return;
    }
    const id = mongoose.Types.ObjectId(req.params.id);
    const acc = await AccountService.find(id);
    res.status(200).json(acc);
  } catch (err) {
    res.status(500).json(err);
  }
});

export { router as AccountRouter };

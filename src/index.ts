import { port, mongoUri } from "./config";
import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose";
import { V1Router } from "./route";
const app = express();
app.use(json());

app.use("/api/v1", V1Router);

mongoose.connect(
  mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) console.error(err);
    app.listen(port || 3000, () => {
      console.log("Application Run at ", port || 3000);
    });
  }
);

import { config } from "dotenv";
config();
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const mongod = new MongoMemoryServer();

export const connect = async () => {
  const mongooseOpts = {
    useNewUrlParser: true,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    poolSize: 10,
  };
  await mongoose.connect(
    process.env.MONGO_URI || "mongodb://localhost:27017/dev-db",
    mongooseOpts
  );
};

export const closeDatabase = async () => {
//   await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};

// export const clearDatabase = async () => {
//   const collections = mongoose.connection.collections;
//   for (const key in collections) {
//     const collection = collections[key];
//     await collection.deleteMany({});
//   }
// };

import "dotenv/config";
import express from "express";
import { connectDb } from "./config/db.js";
import { User } from "./models/User.js";

const app = express();
const { PORT, MONGO_URL } = process.env;

app.get("/users", async (req, res) => {
  connectDb();

  const usersDoc = await User.find();

  res.json(usersDoc);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

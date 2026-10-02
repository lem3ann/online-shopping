import express from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./src/main/db-donnection";
import router from "./src/routes/category";
dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
connectToDatabase();
app.use("/api", router);
app.listen(port, () => {
  console.log("Running");
});

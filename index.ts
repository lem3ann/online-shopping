import express from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./src/main/db-donnection";
import router from "./src/routes/category";
import productRouter from "./src/routes/product";
dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
connectToDatabase();
app.use("/api", router);
app.use("/api", productRouter);
app.listen(port, () => {
  console.log("Running");
});

import mongoose from "mongoose";
import express from "express";
import { productSchema } from "../models/product-schema";
const productRouter = express.Router();
productRouter.use(express.json());
const Product = mongoose.model("Product", productSchema);
// ----------------------------------------------- CREATE PRODUCT ------------------------------------------------
productRouter.post("/products/add", async (req, res) => {
  const { name, price, stock, category, description, isActive } = req.body;
  try {
    const newProduct = new Product({
      name: name,
      price: price,
      stock: stock,
      category: category,
      description: description,
      isActive: isActive,
    });
    await newProduct.save();
    return res.status(201).send("CREATED");
  } catch (err) {
    return res.send(err);
  }
});
export default productRouter;

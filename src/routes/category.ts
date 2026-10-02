import express from "express";
import { categorySchema } from "../models/category-schema";
import mongoose from "mongoose";
const router = express.Router();
router.use(express.json());
export const Category = mongoose.model("category", categorySchema);
// ---------------------------------------------- CREATE ---------------------------------------------------------
router.post("/categories/add", async (req, res) => {
  const { name, description } = req.body;
  if (!name) {
    return res.status(400).send("Bad request");
  }
  try {
    // check duplicate
    const currrentData = await Category.findOne({ name });
    if (currrentData) {
      return res.status(400).send("Duplicate Data ...");
    }
    const categories = new Category({
      name: name,
      description: description,
    });
    await categories.save();
    return res.status(201).send("Category was created successfully");
  } catch (err) {
    return res.status(400).send(err);
  }
});
// ----------------------------------------------- READ ---------------------------------------------------------
router.get("/categories/findAll", async (req, res) => {
  const result = await Category.find({});
  console.log(result);
  return res.json(result);
});
// -------------------------------------------- READ SPECIFIC DOCUMENT -------------------------------------------
router.get("/categories/findOne/:name", async (req, res) => {
  const currentName = req.params.name;
  try {
    const specificData = await Category.findOne({ name: currentName });
    // console.log(specificData);

    if (specificData) {
      return res.send(specificData);
    } else {
      return res.status(404).send("Not found ...");
    }
  } catch (err) {
    console.log(err);
  }
});
// ---------------------------------------------- UPDATE SPECIFIC DOCUMENT -------------------------------------------
router.put("/categories/edit/:id", async (req, res) => {
  const currentCategoryId = req.params.id;
  try {
    const specificData = await Category.findOne({ _id: currentCategoryId });
    if (!specificData) {
      return res.send("Not found ....");
    } else {
      const element = await Category.findByIdAndUpdate(
        currentCategoryId,
        req.body,
        {
          new: true,
        },
      );
      return res.send(element);
    }
  } catch (err) {
    // console.log(err);
  }
});
// ----------------------------------------- DELETE SPECIFIC DOCUMENT ----------------------------------------------
router.delete("/categories/delete/:id", async (req, res) => {
  const currentCategoryId = req.params.id;
  try {
    const deletedUser = await Category.findByIdAndDelete(currentCategoryId);
    if (!deletedUser) {
      res.status(404).send("Not found ...");
    } else {
      return res.status(200).send(deletedUser);
    }
  } catch (err) {
    res.send(err);
  }
});
export default router;

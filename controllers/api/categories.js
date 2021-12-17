const { logError } = require("../../utils/logger");
const { Category, Product } = require("../../models");

const getAllCategories = async (req, res) => {
  try {
    const data = await Category.findAll();
    return res.json({ success: true, data });
  } catch (err) {
    logError("GET All Catagories", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const data = await Category.findByPk(req.params.id, {
      // include: [
      //   {
      //     model: Product,
      //   },
      // ],
    });
    return res.json({ success: true, data });
  } catch (err) {
    console.log("GET categories", err.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const createNewCategory = (req, res) => {
  try {
    res.status(200).json(newCategory);
  } catch (err) {
    res.json("GET categories", err.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const updateCategory = (req, res) => {
  try {
    res.status(200).json(updateCategoryId);
  } catch (err) {
    res.json("GET categories", err.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const deleteCategory = (req, res) => {
  try {
    res.status(200).json(deleteCategoryId);
  } catch (err) {
    logError("GET categories", err.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createNewCategory,
  updateCategory,
  deleteCategory,
};

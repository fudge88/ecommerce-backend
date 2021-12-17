const { Category, Product } = require("../../models/index");

const getAllCategories = async (req, res) => {
  try {
    const data = await Category.findAll();
    return res.json({ success: true, data });
  } catch (err) {
    res.json("GET categories", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const data = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: Category,
        },
      ],
    });
    return res.json({ success: true, data });
  } catch (err) {
    res.json("GET categories", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const createNewCategory = (req, res) => {
  try {
    res.status(200).json(deleteCategoryId);
  } catch (err) {
    res.json("GET categories", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const updateCategory = (req, res) => {
  try {
    res.status(200).json(updateCategoryId);
  } catch (err) {
    res.json("GET categories", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const deleteCategory = (req, res) => {
  try {
    res.status(200).json(deleteCategoryId);
  } catch (err) {
    logError("GET categories", error.message);
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

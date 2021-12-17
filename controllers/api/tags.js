const { logError } = require("../../utils/logger");
const { Category, Product, Tag, ProductTag } = require("../../models");

const getAllTags = async (req, res) => {
  try {
    const data = await Tag.findAll();
    return res.json({ success: true, data });
  } catch (err) {
    res.json("GET categories", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const getTagById = async (req, res) => {
  try {
    const data = await Tag.findByPk(req.params.id);
    if (data) {
      return res.json({ success: true, data });
    }
    return res
      .status(404)
      .json({ success: false, error: "Category does not exist" });
  } catch (err) {
    logError("GET categories", err.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const createTag = (req, res) => {
  res.send("createTag");
};

const updateTag = (req, res) => {
  res.send("updateTag");
};

const deleteTag = (req, res) => {
  res.send("deleteTag");
};

module.exports = {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
};

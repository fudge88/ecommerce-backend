const { Router } = require("express");

const { Tag, Product, ProductTag } = require("../../models");

const {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
} = require("../../controllers/api/tags");

// The `/api/tags` endpoint

const router = Router();

router.get("/", getAllTags);

router.get("/:id", getTagById);

router.post("/", createTag);

router.put("/:id", updateTag);

router.delete("/:id", deleteTag);

module.exports = router;

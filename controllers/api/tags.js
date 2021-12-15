const getAllTags = (req, res) => {
  res.send("getAllTags");
};

const getTagById = (req, res) => {
  res.send("getTagById");
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

const getAllCategories = (req, res) => {
  res.send("getAllCategories");
};

const getCategoryById = (req, res) => {
  res.send("getCategoryById");
};

const createNewCategory = (req, res) => {
  res.send("createNewCategory");
};

const updateNewCategory = (req, res) => {
  res.send("updateNewCategory");
};

const deleteCategory = (req, res) => {
  res.send("deleteCategory");
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createNewCategory,
  updateNewCategory,
  deleteCategory,
};

const { logError } = require("../../utils/logger");
const { Product, ProductTag } = require("../../models");

const getAllProducts = async (req, res) => {
  try {
    const data = await Product.findAll();
    return res.json({ success: true, data });
  } catch (err) {
    res.json("GET Products", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

// get one product
const getProductById = async (req, res) => {
  try {
    const data = await Product.findByPk(req.params.id);
    if (data) {
      return res.json({ success: true, data });
    }
    return res
      .status(404)
      .json({ success: false, error: "Product does not exist" });
  } catch (err) {
    logError("GET Products", err.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

// create new product
const createProduct = (req, res) => {
  /* req.body should look like this...
      {
        product_name: "Basketball",
        price: 200.00,
        stock: 3,
        tagIds: [1, 2, 3, 4],
        category_id: 5
      }
    */
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

// update product
const updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.json({ success: true, data: "Successfully Update Product" });
  } catch (error) {
    logError("UPDATE Product", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ success: true, data: "Successfully Deleted Product" });
  } catch (error) {
    logError("DELETE Product", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};

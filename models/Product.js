const sequelize = require("../config/connection");

const { Model, DataTypes } = require("sequelize");

// category class & schema
class Product extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: { isDecimal: true },
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { isNumeric: true },
    defaultValue: 10,
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "category",
      key: "id",
    },
  },
};

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "product",
};

Product.init(schema, options);

module.exports = Product;

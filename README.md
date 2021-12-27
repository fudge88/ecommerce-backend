# E-Commerce Backend ![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=<COLOR>)

A back end for an e-commerce site. This app is configured with a working Express.js API to use Sequelize to interact with a MySQL database.

![portfolio demo](./img/ecom.gif)

## Summary

An fully functional backend, allowing users to `Create`, `Read`, `Update`, and `Delete` products, categories and tags used to create an organized structure for the database/products.

#### A walk-though video for the app can be viewed [here.](https://drive.google.com/drive/folders/1sSUipZilS01jZNuutv9baDyFuByCu-jU?usp=sharing)

![portfolio demo](./img/wrkbench.gif)

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Installation Instructions:

You are able to clone this repository, by clicking [here](https://github.com/fudge88/ecommerce-backend) and then clicking on the `code` button. Select how you would like to clone the repository.

If you have your SSH keys set up, you are able to copy the link from the drop down and paste the following into your terminal application:

```
git@github.com:fudge88/ecommerce-backend.git
```

Then change your directory so you are now in your newly cloned project and then open the code in your chosen source-code editor.

You need to install all dependencies that are listed in the `package.json` file:

```
npm install --save
```

Check to see that the following code is in the `package.json`, this will ensure npm to 'start' the application from your entry file

```
"start": node src/index.js
```

## How to run the application:

To run the start script, use the following code in the terminal.

```
npm run start
```

This should start the application, and you will be prompted with questions in the terminal.

![portfolio demo](./img/ecom.gif)

## Tools Used:

- node.js
- express -npm
- inquirer - npm
- mysql2
- sequelize - npm
- dotenv - npm

#### Languages:

- JavaScript

#### Sequelize:

According to the docs “Sequelize is a promise-based ORM for Node.js v4 and upwards. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.”

A promise in Nodejs is an event which will produce a result in the future. This result can either be a success(fulfilled) or failure(rejected).

Sequelize being a promise-based ORM (Object Relational Mapper) means that it supports NodeJS promises using the bluebirdJS library internally(which is a NodeJS promise library).

### Database Models

A Model represents a table in the database. This simplifies the process MySQL would require. However Models require associations breaking up databases in segments, so should a change in a category arise, this can be changed without altering tables(mysql) that contain everything. Thus containing possible errors that can arise from changes.

An example of this can be seen below.

#### Sequelize Model:

```
class Category extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};
```

#### Sequelize Association:

```
Category.hasMany(Product, {
  foreignKey: "category_id",
});
```

#### MySQL equivalent:

```
CREATE TABLE category (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(30) NOT NULL,
  productId INT,
  FOREIGN KEY (productId)
  REFERENCES product(id)
  ON DELETE SET NULL
);
```

### Express

Is a node.js web server framework. This framework is built in such a way that it acts as a minimal and flexible Node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web application. This framework allows for a map like functionality that relates to the steps iterated in a URL.  
View the demo above to see this in action.

### References

[Sequelize](https://sequelize.org/)

[StackOverflow](https://stackoverflow.com/questions/)

[NPM Express](https://expressjs.com/)

[MySQL](https://www.npmjs.com/package/mysql2)

## License

![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=<COLOR>)

This project is licensed under the terms of the MIT license.

## Questions

- If you have any questions about this project
- would like further information
- would like to report and issue

please contact me through the links below:

[GitHub](https://github.com/fudge88) Profile

Email: akhlaq.fahra@gmail.com

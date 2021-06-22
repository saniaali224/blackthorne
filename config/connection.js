const Sequelize = require('sequelize');

// Or you can simply use a connection uri
const sequelize = new Sequelize('postgres://postgres:helloworld123@127.0.0.1:5432/shoppingcart');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
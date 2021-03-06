require('dotenv').config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DATABASE_URL } = process.env;
module.exports={
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "shoppingcart",
    "host": DB_HOST,
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "shoppingcart",
    "host": DB_HOST,
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    // "username": DB_USERNAME,
    // "password": DB_PASSWORD,
    // "database": "shoppingcart",
    // "host": DB_HOST,
    "dialect": "postgres",
    "use_env_variable":DATABASE_URL,
    // "operatorsAliases": false
  }
};

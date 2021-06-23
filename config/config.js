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
    "use_env_variable":"postgres://jugcpvgtsskzlz:7952443ff5c1a84d6c1a82295f3cfce541925e8b80d67363bb103dee1ad45e1e@ec2-18-233-83-165.compute-1.amazonaws.com:5432/d55n4r70as9p85",
    // "operatorsAliases": false
  }
};

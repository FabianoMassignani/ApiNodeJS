const {
  DB_USER = "root",
  DB_PASSWORD = "root",
  DB_HOST = "localhost",
  DB_PORT = "27017",
  DB_NAME = "db_fabiano",
} = process.env;

module.exports = {
  url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
};

// DB_HOST=localhost
// DB_USER=root
// DB_PASSWORD=123456
// DB_NAME=db_fabiano
// DB_PORT=27017

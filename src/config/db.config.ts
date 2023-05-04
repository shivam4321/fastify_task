import config from "./config";

module.exports = {
  development: {
    username: config.database.dev.username,
    password: config.database.dev.password,
    database: config.database.dev.name,
    host: config.database.dev.host,
    dialect: config.database.dialect,
    sync: { alter: true }
  },
};

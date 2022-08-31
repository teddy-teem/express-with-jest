const appPort = process.env.PORT || 3000;
const jwtSecret = process.env.JWT_SECRET;
const dbName = process.env.DB_NAME;
const dbHost = process.env.DB_HOST;
const dbUsername = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbDialect = process.env.DB_DIALECT;
const variables = {
  appPort,
  jwtSecret,
  dbName,
  dbHost,
  dbUsername,
  dbPassword,
  dbDialect,
};

module.exports = variables;

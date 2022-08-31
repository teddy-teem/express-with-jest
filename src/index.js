require("dotenv").config();
const express = require("express");
const chalk = require("chalk");
const variables = require("./variables");
const useRoutes = require("./routes");
const { sequelize } = require("./RDB/config");
const app = express();
app.use(express.json());
app.use(useRoutes);
app.listen(variables.appPort, () => {
  console.log(
    chalk.green.inverse(
      `===========>>>>listening on port ${variables.appPort}`,
    ),
  );
});

module.exports = app;

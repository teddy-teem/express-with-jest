const express = require("express");
const healthControllers = require("./controllers/health");
const signupControllers = require("./controllers/signup");
const router = express.Router();
router
  .get("/health", healthControllers.health)
  .post("/user/signup", signupControllers.signup)
  .get("/user/:email", signupControllers.getByEmail);
module.exports = router;

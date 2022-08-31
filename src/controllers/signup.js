const Signup = require("../models/Signup");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const variables = require("../variables");
const { getRandom } = require("../helper/fun");

exports.signup = async (req, res) => {
  try {
    const { name, email, password, username, mobile } = req.body;
    const Users = await Signup.getByEmail(email);
    if (Users) {
      throw Object.assign(new Error(), {
        status: "Bad Request",
        code: 409,
        message: "Already signed up with this email address",
      });
    }
    const hashPass = await bcrypt.hash(password, 8);
    const token = jwt.sign(
      { name, email, username, mobile },
      variables.jwtSecret,
      {
        expiresIn: "1 days",
      },
    );
    const user = await Signup.create({
      name,
      email,
      password: hashPass,
      token,
      username,
      mobile,
    });
    res.send({
      status: "Success",
      code: 201,
      message: "Sucessfully signed up",
      data: user,
    });
  } catch (error) {
    res.send(error);
  }
};
exports.getByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await Signup.getByEmail(email);
    if (!result || !Object.keys(result).length) {
      throw Object.assign(new Error(), {
        status: "Not Found",
        code: 404,
        message: "User not exist",
      });
    }
    const random = getRandom();
    res.send({
      random,
      status: "ok",
      code: 200,
      message: "Data fetched successfully",
      data: result,
    });
  } catch (error) {
    res.send({
      error: Object.keys(error).length
        ? error
        : { status: "Internal Server Error", code: 500 },
    });
  }
};
exports.deleteByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await Signup.deleteByEmail(email);
    res.send({ status: "ok", message: "fetched", data: result });
  } catch (error) {
    res.send(error);
  }
};
exports.func = () => {
  return getRandom();
};

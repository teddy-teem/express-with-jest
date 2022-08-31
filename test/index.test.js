require("dotenv").config({ path: "./src/.env" });
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const server = require("../src/index");
const variables = require("../src/variables");
const request = require("supertest");
const signup = require("../src/controllers/signup");
const SignupModel = require("../src/models/Signup");
const helper = require("../src/helper/fun");
const chalk = require("chalk");
const {
  onCreateSuccess,
  onCreateConflict,
  onGetNotFound,
  onGetSuccess,
} = require("./mock/mockData");

jest.mock("../src/models/Signup");
jest.mock("../src/helper/fun");

describe("Function Testing (Unit)", () => {
  test("fn::create user :: onSuccess", async () => {
    SignupModel.create.mockResolvedValue(Promise.resolve(onCreateSuccess));
    const a = await request(server).post("/user/signup").send({
      name: "Jahid Hasan",
      username: "jahidhsn",
      email: "jahidhsn62@gmail.com",
      mobile: "+880 1521476209",
      password: "1234",
    });
    expect(a.body.data.code).toBe(201);
  });
  test("fn::create user :: onConflict", async () => {
    SignupModel.create.mockResolvedValue(Promise.resolve(onCreateConflict));
    const a = await request(server).post("/user/signup").send({
      name: "Jahid Hasan",
      username: "jahidhsn",
      email: "jahidhsn62@gmail.com",
      mobile: "+880 1521476209",
      password: "1234",
    });
    expect(a.body.data.code).toBe(409);
  });
  test("fn::get user::onSuccess", async () => {
    SignupModel.getByEmail.mockResolvedValue(Promise.resolve(onGetSuccess));
    helper.getRandom.mockReturnValue(50);
    const a = await request(server).get("/user/jahidhsn56@gmail.com");
    expect(a.body.code).toBe(200);
  });
  test("fn::get user :: onConflict", async () => {
    SignupModel.getByEmail.mockResolvedValue(Promise.resolve({}));
    const a = await request(server).get("/user/jahidhsn67@gmail.com");
    expect(a.body.error.code).toBe(404);
  });
});

// describe("API Testing (Integration)", () => {
//   test("API:: health api test", async () => {
//     const a = await request(server).get("/health");
//   });
//   test("API:: getByEmailId api test", async () => {
//     const a = await request(server).get("/user/getByEmailId");
//   });
//   test("API:: signup api test", async () => {
//     const a = await request(server).post("/user/signup").send({
//       name: "Jahid Hasan",
//       username: "jahidhsn",
//       email: "jahidhsn61@gmail.com",
//       mobile: "+880 1521476209",
//       password: "1234",
//     });
//   });
// });

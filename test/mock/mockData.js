// const userData = {
//   name: "Jahid Hasan",
//   username: "jahidhsn",
//   email: "jahidhsn12@gmail.com",
//   mobile: "+880 1521476209",
//   password: await bcrypt.hash("1234", 8),
//   token: jwt.sign(
//     {
//       name: "Jahid Hasan",
//       email: "jahidhsn12@gmail.com",
//       username: "jahidhsn",
//       mobile: "+880 1521476209",
//     },
//     variables.jwtSecret,
//     {
//       expiresIn: "1 days",
//     },
//   ),
// };

const onCreateSuccess = {
  status: "Success",
  code: 201,
  message: "Sucessfully signed up",
  data: {
    id: "951a5ab0-78fe-4491-bd90-e99ad469981a",
    name: "Jahid Hasan",
    email: "jahidhsn65@gmail.com",
    password: "$2a$08$9GYIHfC6pHzmmAL//rBNsOGMcH5lqhlBdvOnyLzW9kmFhSob3DIFu",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFoaWQgSGFzYW4iLCJlbWFpbCI6ImphaGlkaHNuNjVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJqYWhpZGhzbiIsIm1vYmlsZSI6Iis4ODAgMTUyMTQ3NjIwOSIsImlhdCI6MTY2MTkyMzM3MCwiZXhwIjoxNjYyMDA5NzcwfQ.HOW13qgMCEOTR3_YvowvD8XvkuyLaw3q1zrikYd839A",
    username: "jahidhsn",
    mobile: "+880 1521476209",
    updatedAt: "2022-08-31T05:22:50.506Z",
    createdAt: "2022-08-31T05:22:50.506Z",
  },
};
const onCreateConflict = {
  status: "Bad Request",
  code: 409,
  message: "Already signed up with this email address",
};
const onGetSuccess = {
  status: "ok",
  code: 200,
  message: "Data fetched successfully",
  data: {
    id: "951a5ab0-78fe-4491-bd90-e99ad469981a",
    name: "Jahid Hasan",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFoaWQgSGFzYW4iLCJlbWFpbCI6ImphaGlkaHNuNjVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJqYWhpZGhzbiIsIm1vYmlsZSI6Iis4ODAgMTUyMTQ3NjIwOSIsImlhdCI6MTY2MTkyMzM3MCwiZXhwIjoxNjYyMDA5NzcwfQ.HOW13qgMCEOTR3_YvowvD8XvkuyLaw3q1zrikYd839A",
    username: "jahidhsn",
    email: "jahidhsn65@gmail.com",
    mobile: "+880 1521476209",
    password: "$2a$08$9GYIHfC6pHzmmAL//rBNsOGMcH5lqhlBdvOnyLzW9kmFhSob3DIFu",
    createdAt: "2022-08-31T05:22:50.000Z",
    updatedAt: "2022-08-31T05:22:50.000Z",
  },
};
const onGetNotFound = {};

module.exports = {
  onCreateSuccess,
  onCreateConflict,
  onGetNotFound,
  onGetSuccess,
};

import express from "express";
import * as dotenv from "dotenv";
import {
  buildConnection,
  registerUserData,
  findExistingUser,
} from "./connectionDB.js";

dotenv.config();
const app = express();

app.use(express.json());

const PORT = 5000;

app.get("/", function (req, res) {
  res.send("Server is running /👍");
});

//Post request for login user;
app.post("/login", function (request, response) {
  console.log(request.body.username);
  let username = request.body.username;
  let password = request.body.password;
  if (!username && !password) return;
  let result = buildConnection();
  if (!result) return;
});

// POST request for register user
app.post("/register", function (request, response) {
  let { firstName, lastName, email, password } = request.body;
  if (!firstName && !lastName && !email && !password)
    response.status(404).json({ message: "Data not found" });
  buildConnection().then((resolve) => {
    let payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    let query = { email: email };
    findExistingUser(query).then((resolve) => {
      if (resolve.length > 0) {
        response.status(201).json({ message: "User already registered" });
      } else {
        registerUserData(payload)
          .then((resolve) => {
            response
              .status(200)
              .json({ message: "User Registered Successfully" });
          })
          .catch((error) => {
            response
              .status(200)
              .json({ message: "Not able to Register User", error: error });
          });
      }
    });
  });
});

app.listen(PORT, () => console.log("Server is running /👍"));

import express from "express";
import * as dotenv from "dotenv";
import { buildConnection, readQuery } from "./connectionDB.js";

dotenv.config();
const app = express();

app.use(express.json());

const PORT = 5000;

app.get("/", function (req, res) {
  res.status(200).send("Server is Running");
});
// get product filters

app.get("/products", function (req, res) {
  buildConnection().then(async (isConnected) => {
    let query = {};
    if (isConnected) {
      try {
        let result = await readQuery("CORAL_Ecommerce", "Products", query);
        if (result.length) {
          res.status(200).send({ result: result });
        } else {
          res.status(404).send("No Data Found");
        }
      } catch (error) {
        res.status(403).status({ error: error });
      }
    }
  });
});

//Post request for login user;
// app.post("/login", function (request, response) {
//   console.log(request.body.email);
//   let email = request.body.email;
//   let password = request.body.password;
//   if (!email && !password) return;
//   buildConnection().then((resolve) => {
//     let query = { email: email, securityKey: password };
//     findExistingUser(query).then((resolve) => {
//       if (resolve.length > 0) {
//         response.status(200).json({ email: email, isLogedIn: true });
//       } else {
//         response
//           .status(201)
//           .json({
//             email: email,
//             isLogedIn: false,
//             errorMsg: "Check your email and password",
//           });
//       }
//     });
//   });
// });

// POST request for register user
// app.post("/register", function (request, response) {
//   let { firstName, lastName, email, password } = request.body;
//   if (!firstName && !lastName && !email && !password)
//     response.status(404).json({ message: "Data not found" });
//   buildConnection().then((resolve) => {
//     let payload = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       securityKey: password,
//     };
//     let query = { email: email };
//     findExistingUser(query).then((resolve) => {
//       if (resolve.length > 0) {
//         response
//           .status(201)
//           .json({ message: "User already registered", isExistingUser: true });
//       } else {
//         registerUserData(payload)
//           .then((resolve) => {
//             response.status(200).json({
//               message: "User Registered Successfully",
//               isRegisterd: true,
//             });
//           })
//           .catch((error) => {
//             response.status(501).json({
//               message: "Not able to Register User",
//               error: error,
//               isRegisterd: false,
//             });
//           });
//       }
//     });
//   });
// });

app.listen(PORT, () => console.log("Server is running /👍"));

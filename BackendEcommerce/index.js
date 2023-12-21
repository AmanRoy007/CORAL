import express from "express";
import * as dotenv from "dotenv";
import productsList from "./allProducts.js";
import registerUser from "./Autthentication/authentication.js";
import cors from "cors";
import loginUser from "./Autthentication/loginUser.js";
import cookieParser from "cookie-parser";
import paymentGateway from "./Payment/payment.js";

dotenv.config();
const app = express();

app.use(
  express.json(),
  cors({
    origin: "*",
  }),
  cookieParser()
);

const PORT = 5000;

app.get("/", function (req, res) {
  res.status(200).send("Server is Running");
});
// get product filters

app.get("/products", function (req, res) {
  res.status(200).send({ result: productsList });
  // buildConnection().then(async (isConnected) => {
  //   let query = {};
  //   if (isConnected) {
  //     try {
  //       let result = await readQuery("CORAL_Ecommerce", "Products", query);
  //       if (result.length) {
  //         res.status(200).send({ result: result });
  //       } else {
  //         res.status(404).send("No Data Found");
  //       }
  //     } catch (error) {
  //       res.status(403).status({ error: error });
  //     }
  //   }
  // });
});

app.use("/user", registerUser);
app.use("/user", loginUser);

app.use("/payment", paymentGateway);

app.listen(PORT, () => console.log("Server is running /👍"));

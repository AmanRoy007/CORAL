import express from "express";
import * as dotenv from "dotenv";
import { buildConnection, readQuery } from "./connectionDB.js";
import registerUser from "./Autthentication/authentication.js";
import productsList from "./allProducts.js";

dotenv.config();
const app = express();

app.use(express.json());

const PORT = 5000;

app.get("/", function (req, res) {
  res.status(200).send("Server is Running");
});
// get product filters

app.get("/products", function (req, res) {
  res.status(200).send({result:productsList})
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


// Register User Routes

app.post('/register',(request, response)=>{
  let {firstName, lastName, email, password, confirmPassword} = request.body;
  if(firstName && lastName && email && password && confirmPassword)
  {
    registerUser(firstName, lastName, email, password, confirmPassword);
    response.status(200).send("Work in progress")
  }
})

app.listen(PORT, () => console.log("Server is running /👍"));

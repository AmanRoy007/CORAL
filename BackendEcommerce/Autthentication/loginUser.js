import express from "express";
import * as bcrypt from "bcrypt";

import { buildConnection } from "../connectionDB.js";
import { MongoClient, ServerApiVersion } from "mongodb";

const connectionUrl = process.env.CONNECTIONSTRING;

const mongodb = new MongoClient(connectionUrl, {
  serverApi: ServerApiVersion.v1,
});

const dataBase = mongodb.db("CORAL_Ecommerce").collection("RegisterUser");

const loginUser = express.Router();

loginUser.post("/login", (request, response) => {
  let { email, password } = request.body;
  let hashedPassword;
  if (email && password) {
    buildConnection().then(async (isConnected) => {
      if (isConnected) {
        hashedPassword = await dataBase.find({ email: email }).toArray();
        return bcrypt
          .compare(password, hashedPassword[0].password)
          .then((result) => {
            if (result) {
              response.status(200).send({result:"login SuccessFull"});
            } else {
              response.sendStatus(401);
            }
          });
      }
    });
  }
});

export default loginUser;

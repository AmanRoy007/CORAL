import express, { response } from "express";
import bcrypt from 'bcrypt';

import { buildConnection } from "../connectionDB.js";
import { MongoClient, ServerApiVersion } from "mongodb";
import cookieParser from "cookie-parser";
import cors from "cors";

const connectionUrl = process.env.CONNECTIONSTRING;

const mongodb = new MongoClient(connectionUrl, {
  serverApi: ServerApiVersion.v1,
});

const dataBase = mongodb.db("CORAL_Ecommerce").collection("RegisterUser");

const loginUser = express.Router().use(cookieParser());

let userInfo;

loginUser.post("/login", (request, response) => {
  let { email, password } = request.body;
  if (email && password) {
    buildConnection().then(async (isConnected) => {
      if (isConnected) {
        userInfo = await dataBase.find({ email: email }).toArray();
        return bcrypt.compare(password, userInfo[0].password).then((result) => {
          if (result) {
            response.status(200).send({
              result: `${userInfo[0].firstName}${userInfo[0].lastName}`,
            });
          } else {
            response.sendStatus(401);
          }
        });
      }
    });
  }
});

loginUser.get("/cookies", (req, res) => {
  res
    .status(200)
    .cookie(
      "Authenticated",
      `${userInfo[0].firstName}${userInfo[0].lastName}`,
      {
        expires: new Date(Date.now() + 900000),
        secure: false,
        sameSite: false,
        httpOnly:true
      }
    )
    .send();
});

export default loginUser;

import * as dotenv from "dotenv";
import { buildConnection } from "../connectionDB.js";
import { MongoClient, ServerApiVersion } from "mongodb";
import encryptPassword from "./Validations-Hashing/validations-hashing.js";
import express from "express";

dotenv.config();

const registerUser = express.Router();
const loginUser = express.Router();

const connectionUrl = process.env.CONNECTIONSTRING;

const mongodb = new MongoClient(connectionUrl, {
  serverApi: ServerApiVersion.v1,
});

registerUser.post("/registerUser", (request, response) => {
  let { firstName, lastName, email, password, confirmPassword } = request.body;
  if (firstName && lastName && email && password && confirmPassword) {
    const dataBase = mongodb.db("CORAL_Ecommerce").collection("RegisterUser");
    buildConnection().then(async (isConnected) => {
      if (isConnected) {
        let duplicateEntry = await dataBase.find({ email: email }).toArray();
        if (duplicateEntry.length) {
          response.status(409).send({
            message: "User already extsts, Please log in to continue.",
          });
        } else {
          mongodb
            .db("CORAL_Ecommerce")
            .collection("RegisterUser")
            .insertOne({
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: await encryptPassword(password),
              confirmPassword: await encryptPassword(confirmPassword),
            });
          response.status(201).send({ message: "User created successfully" });
        }
      }
    });
  }
});

export default registerUser;

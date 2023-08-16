import * as dotenv from "dotenv";
import { buildConnection } from "../connectionDB.js";
import { MongoClient, ServerApiVersion } from "mongodb";
import encryptPassword from "./Validations-Hashing/validations-hashing.js";

dotenv.config();

const connectionUrl = process.env.CONNECTIONSTRING;

const mongodb = new MongoClient(connectionUrl, {
  serverApi: ServerApiVersion.v1,
});
export default function registerUser(
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) {
  console.log(firstName, lastName, email, password, confirmPassword);
  buildConnection().then(async (isConnected) => {
    if (isConnected) {
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
    }
  });
}

import * as dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
dotenv.config();
const connectionUrl = process.env.CONNECTIONSTRING;

const mongodb = new MongoClient(connectionUrl, {
  serverApi: ServerApiVersion.v1,
});

export async function buildConnection() {
  let isConnected = false;
  try {
    let dbConnect = await mongodb.connect();
    if (dbConnect) isConnected = true;
    console.log("Connection 👍");
  } catch (error) {
    if (error) return isConnected;
  }
  return isConnected;
}

export async function registerUserData(payload) {
  try {
     await mongodb
      .db("Ecommerce")
      .collection("register_users")
      .insertOne(payload);  
  } catch (error) {
    console.log(error);
  }
}


export function findExistingUser(query)
{
  return  mongodb.db('Ecommerce').collection("register_users").find(query).toArray();
}

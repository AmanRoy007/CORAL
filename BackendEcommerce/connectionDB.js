import * as dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
import productData from "./allProducts.js";
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



// (async function  insertProductData() {

//   try {
//     await mongodb
//       .db("CORAL_Ecommerce")
//       .collection("Products")
//       .insertMany(productData);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// export async function registerUserData(payload) {
//   try {
//      await mongodb
//       .db("Ecommerce")
//       .collection("register_users")
//       .insertOne(payload);
//   } catch (error) {
//     console.log(error);
//   }
// }

export function readQuery(dbName,collectionName,query)
{
  return  mongodb.db(dbName).collection(collectionName).find(query).toArray();
}

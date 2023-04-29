import * as dotenv from 'dotenv';
import {MongoClient, ServerApiVersion} from 'mongodb';
dotenv.config();
const connectionUrl = process.env.CONNECTIONSTRING;

const mongodb = new MongoClient(connectionUrl,{
    serverApi:ServerApiVersion.v1
});
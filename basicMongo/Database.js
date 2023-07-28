const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const mydb = "Ecommerce";

const dbConnection = async () => {
  try {
    client.connect();
    console.log("the server is connnected successfully");
    const db = client.db(mydb);
    return db;
  } catch (error) {
    console.error("conbt connect");
    throw error;
  }
};

module.exports = { dbConnection };

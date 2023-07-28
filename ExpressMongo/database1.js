const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const dbName = "Ecommerce";

const client = new MongoClient(url);

const connectDB = async () => {
  try {
    await client.connect();
    console.log(`connected successfully to database`);
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.error(`cant connect`);
    throw error;
  }
};

module.exports = { connectDB };

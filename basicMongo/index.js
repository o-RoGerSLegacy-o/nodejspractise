/* const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "Ecommerce";

async function main() {
  await client.connect();
  console.log(`Server Connected Successfull`);
  /* onst db = client.db(dbName);
  const collectionUser = db.collection("users");
  const findResult = await collectionUser.find().toArray();
  console.log(findResult);
} 

main();
 */

const { dbConnection } = require("./Database");

async function main() {
  try {
    const db = await dbConnection();
    const collectionUser = db.collection("users");
    const collectionData = await collectionUser.find().toArray();
    console.log(collectionData);
  } catch (error) {
    console.error("failed to fetch the data");
    throw error;
  }
}

main();

const express = require("express");
const { connectDB } = require("./database1");
const app = express();
//reaD
/* 
app.get("/", async (req, res) => {
  try {
    const db = await connectDB();
    const collectionUsers = db.collection("users");
    const users = await collectionUsers.find().toArray();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});
 */
//post-insert(create)

app.use(express.json());

app.post("/users" /*endpoint*/, async (req, res) => {
  try {
    console.log(req.body);
    const db = await connectDB();
    const collectionUsers = db.collection("mongoPractise");
    // const data = { name: "brother" };
    const insertedData = collectionUsers.insertOne(req.body);
    res.json(`updated`);
    console.log("updated");
  } catch (error) {
    console.log(error);
    res.status(500, "i dont know waht happen bro");
  }
});

app.listen(3000);

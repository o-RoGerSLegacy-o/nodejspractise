const { dbConnection } = require("./Database");

const insertingData = async () => {
  try {
    const db = await dbConnection();
    const collectiondb = await db.collection("mongoPractise");
    const data = [
      { name: "rias senpai", age: 15 },
      { name: "roger senpai", age: 16 },

      { name: "kratos senpai", age: 17 },
      { name: "luffy senpai", age: 18 },
    ];

    const insertedData = await collectiondb.insertMany(data);
    console.log(insertedData.insertedCount);
  } catch (error) {
    console.error(`cant insert the file`);
    throw error;
  }
};

insertingData();

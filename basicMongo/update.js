const { dbConnection } = require("./Database");

const updateData = async () => {
  const db = await dbConnection();
  const collectionUser = await db.collection("mongoPractise");
  console.log(collectionUser.count);
  try {
    const db = await dbConnection();
    const collectionUser = db.collection("mongoPractise");

    const updatedData = await collectionUser.updateMany(
      { name: "remorse" },
      {
        $set: { name: "roger gay" },
      }
    );
    console.log(updatedData.modifiedCount);
  } catch (error) {
    console.error("cant show");
    throw error;
  }
};

updateData();

const { dbConnection } = require("./Database");

const deletingData = async () => {
  try {
    const db = await dbConnection();
    const collectionUser = db.collection("mongoPractise");
    const deletedData = collectionUser.deleteMany({ name: "roger gay" });
    console.log((await deletedData).deletedCount);
  } catch (error) {
    console.error("cant delete");
    throw error;
  }
};

deletingData();

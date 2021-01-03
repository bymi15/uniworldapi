const mongoClient = require("mongodb").MongoClient;

let db = null;
const loadDatabase = async () => {
  if (db) return db;
  const client = await mongoClient.connect(
    `mongodb://${process.env.DB_USER}.mongo.cosmos.azure.com:${process.env.DB_PORT}/?ssl=true`,
    {
      auth: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      },
    }
  );
  db = client.db("uniworlddb");
  return db;
};

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  //   const name = req.query.name || (req.body && req.body.name);

  try {
    const db = await loadDatabase();
    let eventRooms = await db.collection("EventRooms").find().toArray();
    context.res = {
      body: { eventRooms },
    };
  } catch (err) {
    context.log(`Error code: ${err.code}, message: ${err.message}`);
    context.res = {
      status: 500,
      body: { message: "An error has occured. Please try again." },
    };
  }
};

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

module.exports = { loadDatabase };

const mongoose = require("mongoose");

let db = null;
const loadDatabase = async () => {
  if (db) return;
  await mongoose.connect(
    `mongodb://${process.env.DB_USER}.mongo.cosmos.azure.com:${process.env.DB_PORT}/${process.env.DB_NAME}?ssl=true&retrywrites=false`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      auth: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      },
    }
  );
  db = mongoose.connection;
};

module.exports = { loadDatabase };

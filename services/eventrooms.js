const { loadDatabase } = require("./database");

const getEventRooms = async () => {
  const db = await loadDatabase();
  return await db.collection("EventRooms").find().toArray();
};

const createEventRoom = async (eventRoom) => {
  const db = await loadDatabase();
  await db.collection("EventRooms").insertOne(eventRoom);
};

const deleteEventRoom = async (id) => {
  const db = await loadDatabase();
  await db.collection("EventRooms").deleteOne({ _id: id });
};

module.exports = { getEventRooms, createEventRoom, deleteEventRoom };

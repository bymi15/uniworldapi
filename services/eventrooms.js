const { loadDatabase } = require("./database");
const EventRoom = require("../models/eventroom");

const getEventRooms = async () => {
  await loadDatabase();
  return await EventRoom.find({}, "title eventDate host");
};

const getEventRoomById = async (id) => {
  await loadDatabase();
  return await EventRoom.findOne({ _id: id });
};

const createEventRoom = async (eventRoom) => {
  await loadDatabase();
  await new EventRoom({ ...eventRoom }).save();
};

const deleteEventRoom = async (id) => {
  await loadDatabase();
  await EventRoom.remove({ _id: id });
};

module.exports = { getEventRooms, getEventRoomById, createEventRoom, deleteEventRoom };

const mongoose = require("mongoose");

const eventRoomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    default: Date.now,
  },
  meetingTables: [
    {
      title: String,
      type: String,
      logoUrl: String,
      zoomUrl: String,
      posX: Number,
      posY: Number,
    },
  ],
  host: {
    type: String,
    required: true,
  },
  background: String,
  scene: {
    type: String,
    default: "Default",
  },
});

module.exports = mongoose.model("EventRoom", eventRoomSchema);

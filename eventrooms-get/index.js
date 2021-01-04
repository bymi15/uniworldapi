const { getEventRooms } = require("../services/eventrooms");

module.exports = async function (context, req) {
  try {
    const eventRooms = await getEventRooms();
    context.res = {
      body: eventRooms,
    };
  } catch (err) {
    context.log(`Error code: ${err.code}, message: ${err.message}`);
    context.res = {
      status: 500,
      body: { message: "An error has occured. Please try again." },
    };
  }
};

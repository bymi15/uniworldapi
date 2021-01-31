const { updateEventRoom } = require("../utils/eventrooms");

module.exports = async function (context, req) {
  try {
    const eventRoom = await updateEventRoom(req.params.id, req.body);
    context.res = {
      body: eventRoom,
    };
  } catch (err) {
    context.log(`Error code: ${err.code}, message: ${err.message}`);
    context.res = {
      status: 500,
      body: { message: "An error has occured. Please try again." },
    };
  }
};

const { createEventRoom } = require("../services/eventrooms");

module.exports = async function (context, req) {
  const eventRoom = req.body;
  try {
    await createEventRoom(eventRoom);
    context.res = {
      status: 201, // created
    };
  } catch (err) {
    context.log(`Error code: ${err.code}, message: ${err.message}`);
    context.res = {
      status: 500,
      body: { message: "An error has occured. Please try again." },
    };
  }
};

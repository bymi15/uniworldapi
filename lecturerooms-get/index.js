const { getLectureRooms } = require("../utils/lecturerooms");

module.exports = async function (context, req) {
  try {
    const lectureRooms = await getLectureRooms();
    context.res = {
      body: lectureRooms,
    };
  } catch (err) {
    context.log(`Error code: ${err.code}, message: ${err.message}`);
    context.res = {
      status: 500,
      body: { message: "An error has occured. Please try again." },
    };
  }
};

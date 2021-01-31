const { getFirstSlides } = require("../utils/blobstorage");

module.exports = async function (context, req) {
  const slides = await getFirstSlides();
  context.res = {
    body: { slides: slides || [] },
  };
};

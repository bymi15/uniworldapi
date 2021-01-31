const { parseReqData, uploadBlob } = require("../utils/blobstorage");

module.exports = async function (context, req) {
  const parsedData = parseReqData(req);
  let firstUrl;
  for (let i = 0; i < parsedData.length; i++) {
    const url = await uploadBlob(parsedData[i].filename, parsedData[i].data, req.params.container);
    if (i === 0) firstUrl = url;
  }
  context.res = {
    body: firstUrl ? { url: firstUrl } : { message: "An error has occured. Please try again." },
  };
};

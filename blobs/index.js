const { parseReqData, uploadBlob } = require("../utils/blobstorage");

module.exports = async function (context, req) {
  const parsedData = parseReqData(req);
  const blobUrl = await uploadBlob(parsedData.filename, parsedData.data, req.params.container);

  context.res = {
    body: { url: blobUrl } || { message: "An error has occured. Please try again." },
  };
};

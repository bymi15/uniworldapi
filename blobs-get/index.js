const { getBlobs } = require("../utils/blobstorage");

module.exports = async function (context, req) {
  const blobs = await getBlobs(req.params.container);
  context.res = {
    body: { blobs: blobs || [] },
  };
};

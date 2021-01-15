const { v1: uuidv1 } = require("uuid");
const { BlobServiceClient } = require("@azure/storage-blob");
const multipart = require("parse-multipart");

const parseReqData = (req) => {
  const bodyBuffer = Buffer.from(req.body);
  const boundary = multipart.getBoundary(req.headers["content-type"]);
  const parts = multipart.Parse(bodyBuffer, boundary);
  return parts[0];
};

const uploadBlob = async (filename, data, container) => {
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.BLOBSTORAGE_CONNECTION_STRING
  );
  const containerClient = blobServiceClient.getContainerClient(container);
  await containerClient.createIfNotExists({ access: "container" });
  const blobName = uuidv1() + "_" + filename;
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  try {
    await blockBlobClient.upload(data, data.length);
    return `${process.env.BLOBSTORAGE_BASE_URL}/${container}/${blobName}`;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getBlobs = async (container) => {
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.BLOBSTORAGE_CONNECTION_STRING
  );
  const containerClient = blobServiceClient.getContainerClient(container);
  try {
    const blobs = [];
    for await (const blob of containerClient.listBlobsFlat()) {
      blobs.push(`${process.env.BLOBSTORAGE_BASE_URL}/${container}/${blob.name}`);
    }
    return blobs;
  } catch (err) {
    console.log(err);
    return null;
  }
};
module.exports = { parseReqData, uploadBlob, getBlobs };

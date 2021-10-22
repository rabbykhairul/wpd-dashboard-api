const fs = require("fs");
const path = require("path");

const saveUploadedFile = async (file, folder = "/temp/") => {
  console.log("\n---");
  console.log("file: ", file);
  console.log("---\n");

  return new Promise(async (resolve, reject) => {
    const appRoot = require('app-root-path');

    let ext = ".jpg";
    ext = file.name.slice(file.name.lastIndexOf("."));

    const filenamenew = file.name + '_' + Date.now() + ext;
    const uploadPath = path.join(appRoot.path, folder + filenamenew);
    file.mv(uploadPath, (err) => {
      if (err) resolve(null);

      resolve(uploadPath);
    });
  }
)};

const getBase64String = (filePath, mimeType = "image/jpg") => {
  console.log("\n---");
  console.log("filePath: ", filePath);
  console.log("---\n");

  try {
    const base64String = fs.readFileSync(filePath, { encoding: "base64" });
    return `data:${mimeType};base64,${base64String}`;
  } catch (err) {
    return null;
  }
};

module.exports = { saveUploadedFile, getBase64String };
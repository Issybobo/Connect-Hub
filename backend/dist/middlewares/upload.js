"use strict";

var multer = require("multer");
var path = require("path");
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function filename(req, file, cb) {
    var ext = path.extname(file.originalname);
    cb(null, "".concat(file.fieldname, "-").concat(Date.now()).concat(ext));
  }
});
var upload = multer({
  storage: storage
});
module.exports = {
  upload: upload
};
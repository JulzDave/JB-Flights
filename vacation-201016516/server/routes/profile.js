var express = require('express');
var router = express.Router();
var multer = require('multer');
var specificImageName;

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/');
    },
    filename: function (req, file, cb) {
      var specificImageName = file.originalname
        cb(null, specificImageName)
    }
});

var upload = multer({ storage: storage });


router.post('/', upload.single('profileImage'), function (req, res) {
  
        res.json(specificImageName);
});


module.exports = router;
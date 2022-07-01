var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  var fs = require("fs");

  fs.readdir('./', (error, files) => {
    if (error) {
      throw error;
    }

    var archivo_srt_1 = fs.readFileSync('./Audio&Text/Rick&Morty/text.txt', 'UTF-8');

    var srt1_arr = archivo_srt_1.split(/\r?\n/);
    console.log(srt1_arr[2]);
    res.render('index', { title: 'Express' , texto:srt1_arr });

  });

});

module.exports = router;

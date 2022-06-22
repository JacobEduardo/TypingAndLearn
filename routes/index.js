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

    srt1_arr = archivo_srt_1.split(/\n\s*\n/);
    var myJsonString = JSON.stringify(srt1_arr);
    console.log(myJsonString);

    res.render('index', { title: 'Express' , texto:myJsonString });

  });

});

module.exports = router;

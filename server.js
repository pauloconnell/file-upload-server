'use strict';

var express = require('express');
var cors = require('cors');
var multer=require('multer');
// require and use "multer"...
var upload=multer({dest:'uploads/'});  // as per documentation

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse', upload.single("upfile"), function(req, res){
  let {originalname, size}=req.file;
  console.log(req.file);
  res.json({originalname, size});
})
app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
var express = require('express');
var app = express();
var path  = require('path');
app.use("/lib", express.static(__dirname + "/node_modules"));
app.use("/scripts", express.static(__dirname + "/scripts"));
app.use("/templates", express.static(__dirname + "/scripts/template"));
app.get('/',function (req,res){
   res.sendfile(path.join(__dirname+'/index.html'));

});

app.listen(8080);
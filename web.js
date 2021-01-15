var PORT = process.env.PORT || 3000;
var express = require("express");
var app = express();

app.get("/", function(req,res){
	res.send("Hello world");
});
app.listen(PORT);






//	res.sendFile(path.join(_dirname+'/index.html'));

//var path = require('path');
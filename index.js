 var express= require("express");

var app = express();

app.get('/',function (req,res){
	res.send("hola");
	console.log('New request!');
});


app.listen(5000);

var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));
app.set("view engine","ejs");


app.get("/",function(req, res) {
    res.render("front")
})
 
app.get("/result",function(req,res){
    var url = "https://gist.githubusercontent.com/yannski/3019778/raw/dfb34d018165f47b61b3bf089358a3d5ca199d96/movies.json";
    request(url,function(error,response,body)
    {
         if(!error && response.statusCode == 200)
        {
             var data = JSON.parse(body)
             res.render("results", {data : data}); 
        }
    })
})



app.listen(process.env.PORT,process.env.IP,function(req,res){
    console.log("Movie app hS STARTED");
});
const express = require("express");
var faker = require('faker');
const app = express();
app.engine("html", require("ejs").renderFile);
app.use(express.static("public")); // to access images css/js/images/or any external file

//routes
app.get("/", function(req, res){
    console.log("In root route");
    res.render("index.ejs");
});

app.get("/about", function(req, res){
    console.log("In about route");
    res.render("about.ejs");
});

app.get("/future", function(req, res){
    console.log("In future route");
    res.render("future.ejs");
});

app.get("/myths", function(req, res){
    console.log("In myths route");
    res.render("myths.ejs");
});

app.get("/contact", function(req, res){
    console.log("In contact route");
    res.render("contact.ejs", {faker: faker});
});

app.listen(process.env.PORT, process.env.IP, function (){
    console.log("Express server is running...");
});

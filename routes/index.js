const { resolveSoa } = require("dns");
var express = require("express");
var app = express();

app.get("/",(req,res)=>{
    //Lógica para obtener el nombre del usuario
    var user = "Pedro";

    res.render('pages/home',{title: 'Home',usuario: user})
    //res.send("Bienvenido a Home")
})

module.exports = app;
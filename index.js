
var express = require("express");
var serv = express();

serv.get("/sobre", function(req, res){
    res.send("Aqui Voce encontra informa;'ao sobre o serv")
});

serv.get("/blog", function(req, res){
    res.send("BEM-VINDOS")
});

serv.get("/", function(req, res){
    res.send("TMJ")
});


serv.listen(8090,function(){
    console.log("servidor rodando")
});



var expressjs = require("express");

var aplicacao = expressjs();

aplicacao.get("/", hello);
aplicacao.get("/hora", retornaHora);

function retornaHora(req, res){
    res.send("A hora exata é: "+ new Date().getHours());
}

function hello(req, res){
    res.send("Ola tudo bem?");
}

aplicacao.listen(8989);
console.log("Tathi é linda...")
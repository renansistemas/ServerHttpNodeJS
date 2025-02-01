//variaveis transformadas em constantes
const express = require('express');
const app = express();

//para acessar no navegador devo usar: localhost:8081
//app.listen(8081);

//a rota é um caminho para acessar a sua aplicação
app.get("/", (req, res) => {
    res.send("Seja bem-vindo ao meu app!");
});

app.get("/sobre", (req, res) => {
    res.send("Minha página sobre");
});

app.get("/blog", (req, res) => {
    res.send("Bem-vindo ao meu blog!");
});

//essa funcao tem que ser a última funcao a ser executada
//quando chamamos listen um evento é disparado
app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081 - URL http://localhost:8081');
});
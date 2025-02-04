//variaveis transformadas em constantes
const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const Sequelize = require('sequelize');

// Configuração do handlebars
    // Template Engine
        app.engine('handlebars', engine({ defaultLayout: 'main' }));
        app.set('view engine', 'handlebars');
        app.set('views', './views');
    // Conexão com o banco de dados MySQL
        const sequelize = new Sequelize('test', 'root', 'Wh13juc$', {
            host: "localhost",
            dialect: 'mysql'
        });

// Rotas
    app.get('/cad', function(req, res) {
        res.render('formulario');
    });

//essa funcao tem que ser a última funcao a ser executada
//quando chamamos listen um evento é disparado
app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081 - URL http://localhost:8081');
});



// //para acessar no navegador devo usar: localhost:8081
// //app.listen(8081);

// //a rota é um caminho para acessar a sua aplicação
// app.get("/", (req, res) => {
//     //res.send("Hello! Seja bem-vindo ao meu app!");
//     res.sendFile(__dirname + "/html/index.html");
// });

// app.get("/sobre", (req, res) => {
//     //res.send("Minha página sobre");
//     res.sendFile(__dirname + "/html/sobre.html");
// });

// app.get("/blog", (req, res) => {
//     res.send("Bem-vindo ao meu blog!");
// });

// app.get("/ola/:cargo/:nome/:cor", (req, res) => {
//     //dentro de uma rota é possível enviar o send apenas uma vez
//     res.send("<h1>Ola " + req.params.nome + "</h1>" 
//         + "<h2>Seu cargo é " + req.params.cargo + "</h2>" 
//         + "<h3>Sua cor favorita é " + req.params.cor + "</h3>");
// });
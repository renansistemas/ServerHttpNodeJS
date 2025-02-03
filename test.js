const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'Wh13juc$', {
    host: "localhost",
    dialect: 'mysql'
});

//then e catch fazem parte do tema de programação assíncrona
sequelize.authenticate().then(function() {
    console.log("Autenticado com sucesso!");
}).catch(function(err) {
    console.log(err);
});

// Model de Postagem
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING //STRING é o tipo de dado com limitação de caracteres
    },
    conteudo: {
        type: Sequelize.TEXT //TEXT é o tipo de dado sem limitação de caracteres
    }
});

//Postagem.sync({force: true});

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    }
});

//Usuario.sync({force: true});

// Postagem.create({
//     titulo: "Aprendendo Node",
//     conteudo: "Hoje começamos o aprendizado de Node"
// });

// Usuario.create({
//     nome: "Renan",
//     sobrenome: "Freitas",
//     email: "renansistemas@hotmail.com",
//     idade: 34
// });
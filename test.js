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
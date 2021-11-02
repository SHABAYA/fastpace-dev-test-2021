const Sequelize = require("sequelize");
const sequelize = new Sequelize("716UnZH5Pz", '716UnZH5Pz', '7pOCBs2xse', { 
    host: 'remotemysql.com',
    dialect: "mysql", 
    });

module.exports = sequelize;
global.sequelize = sequelize;
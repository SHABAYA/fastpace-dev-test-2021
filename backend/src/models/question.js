
const Sequelize = require("sequelize");
const sequelize = require("../database/connection");


module.exports = sequelize.define("question", {
    id:{
        type: Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true,
    },
    qIndex: {
        type: Sequelize.INTEGER(100),
        autoIncrement: true,
        
    },
    text: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    typeOfQuestion:{
        type: Sequelize.STRING(20),
    }
});
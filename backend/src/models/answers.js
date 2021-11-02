const Sequelize = require("sequelize");
const sequelize = require("../database/connection");


module.exports = sequelize.define("answers", {
    id:{
        type: Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true,
    },
    isCorrect: {
        type: Sequelize.STRING(100),
        
    },
    text: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    questionId:{
        type: Sequelize.STRING(20),
    }
});
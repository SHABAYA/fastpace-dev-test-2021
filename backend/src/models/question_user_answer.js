const Sequelize = require("sequelize");
const sequelize = require("../database/connection");


module.exports = sequelize.define("question_user_answer", {
    questionId:{
        type: Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true,
    },
    userId: {
        type: Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true,
    },
    answerId: {
        type: Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true,
        
    }
});
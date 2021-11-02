const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

module.exports = sequelize.define("user", {
    id:{
        type: Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique:true
    },
    password: {
        type: Sequelize.STRING(150),
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    firstName: {
        type: Sequelize.STRING(150),
        allowNull: false,
    },
    mobileNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
    },
    role: {
        type: Sequelize.STRING(20),
        allowNull: false,
    },
    loginStatus: {
        type: Sequelize.BOOLEAN,
    }
});
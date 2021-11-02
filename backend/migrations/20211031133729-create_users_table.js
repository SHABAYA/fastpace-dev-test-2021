'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
        id:{
          type: Sequelize.STRING(20),
          allowNull: false,
          primaryKey: true,
      },
      lastName: {
          type: Sequelize.STRING(100),
          allowNull: false,
          createdAt: Sequelize.DATE,
          updatedAt: Sequelize.DATE,
      },
      firstName: {
          type: Sequelize.STRING(150),
          allowNull: false,
      },
      mobileNumber: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
      },
      email: {
          type: Sequelize.STRING(50),
          allowNull: false,
          unique: true,
      },
      role: {
          type: Sequelize.STRING(20),
          allowNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable("users");
  }
};

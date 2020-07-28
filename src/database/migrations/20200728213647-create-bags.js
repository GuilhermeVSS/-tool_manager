'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.createTable('bags', {
        id:{
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        id_user:{
          type: Sequelize.INTEGER,
          references: {model: 'users', key:'id'},
          allowNull: false
        },
        id_tool:{
          type: Sequelize.INTEGER,
          references: {model: 'tools', key:'id'},
          allowNull: false
        },
        quantity:{
          type:Sequelize.INTEGER,
          allowNull: false
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false
        }
        });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};

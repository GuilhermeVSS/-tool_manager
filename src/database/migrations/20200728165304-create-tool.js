'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.createTable('tools', {
         id: { 
           type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false
         },
         name: {
            type:Sequelize.STRING,
            allowNull:false,
            unique: true
         },  
         specifications: {
           type: Sequelize.TEXT,
           allowNull: true
         },
         available: {
           type: Sequelize.BOOLEAN,
           allowNull: true
         },
         quantity : {
           type: Sequelize.INTEGER,
           allowNull:false
         },
         created_at : {
            type: Sequelize.DATE,
            allowNull:false
         },
         updated_at : {
           type: Sequelize.DATE,
           allowNull:false
         }
        });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Cars', // name of Source model
      'DriverId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Drivers', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Cars', // name of Source model
      'DriverId', // key we want to remove
    );
  }
};
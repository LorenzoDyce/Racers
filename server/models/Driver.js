'use strict';
module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define('Driver', {
    name: DataTypes.STRING,
    nationality: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {});
  Driver.associate = function(models) {
    // associations can be defined here
    Driver.hasOne(models.Car);
  };
  return Driver;
};
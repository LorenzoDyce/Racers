'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    transmission: DataTypes.STRING,
    year: DataTypes.INTEGER,
    color: DataTypes.STRING
  }, {});
  Car.associate = function(models) {
    // associations can be defined here
    Car.belongsTo(models.Driver);
  };
  return Car;
};
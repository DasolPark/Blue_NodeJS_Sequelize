const { Sequelize } = require('sequelize');

module.exports = new Sequelize('test', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
})
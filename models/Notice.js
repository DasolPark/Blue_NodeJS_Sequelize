const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Notice = sequelize.define('Notice', {
  title: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.STRING
  }
})

module.exports = Notice;
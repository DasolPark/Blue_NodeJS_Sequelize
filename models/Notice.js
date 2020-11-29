const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');

const Notice = sequelize.define('Notice', {
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  }
})

module.exports = Notice;
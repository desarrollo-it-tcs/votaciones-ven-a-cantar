const { Sequelize } = require('sequelize');
const { database } = require('./general');

const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password, {
    host: database.host,
    dialect: 'mysql',
});

module.exports = sequelize
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const banner = sequelize.define('banner',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        main: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        timestamps: false,
        paranoid: true,
    });

module.exports = banner;
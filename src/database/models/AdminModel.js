const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const admin = sequelize.define('admin',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        }
    },
    {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        timestamps: false,
        paranoid: true,
    });

module.exports = admin;
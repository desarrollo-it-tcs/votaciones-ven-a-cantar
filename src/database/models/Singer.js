const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Campaign = sequelize.define(
    "Singer",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        imgUrl: {
            type: DataTypes.STRING
        },
        slug: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true
        },
        info: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            get: function () {
                return this.getDataValue('createdAt')
                    .toLocaleString('es-SV', {
                        timeZone: 'America/El_Salvador'
                    });
            }
        },
        updatedAt: {
            type: DataTypes.DATE,
            get: function () {
                return this.getDataValue('updatedAt')
                    .toLocaleString('es-SV', {
                        timeZone: 'America/El_Salvador'
                    });
            }
        }
    },
    {
        timestamps: true,
    });

module.exports = Campaign;
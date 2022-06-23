const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Campaign = sequelize.define(
    "Campaign",
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
        startDate: {
            type: DataTypes.DATE,
            get: function () {
                return this.getDataValue('startDate')
                    .toLocaleString('es-SV', {
                        timeZone: 'America/El_Salvador'
                    });
            },
            allowNull: true
        },
        endDate: {
            type: DataTypes.DATE,
            get: function () {
                return this.getDataValue('endDate')
                    .toLocaleString('es-SV', {
                        timeZone: 'America/El_Salvador'
                    });
            }
        },
        slug: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
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
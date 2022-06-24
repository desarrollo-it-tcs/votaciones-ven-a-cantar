const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

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
            unique: true,
            allowNull: false,
        },
        startDate: {
            type: DataTypes.DATE,
            get: function () {
                return this.getDataValue('startDate')
                    .toLocaleString('es-SV', {
                        timeZone: 'America/El_Salvador'
                    });
            },
        },
        endDate: {
            type: DataTypes.DATE,
            get: function () {
                return this.getDataValue('endDate')
                    .toLocaleString('es-SV', {
                        timeZone: 'America/El_Salvador'
                    });
            },
            allowNull: false,
        },
        slug: {
            type: DataTypes.STRING,
            unique: true,
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
            },
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            get: function () {
                return this.getDataValue('updatedAt')
                    .toLocaleString('es-SV', {
                        timeZone: 'America/El_Salvador'
                    });
            },
            allowNull: false,
        }
    },
    {
        timestamps: true,
    });

module.exports = Campaign;
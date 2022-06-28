const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Vote = sequelize.define('vote',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dui: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
            get: function () {
                return this.getDataValue('createdAt') ?
                    this.getDataValue('createdAt')
                        .toLocaleString('es-SV', {
                            timeZone: 'America/El_Salvador'
                        }) : null;
            },
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            get: function () {
                return this.getDataValue('updatedAt') ?
                    this.getDataValue('updatedAt')
                        .toLocaleString('es-SV', {
                            timeZone: 'America/El_Salvador'
                        }) : null;
            },
            allowNull: false,
        },
    },
    {
        timestamps: true,
    });

module.exports = Vote;
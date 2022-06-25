const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

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
            unique: true,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        slug: {
            type: DataTypes.STRING,
            unique: true,
        },
        info: {
            type: DataTypes.STRING,
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
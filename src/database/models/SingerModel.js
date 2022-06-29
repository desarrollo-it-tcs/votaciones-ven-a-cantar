const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');


const Singer = sequelize.define(
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
            unique: true,
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
        paranoid: true,
    });

module.exports = Singer;
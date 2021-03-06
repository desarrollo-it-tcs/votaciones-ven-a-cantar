const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Campaign = sequelize.define("campaign",
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
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        slug: {
            type: DataTypes.STRING,
            unique: true,
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        timestamps: true,
        paranoid: true,
    });

module.exports = Campaign;
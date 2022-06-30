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
            // get: function () {
            //     return this.getDataValue('startDate') ?
            //         this.getDataValue('startDate')
            //             .toLocaleString('es-SV', {
            //                 timeZone: 'America/El_Salvador'
            //             }) : null;
            // },
        },
        endDate: {
            type: DataTypes.DATE,
            // get: function () {
            //     return this.getDataValue('endDate') ?
            //         this.getDataValue('endDate')
            //             .toLocaleString('es-SV', {
            //                 timeZone: 'America/El_Salvador'
            //             }) : null;
            // },
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
            // get: function () {
            //     return this.getDataValue('createdAt') ?
            //         this.getDataValue('createdAt')
            //             .toLocaleString('es-SV', {
            //                 timeZone: 'America/El_Salvador'
            //             }) : null;
            // },
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            // get: function () {
            //     return this.getDataValue('updatedAt') ?
            //         this.getDataValue('updatedAt')
            //             .toLocaleString('es-SV', {
            //                 timeZone: 'America/El_Salvador'
            //             }) : null;
            // },
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
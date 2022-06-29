const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
// const Campaign = require('../../database/models/CampaignModel');
// const Singer = require('../../database/models/SingerModel');

const CampaignSinger = sequelize.define('Campaign_Singer',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        // CampaignId: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: Campaign,
        //         key: 'id',
        //     }
        // },
        // SingerId: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: Singer,
        //         key: 'id',
        //     }
        // },
        // createdAt: {
        //     type: DataTypes.DATE,
        //     get: function () {
        //         return this.getDataValue('createdAt') ?
        //             this.getDataValue('createdAt')
        //                 .toLocaleString('es-SV', {
        //                     timeZone: 'America/El_Salvador'
        //                 }) : null;
        //     },
        //     allowNull: false,
        // },
        // updatedAt: {
        //     type: DataTypes.DATE,
        //     get: function () {
        //         return this.getDataValue('updatedAt') ?
        //             this.getDataValue('updatedAt')
        //                 .toLocaleString('es-SV', {
        //                     timeZone: 'America/El_Salvador'
        //                 }) : null;
        //     },
        //     allowNull: false,
        // },

    }, {
    timestamps: true,
    paranoid: true,
});

module.exports = CampaignSinger;
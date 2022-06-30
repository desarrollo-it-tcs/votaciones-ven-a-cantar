const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const CampaignSinger = sequelize.define('Campaign_Singer',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
    },
    {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        timestamps: true,
        paranoid: true,
    });

module.exports = CampaignSinger;
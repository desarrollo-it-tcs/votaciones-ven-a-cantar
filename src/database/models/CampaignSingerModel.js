const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const CampaignSinger = sequelize.define('campaign_singer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    }
});

module.exports = CampaignSinger;
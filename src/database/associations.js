const Campaign = require('./models/campaignModel');
const Singer = require('./models/singerModel');
const CampaignSinger = require('./models/campaignSingerModel');
const Vote = require('./models/voteModel');

//one to many relationship between campaignSinger and vote
CampaignSinger.hasMany(Vote);
Vote.belongsTo(CampaignSinger);

//many to many relationship between campaign and singer
Campaign.belongsToMany(Singer, { through: CampaignSinger });
Singer.belongsToMany(Campaign, { through: CampaignSinger });
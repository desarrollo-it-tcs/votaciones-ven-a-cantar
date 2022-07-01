const Campaign = require('./models/CampaignModel');
const Singer = require('./models/SingerModel');
const Campaign_Singer = require('./models/CampaignSingerModel');
const Vote = require('./models/VoteModel');
require('./models/AdminModel')
require('./models/BannerModel')

//one to many relationship between campaignSinger and vote
Campaign_Singer.hasMany(Vote);
Vote.belongsTo(Campaign_Singer);

//many to many relationship between campaign and singer
Campaign.belongsToMany(Singer, { through: Campaign_Singer });
Singer.belongsToMany(Campaign, { through: Campaign_Singer });
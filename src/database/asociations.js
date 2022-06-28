const Campaingn = require('./models/campaignModel');
const Singer = require('./models/singerModel');
const CampaignSinger = require('./models/campaignSingerModel');
const Vote = require('./models/voteModel');

//many to many relationship between campaign and singer
Campaingn.belongsToMany(Singer, {
    through: CampaignSinger,
});
Singer.belongsToMany(Campaingn, {
    through: CampaignSinger,
});

//one to many relationship between campaignSinger and vote
CampaignSinger.hasMany(Vote);
Vote.belongsTo(CampaignSinger);
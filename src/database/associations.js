const Campaign = require('./models/campaignModel');
const Singer = require('./models/singerModel');
const Campaign_Singer = require('./models/campaignSingerModel');
const Vote = require('./models/voteModel');

//one to many relationship between campaignSinger and vote
Campaign_Singer.hasMany(Vote);
Vote.belongsTo(Campaign_Singer);

//many to many relationship between campaign and singer
Campaign.belongsToMany(Singer, { through: Campaign_Singer });
Singer.belongsToMany(Campaign, { through: Campaign_Singer });
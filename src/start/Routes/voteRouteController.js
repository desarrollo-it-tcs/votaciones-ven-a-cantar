const Vote = require('../../database/models/VoteModel');
const Campaing_Singer = require('../../database/models/CampaignSingerModel');
const router = require('express').Router();

Campaing_Singer.hasMany(Vote);
Vote.belongsTo(Campaing_Singer);

router.post('/', async (req, res) => {
    const { campaignId, singerId, value } = req.body;
    const vote_ = await Vote.create({
        campaign_id,
        singer_id,
        vote,
    });
    res.json(vote_);

});

module.exports = router;

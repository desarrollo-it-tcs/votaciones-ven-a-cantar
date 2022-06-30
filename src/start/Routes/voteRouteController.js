const Vote = require('../../database/models/VoteModel');
const Campaing_Singer = require('../../database/models/CampaignSingerModel');
const router = require('express').Router();

Campaing_Singer.hasMany(Vote);
Vote.belongsTo(Campaing_Singer);

router.post('/', async (req, res) => {
    const { campaignId, singerId, value } = req.body;
    const votesNominated = await Campaing_Singer.findOne({
        where: {
            'campaignId': campaignId,
            'singerId': singerId
        }
    });
    const oneVote = await Vote.create({
        'value': value,
    });
    votesNominated.addVote(oneVote);
    res.json('ya');
});

module.exports = router;

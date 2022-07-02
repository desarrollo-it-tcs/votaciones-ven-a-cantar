const Vote = require('../../database/models/VoteModel');
const Campaign_Singer = require('../../database/models/CampaignSingerModel');
const Campaign = require('../../database/models/CampaignModel');
const router = require('express').Router();
const jwt_decode = require('jwt-decode');
const { DateTime } = require('luxon');

Campaign_Singer.hasMany(Vote);
Vote.belongsTo(Campaign_Singer);

-
    router.post('/', async (req, res) => {
        const tokendecode = jwt_decode(req.headers.authorization);
        const { campaignId, singerId, value } = req.body;
        if (tokendecode.email === value) {// verificamos que quien envia la solicitud sea el mismo logeado
            const today = DateTime.utc();
            const campaign = await Campaign.findByPk(campaignId);      
            const endDate = DateTime.fromJSDate(campaign.endDate).setZone('utc');
            const validateDate = endDate.diff(today);
            if (validateDate >= 0) {
                const votesNominated = await Campaign_Singer.findOne({
                    where: {
                        'campaignId': campaignId,
                    }
                });
                const allVotes = await votesNominated.getVotes()
                console.log("🚀 ~ file: voteRoutesController.js ~ line 32 ~ router.post ~ allVotes", allVotes)
                Vote.findOne({
                    where: {
                        'CampaignSingerId': votesNominated.id,
                        'value': value
                    }
                }).then(async (result) => {
                    if (!result) {
                        const oneVote = await Vote.create({
                            'value': value,
                        });
                        await votesNominated.addVote(oneVote);
                        res.json({ message: 'Voto registrado' });
                    } else {
                        res.status(500).json({ message: 'Ya has votado' });
                    }
                }).catch(err => {
                    res.status(500).json(err);
                });
            } else {
                await Campaign.update({
                    'status': false
                }, {
                    where: {
                        'id': campaignId
                    }
                });
                res.status(500).json({
                    message: 'El tiempo de votacion ha terminado'
                });
            }
        } else {
            res.status(500).json([{ message: 'impossible to make the request' }]);
        }

    });

module.exports = router;

const Vote = require('../../database/models/VoteModel');
const Campaign_Singer = require('../../database/models/CampaignSingerModel');
const Campaign = require('../../database/models/CampaignModel');
const router = require('express').Router();
const jwt_decode = require('jwt-decode');
const { DateTime } = require('luxon');

Campaign_Singer.hasMany(Vote);
Vote.belongsTo(Campaign_Singer);

router.post('/', async (req, res) => {
    const tokendecode = jwt_decode(req.headers.authorization);
    const { campaignId, singerId, value } = req.body;
    if (tokendecode.email === value) {// verificamos que quien envia la solicitud sea el mismo logeado
        const today = DateTime.utc();
        const campaign = await Campaign.findByPk(campaignId);
        const endDate = DateTime.fromJSDate(campaign.endDate).setZone('utc');
        const validateDate = endDate.diff(today);
        var isVoteValid = true;
        if (validateDate >= 0) {// verificamos que la campaña no haya finalizado
            try {
                const votesCampaign = await Campaign_Singer.findAll({
                    where: {
                        'campaignId': campaignId,
                    },
                    include: Vote
                });
                votesCampaign.forEach((votesSinger) => {
                    votesSinger.votes.forEach((vote) => {
                        if (vote.value == value) {
                            isVoteValid = false
                        }
                    });
                });
                if (isVoteValid) {// verificamos que el usuario no haya votado antes en esta campaña
                    const campaignSinger = await Campaign_Singer.findOne({
                        where: {
                            'campaignId': campaignId,
                            'singerId': singerId,
                        },
                    });
                    Vote.create({
                        'value': value,
                    }).then((vote) => {
                        campaignSinger.addVote(vote).then(() => {
                            res.status(200).json({
                                message: 'vote saved successfully',
                            });
                        })
                            .catch((err) => {
                                res.status(500).json({
                                    message: 'Error registering the vote' + err,
                                });
                            });

                    })
                        .catch((err) => {
                            res.status(500).json({
                                message: 'Error registering the vote' + err,
                            });
                        });
                } else {
                    res.status(400).json({
                        message: 'You already voted for this voting'
                    });
                }
            } catch (err) {
                res.status(500).json({
                    message: 'Error registering the vote' + err,
                });
            }

        } else {
            await Campaign.update({
                'status': false
            }, {
                where: {
                    'id': campaignId
                }
            });
            res.status(500).json({
                message: 'Voting time is over'
            });
        }
    } else {
        res.status(500).json({ message: 'impossible to make the request' });
    }

});

module.exports = router;

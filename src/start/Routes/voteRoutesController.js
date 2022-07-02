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
            const votoValid = false;
            if (validateDate >= 0) {
                const votesCampaign = await Campaign_Singer.findAll({
                    where: {
                        'campaignId': campaignId,
                    },
                    include: Vote
                });
                console.log(votesCampaign)
                // votesCampaign.forEach(async (campaignSinger) => {
                //     Vote.findOne({
                //         where: {
                //             'CampaignSingerId': campaignSinger.id,
                //             'value': value
                //         }
                //     }).then(async (result) => {
                //         result ? votoValid = false : votoValid = true;

                //     }).catch(async (err) => {
                //         res.status(500).json({ message: 'Error al registrar el voto ' + err });
                //     });
                // });
                // console.log(votesCampaign);

                // Vote.findOne({
                //     where: {
                //         'CampaignSingerId': votesNominated.id,
                //         'value': value
                //     }
                // }).then(async (result) => {
                //     if (!result) {
                //         const voteNominated = await Campaign_Singer.findAll({
                //             where: {
                //                 'campaignId': campaignId,
                //                 'singerId': singerId
                //             }
                //         });
                //         const oneVote = await Vote.create({
                //             'value': value,
                //         });
                //         await voteNominated.addVote(oneVote);
                //         res.json({ message: 'Voto registrado' });
                //     } else {
                //         res.status(500).json({ message: 'Ya has votado' });
                //     }
                // }).catch(err => {
                //     res.status(500).json({ message: 'Error al registrar el voto ' + err });
                // });
                res.json(votesCampaign);
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
            res.status(500).json({ message: 'impossible to make the request' });
        }

    });

module.exports = router;

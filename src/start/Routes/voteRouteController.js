const Vote = require('../../database/models/VoteModel');
const Campaing_Singer = require('../../database/models/CampaignSingerModel');
const Campaign = require('../../database/models/CampaignModel');
const router = require('express').Router();
const jwt_decode = require('jwt-decode');
const { DateTime } = require('luxon');

Campaing_Singer.hasMany(Vote);
Vote.belongsTo(Campaing_Singer);
-
router.post('/', async (req, res) => {
    const tokendecode = jwt_decode(req.headers.authorization);
    const { campaignId, singerId, value } = req.body;
    if(tokendecode.email === value){// verificamos que quien envia la solicitud sea el mismo logeado
        const today = DateTime.utc();
        const campaign = await Campaign.findByPk(campaignId);
        const endDate = campaign.endDate;
        console.log('endDate:       '+endDate.toString());
        console.log('today:         '+today.toString());
        console.log('endDate:       '+endDate);
        console.log('today:         '+today);
        const validateDate = endDate.diff(today);
        console.log('validateDate:  '+validateDate);
        if (validateDate >= 0){
            console.log('La campaña sigue en el aire');
        } else {
            console.log('La campaña ya termino');
        }
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
    } else {
        res.status(500).json([{ message: 'impossible to make the request' }]);
    }
    
});

module.exports = router;

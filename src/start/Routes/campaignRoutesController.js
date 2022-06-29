const Campaign = require('../../database/models/CampaignModel');
const router = require("express").Router();
const CampaignSinger = require('../../database/models/CampaignSingerModel');
const Singer = require('../../database/models/SingerModel');

//index
router.get("/", async (req, res) => {
    try {
        const campaigns = await Campaign.findAll({
            include: [{
                model: Singer,
            }]
        });
        res.json(campaigns);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

//show
router.get("/:id", (req, res) => {
    Campaign.findByPk(req.params.id)
        .then(campaign => {
            res.json(campaign);
        })
        .catch(err => {
            res.json(err);
        });
});

//create
router.post("/", (req, res) => {
    const { name, startDate, endDate, slug, status } = req.body;
    Campaign.create({
        'name': name,
        'startDate': startDate,
        'endDate': endDate,
        'slug': slug,
        'status': status,
    }).then(async (CampaignResult) => {
        const { singers } = req.body;
        singers.forEach(async dominated => {
            await CampaignSinger.create({
                'campaignId': CampaignResult.id,
                'cingerId': dominated.id,
            })
        });
        res.json({ 'message': 'Campaign created successfully' });
    }).catch(err => {
        res.status(404).json(err);
    });
});

//update
router.patch("/:id", (req, res) => {
    Campaign.update(
        req.body, {
        where: {
            id: req.params.id,
        }
    }).then((result) => {
        res.json({ message: `${result} row updated successfully` });
    }).catch(err => {
        res.status(404).json(err);
    });
});

//delete
router.delete("/:id", (req, res) => {
    Campaign.destroy({
        where: {
            id: req.params.id,
        }
    }).then((result) => {
        res.json({ message: `${result} row deleted successfully` });
    }).catch(err => {
        res.status(404).json(err);
    });
});

module.exports = router;


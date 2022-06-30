const router = require("express").Router();
const Campaign = require('../../database/models/CampaignModel');
const Singer = require('../../database/models/SingerModel');
const Campaign_Singer = require('../../database/models/CampaignSingerModel');

Campaign.belongsToMany(Singer, { through: Campaign_Singer });
Singer.belongsToMany(Campaign, { through: Campaign_Singer });

//index
router.get("/", async (req, res) => {
    try {
        const campaigns = await Campaign.findAll({
            attributes: ['name', 'id', 'startDate', 'endDate', 'slug', 'status'],
            include: {
                model: Singer,
            }
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
router.post("/", async (req, res) => {
    const { name, startDate, endDate, slug, status, singers } = req.body;
    await Campaign.create({
        'name': name,
        'startDate': startDate,
        'endDate': endDate,
        'slug': slug,
        'status': status,
    }).then((newCampaign) => {
        singers.forEach(async singer => {
            await newCampaign.addSinger(singer.id)
        });
        res.json(newCampaign);
    }).catch(err => {
        res.json(err);
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


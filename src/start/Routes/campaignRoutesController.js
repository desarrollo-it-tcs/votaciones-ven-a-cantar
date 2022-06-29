const Campaign = require('../../database/models/CampaignModel');
const router = require("express").Router();
const CampaignSinger = require('../../database/models/CampaignSingerModel');
const Singer = require('../../database/models/SingerModel');

//index
router.get("/", async (req, res) => {
    try {
        const campaigns = await Campaign.findAll({
            include: Singer
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
    try{
        const newCampaign = await Campaign.create({
            'name': name,
            'startDate': startDate,
            'endDate': endDate,
            'slug': slug,
            'status': status,
        });
        singers.forEach(async singer => {
            await newCampaign.addSinger(await Singer.findByPk(singer.id));
        });
        console.log(newCampaign);
        res.send(newCampaign);  
    } catch (error) {
        res.status(500).json({ message: error });
    }
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


const Campaign = require('../../database/models/CampaignModel');
const router = require("express").Router();

//index
router.get("/", (req, res) => {
    Campaign.findAll({
        order: [['createdAt', 'ASC']]
    })
        .then(campaigns => {
            res.json(campaigns);
        }).catch(err => {
            res.json(err);
        });
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
    }).then((campaign) => {
        res.json(campaign);
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


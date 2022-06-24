const Campaign = require('../../database/models/Campaign');
const router = require("express").Router();
const sequelize = require("sequelize");

router.get("/", async (req, res) => {
    const campaigns = await Campaign.findAll();
    res.json(campaigns);
});

module.exports = router;


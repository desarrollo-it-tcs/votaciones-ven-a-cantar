const Singer = require('../../database/models/Singer');
const router = require("express").Router();
const sequelize = require("sequelize");

router.get("/", async (req, res) => {
    const singers = await Singer.findAll();
    res.json(singers);
});

module.exports = router;
const router = require("express").Router();
const Banner = require("../../database/models/BannerModel");

router.get("/", async (req, res) => {
    try {
        const banners = await Banner.findAll();
        res.json(banners);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.post("/", async (req, res) => {
    try {
        const banner = await Banner.create(req.body);
        res.json(banner);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

module.exports = router;
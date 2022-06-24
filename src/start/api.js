const router = require('express').Router();
const apiCampaignRouter = require('./Routes/Campaign');
const apiSingerRouter = require('./Routes/singers');

router.use('/campaigns', apiCampaignRouter);
router.use('/singers', apiSingerRouter);

module.exports = router;
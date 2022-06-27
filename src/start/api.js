const router = require('express').Router();
const apiCampaignRouter = require('./Routes/campaignRoutesController');
const apiSingerRouter = require('./Routes/singersRoutesController');

router.use('/campaigns', apiCampaignRouter);
router.use('/singers', apiSingerRouter);

module.exports = router;
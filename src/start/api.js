const router = require('express').Router();
const apiCampaignRouter = require('./Routes/campaignRoutesController');
const apiSingerRouter = require('./Routes/singersRoutesController');
const apiVoteRouter = require('./Routes/voteRouteController');

router.use('/campaigns', apiCampaignRouter);
router.use('/singers', apiSingerRouter);
router.use('/votes', apiVoteRouter);

module.exports = router;
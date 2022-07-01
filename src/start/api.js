const router = require('express').Router();
const apiCampaignRouter = require('./Routes/campaignRoutesController');
const apiSingerRouter = require('./Routes/singersRoutesController');
const apiVoteRouter = require('./Routes/voteRoutesController');
const apiAdminRouter = require('./Routes/adminRoutesController');
const apiBannerRouter = require('./Routes/bannerRoutesController');

router.use('/campaigns', apiCampaignRouter);
router.use('/singers', apiSingerRouter);
router.use('/votes', apiVoteRouter);
router.use('/admins', apiAdminRouter);
router.use('/banners', apiBannerRouter);

module.exports = router;
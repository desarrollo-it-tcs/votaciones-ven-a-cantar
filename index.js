const express = require('express');
const sequelize = require('./src/database/db');
const Campaign = require('./src/database/models/Campaign');
const Singer = require('./src/database/models/Singer');
const { Settings } = require('luxon');

//setting
const app = express();
const PORT = process.env.PORT || 3000;
Settings.defaultZone = 'America/El_Salvador';

//routes
app.get('/', async (req, res) => {
    const newCampaign = await Campaign.create({
        name: 'Campaign 1',
        startDate: "2022-06-29T02:30:43.000Z",
        endDate: "2022-06-16T00:00:00.000Z",
        slug: 'campaign-1',
    });
    const newSinger = await Singer.create({
        name: 'Singer 1',
        imgUrl: 'https://via.placeholder.com/300x500',
        slug: 'singer-1',
    });
    res.json({
        'campaing': newCampaign,
        'singer': newSinger,
    });
});
    

//start server
app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);

    //connect to database
    sequelize.sync({ force: true })
        .then(() => {
            console.log('Connection database has been established successfully');
        }).catch(err => {
            console.log('Unable to connect to the database:', err);
        });
});
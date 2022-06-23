const express = require('express');
const sequelize = require('./src/database/db');
const Campaign = require('./src/database/models/Campaign');
const { DateTime, Settings } = require('luxon');

//setting
const app = express();
const PORT = process.env.PORT || 3000;
Settings.defaultZone = 'America/El_Salvador';

//routes
app.get('/', (req, res) => {
    Campaign.create({
        name: 'Campaign 1',
        startDate: "2022-06-29T02:30:43.000Z",
        endDate: "2022-06-16T00:00:00.000Z",
        slug: 'campaign-1',
    }).then(async campaign => {
        res.json(campaign);
    }).catch(err => {
        res.send(err);
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
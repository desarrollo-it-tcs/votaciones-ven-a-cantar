const express = require('express');
const sequelize = require('./src/config/db');
const { Settings } = require('luxon');
const apiRouter = require('./src/start/api');

//setting
const app = express();
const PORT = process.env.PORT || 3000;
Settings.defaultZone = 'America/El_Salvador';

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//routes
app.use('/api', apiRouter);

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
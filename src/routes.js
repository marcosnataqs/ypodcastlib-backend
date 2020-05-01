const express = require('express');

const webscraperController = require('./controllers/webscraperController');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send({ server: 'YPodcastLib API its working!' });
});

routes.get('/webscraping', webscraperController.index);

module.exports = routes;
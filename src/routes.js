const express = require('express');

const webscraperController = require('./controllers/webscraperController');

const routes = express.Router();

routes.get('/', webscraperController.index);

module.exports = routes;
const scraper = require('../services/webscraper');

module.exports = {
    async index(req, res) {
        const url = 'https://www.podbean.com/podcast-detail/6bygw-4295e/Hipsters-Ponto-Tech-Podcast';
        const podcastList = [];

        try {
            podcastList = await scraper.scrapPodcasts(url);
        } catch (err) {
            console.error(err);
        }

        res.send({ podcasts: podcastList });
    }
};
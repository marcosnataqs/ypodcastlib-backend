const scraper = require('../services/webscraper');

module.exports = {
    async index(req, res) {
        const url = 'https://www.podbean.com/podcast-detail/6bygw-4295e/Hipsters-Ponto-Tech-Podcast';
        const podcastList = await scraper.scrapPodcasts(url);

        res.send({ podcasts: podcastList });
    }
};
const puppeteer = require('puppeteer');

module.exports = {
    scrapPodcasts(pageUrl) {
        return new Promise(async (resolve, reject) => {
            try {
                const pagesToScrape = 5;

                const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
                const page = await browser.newPage();
                await page.goto(pageUrl);

                let currentPage = 1;
                let podcastList = [];
                while (currentPage <= pagesToScrape) {
                    let podcastItems = await page.evaluate(_ => {
                        let results = [];
                        let items = document.querySelectorAll('a.title.listen-now');
                        items.forEach((item) => {
                            results.push({
                                title: item.textContent,
                                link: item.getAttribute('href')
                            });
                        });
                        return results;
                    });
                    podcastList = [...podcastList, ...podcastItems];

                    if (currentPage < pagesToScrape) {
                        await Promise.all([
                            await page.click('ul#yw1.yiiPager>li:last-child>a'),
                            await page.waitForSelector('a.title.listen-now')
                        ]);
                    }
                    currentPage++;
                }

                browser.close();
                return resolve(podcastList);
            } catch (err) {
                return reject(err);
            }
        });
    }
};
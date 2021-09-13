const puppeteer = require('puppeteer');

async function scrapeTwitter(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x('//*[@id="landingImage"]');
  const src = await el.getProperty('src');
  const srcTxt = await src.jsonValue();

  console.log(srcTxt);

  browser.close();
}

scrapeTwitter('https://www.amazon.de/-/en/Schwarzwald-Spirit-Wooden-Pepper-Mill/dp/B07WWVG23P');

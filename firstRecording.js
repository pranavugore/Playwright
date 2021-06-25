const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');
  // Select it
  await page.selectOption('select[name="language"]', 'it');
  // Select en
  await page.selectOption('select[name="language"]', 'en');
  // Click input[name="search"]
  await page.click('input[name="search"]');
  // Fill input[name="search"]
  await page.fill('input[name="search"]', 'Apple M1');
  // Click text=Apple M1
  await page.click('text=Apple M1');
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Apple_M1');
  // Click span:has-text("Design")
  await page.click('span:has-text("Design")');
  await page.screenshot({path:"wiki.png"})
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Apple_M1#Design');
  // ---------------------
  await context.close();
  await browser.close();
})();
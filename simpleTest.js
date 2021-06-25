const {chromium} = require('playwright');

(async() =>{
    //inside this block

    const browser =await chromium.launch({
        headless:false
    });

    const page = await browser.newPage();
    
    await page.goto("https://executeautomation.com");
    await page.screenshot({path:"ea.png"});
    await browser.close();
})();
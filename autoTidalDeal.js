//const { Keyboard } = require('puppeteer');

let puppeteer
let page;

const BB_EMAIL = 'email';
const BB_PASSWORD = 'password';
addToCart();
async function addToCart () {
    puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({
        headless: false
    });
    page = await browser.newPage();
    console.log("ran");
    await page.goto('https://www.bestbuy.com/site/tidal-hifi-plus-family-3-month-music-subscription-starting-at-purchase-auto-renews-at-22-49-per-month-digital/6431965.p?skuId=6431965');
    await page.click('button.c-button-primary');
    //await page.waitForNavigation();
    await page.goto('https://www.bestbuy.com/cart');
    console.log("Made it to the cart!");
    await page.waitForSelector('button.btn.btn-lg.btn-block.btn-primary');
    await page.click('button.btn.btn-lg.btn-block.btn-primary');
    console.log("Clicked the checkout button!")
    await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
    await page.type("#fld-e", BB_EMAIL );
    await page.type("#fld-p1", BB_PASSWORD );
    await page.keyboard.press('Enter');
    await page.waitForNavigation();
    await page.click('input#email-radio');
    await page.click("button.c-button-icon.c-button-lg");
}

async function resumeCart(verificationCode) {
    await page.type("#verificationCode", verificationCode);
    await page.click("button.c-button-icon.c-button-lg");
    //verify price 💵
    const toPay = Document.getElementsByClassName("cash-money")[0].textContent();
    assert(toPay = "$1.00");

    //enter security code 🔐
    await page.type('#security-code', '123456');
    await page.click('#button.btn.btn-lg');
    await page.waitForNavigation();
    await browser.close();
}

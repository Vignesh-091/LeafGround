import { test } from "@playwright/test";

test(`Login functionality`,async ({page}) => {
    
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`//input[@id='username']`).fill(`demosalesmanager`,{timeout:5000});
    await page.locator(`//input[@id='password']`).fill(`crmsfa`);
    await page.locator(`//input[@class='decorativeSubmit']`).click({timeout:5000});    
    await page.waitForTimeout(2000);
    await page.locator(`//a[contains(text(),"CRM")]`).click();
    
    await page.context().storageState({path:"Data/login_LTY.json"})
})
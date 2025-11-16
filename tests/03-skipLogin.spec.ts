import { test } from "@playwright/test";

test.use({storageState:'Data/login_LTY.json'})

test(`Launch from home page`,async ({page}) => {
    await page.goto(`http://leaftaps.com/opentaps/control/main`)
    console.log(await page.title());
    
})
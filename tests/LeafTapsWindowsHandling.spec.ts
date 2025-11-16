import { expect, test } from "@playwright/test";
import { text } from "stream/consumers";
test("Leaftap Workaround", async ({page,context }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    // to login leaftaps
    await page.locator("#username").fill("Demosalesmanager");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.waitForTimeout(5000);
    await page.locator('text=CRM/SFA').click();
    // to click leads 
    await page.getByRole('link', { name: 'Leads' }).click({ delay: 2000 });
    // to click merge leads 
    await page.locator(`//a[text()='Merge Leads']`).click();
    //to Click From Lead widget 
    const [childPage1]= await Promise.all([context.waitForEvent('page'),
    page.locator(`(//img[@src='/images/fieldlookup.gif'])[1]`).click()]);
    await page.waitForLoadState();
    // to get the count of the pages created 
    const allPages=context.pages();
    console.log(`Total Pages opened:${allPages.length}`);
    // Select the first resulting lead id
    await childPage1.locator(`a.linktext`).first().click();
    









});
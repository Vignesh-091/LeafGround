import { chromium,test } from "@playwright/test";
test ("Workaround SalesForce",async({page})=>{
await page.goto("https://login.salesforce.com/");
await page.fill("#username","ravindran.ramdas@testleaf.com");
await page .fill("#password","RaviSalesTest#1432");
await page .click("#Login");
await page.waitForTimeout(5000); 
await page.click('[title="App Launcher"]');


    

})


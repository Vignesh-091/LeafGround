import { chromium,expect,test } from "@playwright/test";
test.setTimeout(60000);
test ("Workaround SalesForce",async({page})=>{
await page.goto("https://login.salesforce.com/");
await page.waitForURL("https://login.salesforce.com/");
await page.fill("#username","ravindran.ramdas@testleaf.com");
await page .fill("#password","RaviSalesTest#1432");
await page .click("#Login");
await page.waitForTimeout(5000); 
await page.click('[title="App Launcher"]');
await page.waitForTimeout(3000);
await page .locator(`button[aria-label="View All Applications"]`).click();
await page.getByPlaceholder("Search apps or items...").fill("marketing");
await page.waitForTimeout(3000);
await page .locator(`p.slds-truncate`).click();
// to verify marketing dashboard page 
await expect(page.locator(`span[title="Marketing CRM Classic"]`)).toContainText("Marketing CRM Classic");
// Lead creation 

await page .locator(`a[title="Leads"]`).click();
await page .locator(`div[title="New"]`).click();
await expect (page.locator(`button[name="salutation"]`)).toBeVisible();
await page.locator(`button[name="salutation"]`).click();
await page.locator(`span[title="Dr."]`).click();
await page.getByPlaceholder(`First Name`).fill("Ahesya");
await page.getByPlaceholder(`Last Name`).fill("Vignesh");
await page.locator(`input[name="Company"]`).fill("Hexaware");
await page.locator(`button[name="SaveEdit"]`).click();

await expect(page.locator(`div .forceVisualMessageQueue`)).toBeVisible();
const SuccessfullMessage =await page.locator(`div .forceVisualMessageQueue`).textContent();
console.log(`the lead creation message is ${SuccessfullMessage }`);
await page.waitForTimeout(3000);
await page .locator(`//button[text()="Submit for Approval"]/following::button[1]`).click();
console.log("Clicking Convert button...");
await page.waitForSelector(`[data-target-selection-name="sfdc:StandardButton.Lead.Convert"]`);
await page.locator(`[data-target-selection-name="sfdc:StandardButton.Lead.Convert"]`).click();
// to convert lead 
console.log("Clicked. Now filling text...");
await page.locator(`.createPanelCollapsed`).nth(2).click();
await page.locator('input[aria-required="true"]').nth(2).clear();
await page.locator('input[aria-required="true"]').nth(2).fill("deloite");
console.log("Filled text.");
await expect(page.getByRole("button",{name:"Convert"})).toBeVisible();
await page.getByRole("button",{name:"Convert"}).click();
 
const messageElement =await page.waitForSelector(`//h2[text()='Your lead has been converted']`,{timeout:10000});
const leadCreationMessage = await messageElement.textContent();
console.log(leadCreationMessage);
 expect(leadCreationMessage).toContain("Your lead has been converted");
await page.locator(`//button[text()='Go to Leads']`).click();
// to search oppurtunity 

await page .locator(`a[title='Opportunities']`).click();
await page .waitForTimeout(5000);
await page .locator(`input[name='Opportunity-search-input']`).fill("deloite");
await page.locator(`input[name='Opportunity-search-input']`).press('Enter');
// validating the searched oppurtunity is displayed 
 await expect(page.locator(`th[role='rowheader']`).nth(0)).toContainText("deloite");







})


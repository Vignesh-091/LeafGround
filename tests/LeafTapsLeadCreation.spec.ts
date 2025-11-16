import {expect,test } from "@playwright/test";
import { text } from "stream/consumers";
test ("Leaftap Workaround",async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main");
await page.locator("#username").fill("Demosalesmanager");
await page.locator("#password").fill("crmsfa");
 await page .locator(".decorativeSubmit").click();
 await page.waitForTimeout(5000); 
 await page .locator('text=CRM/SFA').click();
  await page .getByRole('link',{name: 'Leads'}).click({delay:2000});
 await page .getByRole('link',{name: 'Create Lead'}).click({delay:2000});
 await page .locator("#createLeadForm_companyName").fill("Hexaware");
 await page.waitForTimeout(2000); 
 await page .locator("#createLeadForm_firstName").fill("Vignesh");
 await page .locator("#createLeadForm_lastName").fill("Rajendran");
 await page .locator("#createLeadForm_firstNameLocal").fill("Vignesh");
await page .locator("#createLeadForm_personalTitle").fill("MR");
await page .locator("#createLeadForm_lastNameLocal").fill("Rajendran");
await page .locator("#createLeadForm_generalProfTitle").fill("Senior Engineer");
await page .locator("#createLeadForm_annualRevenue").fill("1200000");
await page .locator("#createLeadForm_departmentName").fill("Tech");
await page .locator("#createLeadForm_departmentName").fill("Tech");
await page .locator("#createLeadForm_primaryPhoneNumber").fill("9829839212");
await page .locator(".smallSubmit").click();
await page.waitForTimeout(5000);

// validating texts after lead creation 

await expect (page.locator("#viewLead_companyName_sp")).toContainText("Hexaware");
await expect (page.locator("#viewLead_firstNameLocal_sp")).toContainText("Vignesh");
await expect (page.locator("#viewLead_lastNameLocal_sp")).toContainText("Rajendran");
await expect (page.locator("#viewLead_statusId_sp")).toContainText("Assigned");
await expect (page.locator("#viewLead_generalProfTitle_sp")).toContainText("Senior Engineer");
const currentPageTitle =await page .title();
console.log(currentPageTitle);




    

})

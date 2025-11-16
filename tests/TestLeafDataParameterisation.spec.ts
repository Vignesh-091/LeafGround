import { test, expect } from '@playwright/test';
import fs from 'fs';
// Read the data from the path 
const jsonPath= `tests/UploadFiles/Data/CreateLead.json`;
const createLeadData:any = JSON.parse(fs.readFileSync(jsonPath,'utf-8'));

test(`To Test Leaftaps with data sets `,async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main");
// to login with test data file 
await page.fill("#username",createLeadData.credentials.username);
await page.fill("#password",createLeadData.credentials.password);
await page .locator(".decorativeSubmit").click();
// click create lead 
 await page .locator('text=CRM/SFA').click();
 await page .getByRole('link',{name: 'Leads'}).click({delay:2000});
 await page .getByRole('link',{name: 'Create Lead'}).click({delay:2000});
// To fill the form 
 await page .fill("#createLeadForm_companyName",createLeadData.leadDetails.companyName);
 await page .fill("#createLeadForm_firstName",createLeadData.leadDetails.firstName);
 await page .fill("#createLeadForm_lastName",createLeadData.leadDetails.lastName);
 // To select the values from the dropdown 
await page.selectOption(`#createLeadForm_dataSourceId`,{label:createLeadData.dropdowns.source.label});
await page .selectOption(`#createLeadForm_marketingCampaignId`,{value:createLeadData.dropdowns.marketingCampaign.value});
// to get the count and print all the values 
const marketingCampaign = page.locator(`#createLeadForm_marketingCampaignId option`);
const optionCount = await marketingCampaign.count();
console.log(`Total no of options available:${optionCount}`);
// to print all the values need to iterate 
for(const  optionValues of await marketingCampaign.all()){
const totalOptions =await optionValues.textContent()
    console.log(totalOptions);
}
// to select from drop down
await page.selectOption(`#createLeadForm_industryEnumId`,{index:createLeadData.dropdowns.industry.index});
await page.selectOption(`#createLeadForm_currencyUomId`,{value:createLeadData.dropdowns.preferredCurrency.value})
await page.selectOption(`#createLeadForm_generalCountryGeoId`,{label:createLeadData.dropdowns.country.label});
await page.selectOption(`#createLeadForm_generalStateProvinceGeoId`,{label:createLeadData.dropdowns.state.label});
// to get the count of the state 
const statesCount = page.locator(`#createLeadForm_generalStateProvinceGeoId option`);
const totalCount= await statesCount.count();
console.log(`Total Number of States:${totalCount}`);
// to print all the states 
for(const stateDetails of await statesCount.all()){

    const states= await stateDetails.textContent();
    console.log(`Total states available,${states}`)
}


});

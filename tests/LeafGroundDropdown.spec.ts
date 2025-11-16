
/*Assignment Requirements:
1. Navigate to https://leafground.com/select.xhtml
2. Select your favorite UI automation tool using the different select options
3. Get the count and print of all the values
4. Choose your preferred Country
5. Confirm Cities belongs to Country is loaded
6. Choose any three courses from the dropdown
7. Choose a language and print all the values from the dropdown.
8. Select 'Two' irrespective of the language chosen*/


import { chromium ,expect,test} from "@playwright/test";
test("To test Dropdown",async({page})=>{

await page.goto("https://leafground.com/select.xhtml");
await page.locator('.ui-selectonemenu').nth(0).click();
await page .selectOption('select.ui-selectonemenu',{label:'Playwright'})
/* Select your favorite UI automation tool using the different select options
 Get the count and print of all the values*/
const selectedOption = await page .selectOption('select.ui-selectonemenu',{label:'Playwright'})
console.log(selectedOption);

const listOfUiTools= await page.locator('select.ui-selectonemenu option').allTextContents();
console.log(listOfUiTools);

const totalCountUiTools= await page.locator('select.ui-selectonemenu option').allTextContents();
console.log(totalCountUiTools.length);
//Assertion to count 
await expect(page.locator('select.ui-selectonemenu option')).toHaveCount(5);
// Choose your preferred Country

await page.locator(`(//*[text()='Select Country'])[2]`).click();
await  page.getByRole('option',{name:'Brazil'}).click();
const selectedCountry = await page.locator(`//label[@class='ui-selectonemenu-label ui-inputfield ui-corner-all']`).nth(0).textContent();
console.log(`the selected country is :${selectedCountry}`);

//Asserstion on selected country 
await expect (page.locator(`//label[@class='ui-selectonemenu-label ui-inputfield ui-corner-all']`).nth(0)).toContainText("Brazil");
// To validate the correct cities are loaded as per the country selection 

await page.waitForTimeout(5000);
await page .locator(`//*[@class='ui-selectonemenu-label ui-inputfield ui-corner-all']`).nth(1).click();
const citiesList = await page.locator(`(//*[@role='listbox'])[3]`).allTextContents();
console.log(citiesList);

// To select multiple coarses 

await page.locator(`button[aria-label="Show Options"]`).click();

await expect (page.getByRole("option",{name:'AWS'})).toBeVisible();
page.getByRole("option",{name:'AWS'}).click();

await expect(page.locator(`button[aria-label="Show Options"]`)).toBeVisible();
page.locator(`button[aria-label="Show Options"]`).click();

await expect(page.locator(`li[data-item-label="Playwright"]`)).toBeVisible();
await page.locator(`li[data-item-label="Playwright"]`).click();

await expect(page.locator(`button[aria-label="Show Options"]`)).toBeVisible();
await page.locator(`button[aria-label="Show Options"]`).click();

await expect(page.locator(`li[data-item-label="PostMan"]`)).toBeVisible();
await page.locator(`li[data-item-label="PostMan"]`).click();











})

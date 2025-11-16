import { test  } from "@playwright/test";
import {parse} from "csv-parse/sync"
import fs from "fs"

test.use({storageState:'Data/login_LTY.json'})

test.describe.serial("Login tests - serial execution",async () => {

let records:any[]



test.beforeAll(`Read data from csv`,async () => {
    console.log(`BeforeAll Executing ones`);
    
    records  = parse(fs.readFileSync("Data/login.csv"),{ columns:true,skip_empty_lines:true})

})

test.beforeEach(`Login Functionality`,async ({page}) => {
    //Open the login page
    console.log(`Before Each test execution of Lead and Account Module`);
    
  await page.goto(`http://leaftaps.com/opentaps/control/main`);

   /*  await page.locator(`#username`).fill(records[0].username);
    await page.locator(`#password`).fill(records[0].password); 

    await page.locator(`.decorativeSubmit`).click(); */
    await page.locator(`text=CRM/SFA`).click()
})

test(`Lead Module`,async ({page}) => {
    console.log("Running Lead Module");

    await page.locator(`//a[text()='Leads']`).click();
    await page.locator(`//a[text()='Create Lead']`).click();
    
})

test(`Account Module`,async ({page}) => {
    console.log("Running Account Module");

    await page.locator(`//a[text()='Accounts']`).click();
    await page.locator(`//a[text()='Create Account']`).click();
})

test.afterEach(`Fetch the test status of each test`,async({},testinfo)=>{

    console.log("Running after each test");
    console.log(testinfo.title);
    console.log(testinfo.status);  //pass
})

test.afterAll(`Upload all the attachments`,async()=>{
    console.log("Running after all the test");
    console.log(`The reports and screenshot are uploaded in test managment tool`);
    
    
})
})

   

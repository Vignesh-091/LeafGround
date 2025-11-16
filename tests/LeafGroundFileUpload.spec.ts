import { chromium ,expect,test} from "@playwright/test";
test("To test fileUpload",async({page,context})=>{

await page.goto("https://leafground.com/file.xhtml");
const fileUpload=page.locator(`(//input[@type="file"])[1]`);
await fileUpload.setInputFiles("Data/data.txt");
await page.waitForTimeout(3000);



});

test.only ("To test fileDownload",async({page})=>{
 await page.goto("https://leafground.com/file.xhtml");  
 const [download] = await Promise.all([page.waitForEvent("download"),page.locator(`//*[text()='Download']`).click()])
 //option 1 - save in custom path with custom file name 
 await download.saveAs("Data/data.txt");
 //option 2 

 const suggestedName = download.suggestedFilename();
await download.saveAs(suggestedName);





})
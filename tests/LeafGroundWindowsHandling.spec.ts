import { chromium ,expect,test} from "@playwright/test";
test("To test Dropdown",async({page,context})=>{

await page.goto("https://leafground.com/window.xhtml");
// to handle multiple windows 

const [newPage] = await Promise.all([context.waitForEvent(`page`),page.getByText(`Open Multiple`).click()]);
 await newPage.waitForLoadState();




 








})
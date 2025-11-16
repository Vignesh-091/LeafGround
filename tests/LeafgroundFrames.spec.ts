import { chromium ,expect,test} from "@playwright/test";
test("To test Dropdown",async({page})=>{

await page.goto("https://leafground.com/frame.xhtml");
// to click the button inside a frame 
const frame = page.frameLocator(`iframe[src="default.xhtml"]`)
await frame.locator(`#Click`).click();
await expect (frame.locator(`#Click`)).toContainText(`Hurray! You Clicked Me.`);
console.log(`Text verified after the button clicked `);
const FramesNo = page.frames();
console.log(`Total number of frames :${FramesNo.length}`)
 for(const totalframes of FramesNo){

console.log(`Frame name :${totalframes.name()}`,`Frame URL:${totalframes.url()}`);

 }
 const outerFrame = page.frameLocator(`iframe[src="page.xhtml"]`);
const innerFrame = outerFrame.frameLocator(`#frame2`);
await innerFrame.locator(`#Click`).click();

await expect(innerFrame.locator(`#Click`)).toContainText(`Hurray! You Clicked Me.`)
console.log(`Text verified after the button clicked `);
// To interact with nested frames 



 })















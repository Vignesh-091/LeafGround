import{test,expect,chromium}from "@playwright/test";
test("To handle Frames ",async({page})=>{
await page.goto("https://demoqa.com/frames");
// approach 1
// to find the total frames 
const totalFrames = page.frames();
console.log(totalFrames.length);
// to find the url and name  of the frame 
for (const frameDetails of totalFrames){

console.log(frameDetails.url(),frameDetails.name());

}






})
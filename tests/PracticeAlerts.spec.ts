import { chromium ,expect,Locator,test} from "@playwright/test";
test("To handle simple alert",async({page})=>{
await page.goto(`https://leafground.com/alert.xhtml`);
// to handle simple alert 
page.on(`dialog`,dialog=>dialog.accept());//handlers to handle simple alert 

await page.locator(`(//span[text()='Show'])[1]`).click();


});
test("To handle confirm alert",async({page})=>{
await page.goto(`https://leafground.com/alert.xhtml`);
page.on('dialog',(dialog)=>{
console.log("the given dialog is ",dialog.type());
expect(dialog.type()).toContain(`confirm`)
expect (dialog.message()).toContain("Did you call me?");
dialog.accept();


})
await page.locator(`(//span[text()='Show'])[2]`).click();
await expect(page.locator(`#result`)).toHaveText(`User Clicked : OK`);
await page.waitForTimeout(3000);


});

// to test prompt alert 

test.only("To handle prompt alert",async({page})=>{
await page.goto(`https://leafground.com/alert.xhtml`);
page.on(`dialog`,(dialog)=>{
console.log(dialog.type());
console.log(dialog.message());
dialog.accept("Vignesh");
 expect(page.locator(`#confirm_result`)).toHaveText(`User entered name as: Vignesh`);






})
await page.locator(`(//span[text()='Show'])[5]`).click();

})


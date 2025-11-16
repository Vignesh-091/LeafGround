import { chromium ,expect,Locator,test} from "@playwright/test";
test("To test input Box Validation",async({page})=>{
await page.goto("https://leafground.com/input.xhtml");
// to check whether the input field is displayed 
const InputField:Locator =page.getByPlaceholder(`Babu Manickam`);
await expect(InputField).toBeVisible();
await expect(InputField).toBeEnabled();
// To enter the data in the input fields
await InputField.clear();
await InputField.fill("Vignesh");
// to assert the input which we have given 
const enteredValue = await (InputField.inputValue());
expect(enteredValue).toBe("Vignesh");

})
// to handle radio buttons 
test("To test radio button  Validation",async({page})=>{
await page.goto("https://leafground.com/radio.xhtml");
await page.waitForURL(`https://leafground.com/radio.xhtml`);
const radioButton:Locator = page.locator(`(//label[text()='Chrome'])[1]`);
// To check the status of the radio  button is enabled ,checked ,visible 
await expect(radioButton).toBeEnabled();
await expect (radioButton).not.toBeChecked();
console.log(`The radio button is not checked `);
await radioButton.check();
await page.waitForTimeout(3000);
await expect(radioButton).toBeChecked();
console.log(`the radio button is checked `)


})

// to handle check boxes 

test.only("To test check box  Validation",async({page})=>{
await page.goto("https://leafground.com/checkbox.xhtml");
await page.waitForURL(`https://leafground.com/checkbox.xhtml`);
// to check mulitple check boxes

const multipleCheckBox =["Java","Python","Javascript","C-Sharp","Others"] ;
/* for (const checkBox2 of multipleCheckBox){
   const multiSelect= page.locator(`//label[text()='${checkBox2}']`)
   await multiSelect.click();


} */
//await page.waitForTimeout(3000);

// to check only the first three check box 
for (const checkBox2 of multipleCheckBox.slice(3)){
   const multiSelect= page.locator(`//label[text()='${checkBox2}']`)
   await multiSelect.check();
await expect(multiSelect).toBeChecked();

}

await page.waitForTimeout(3000);




})

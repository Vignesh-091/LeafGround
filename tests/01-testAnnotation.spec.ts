import {test} from '@playwright/test'

// test.skip(`Test Annotation with skip cause test not suitable for that environment `,async ({page}) => {

//     await page.goto(`http://leaftaps.com/opentaps/control/main`);
//     await page.locator(`//input[@id='username']`).fill(`demosalesmanager`,{timeout:5000});
//     await page.locator(`//input[@id='password']`).fill(`crmsfa`);
//     await page.locator(`//input[@class='decorativeSubmit']`).click({timeout:5000});    
//     await page.waitForTimeout(2000);
//     await page.locator(`//a[contains(text(),"CRM")]`).click();
// })

//Purpose :
//1. Is your test is not ready and the environment is not suitable

// test.fixme(`Test annotations with fixme not suitable for PROD environment`,async ({page}) => {
//     await page.goto(`http://leaftaps.com/opentaps/control/main`);
//     await page.locator(`//input[@id='username']`).fill(`demosalesmanager`,{timeout:5000});
//     await page.locator(`//input[@id='password']`).fill(`crmsfa`);
//     await page.locator(`//input[@class='decorativeSubmit']`).click({timeout:5000});    
//     await page.waitForTimeout(2000);
//     await page.locator(`//a[contains(text(),"CRM")]`).click();
// })

/* Purpose:
COnveying to team that the script is not working or under repair.
Test will be skipped in test suite
Its serves as a reminder to fix the test
  */

// test.fail(`Unable to click the submit button`, async ({page}) => {
//     await page.goto(`http://leaftaps.com/opentaps/control/main`);
//     await page.locator(`//input[@id='username']`).fill(`demosalesmanager`,{timeout:5000});
//     await page.locator(`//input[@id='password']`).fill(`crmsfa`);
//     await page.locator(`//input[@class='decorativeSubmit']`).click({timeout:5000});    
//     await page.waitForTimeout(2000);
//     await page.locator(`//a[contains(text(),"CRM")]`).click();
// })

/* Purpose :
Keep the test in the test suite so it still runs.
Mark the test as "expected to fail" until the bug is fixed. */

test(`Test annotation with slow`, async ({page}) => {
    test.slow() // 3 times increase from the specified timeout in config(can also be default timeout 30000)
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`//input[@id='username']`).fill(`demosalesmanager`,{timeout:5000});
    await page.locator(`//input[@id='password']`).fill(`crmsfa`);
    await page.locator(`//input[@class='decorativeSubmit']`).click({timeout:5000});    
    await page.waitForTimeout(2000);
    await page.locator(`//a[contains(text(),"CRM")]`).click();
    console.log(test.info().timeout); // Show the current timeout in ms
    
})


import { test } from "@playwright/test";
import { log } from "node:console";
test(`User test Launch Browser`,async({page})=>{
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    const PageUrl = page.url();
    console.log(PageUrl);
   const PageTitle =await page.title();
console.log(PageTitle);




});
import { test, expect } from '@playwright/test';
import dotenv from "dotenv"
let fileName = process.env.envFile||'qA'
dotenv.config({path:`tests/UploadFiles/Data/${fileName}.env`})
test("Testing dot env files",async({page})=>{
await page.goto(process.env.BaseUrl as string);
await page.fill(`#username`,process.env.LF_UserName as string);
await page.fill(`#password`,process.env.LF_Password as string);
await page.locator(`.decorativeSubmit`).click();

//changes


})

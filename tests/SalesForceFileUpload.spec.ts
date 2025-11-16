import { test, expect, Locator } from "@playwright/test";

test("Upload file and verify in Salesforce", async ({ page }) => {
  await page.goto("https://login.salesforce.com/");

  // Login
  await page.fill("#username", "vigneshsammu96755@agentforce.com");
  await page.fill("#password", "Sammu@2023");
  await page.click("#Login");
  await page.waitForTimeout(5000);

  // Open App Launcher → View All → Search → Accounts → Click
  await page.click('[title="App Launcher"]');
  await page.locator(`button[aria-label="View All Applications"]`).click();
  await page.getByPlaceholder("Search apps or items...").fill("Accounts");
  await page.locator(`mark:has-text("Accounts")`).click();

  // Create Account
  await page.locator(`a[title='New']`).click();
  await page.locator(`input[name='Name']`).fill(`Vignesh`);
  await page.locator(`div[role='none']`).nth(1).click();
  await page.locator(`span[title='Warm']`).click();
  await page.locator(`div[role='none']`).nth(3).click();
  await page.locator(`span[title='Prospect']`).click();
  await page.locator(`div[role='none']`).nth(5).click();
  await page.locator(`span[title='Banking']`).click();
  await page.locator(`div[role='none']`).nth(4).click();
  await page.locator(`span[title='Public']`).click();
  await page.locator(`button[name='SaveEdit']`).click();

  // Assert Account created
  const toastMessage = page.locator(`.forceVisualMessageQueue`);
  await expect(toastMessage).toContainText(`Vignesh`);

  // Upload file
  const uploadButton: Locator = page.locator(`div[title='Upload Files']`);
  await uploadButton.waitFor({ state: "visible" });
  await uploadButton.click();

  const fileInput = page.locator(`input[type="file"]`);
  await fileInput.setInputFiles("tests/UploadFiles/Vignesh.txt");

  // Click Done
  const doneButton: Locator = page.locator(`button:has-text("Done")`);
  await doneButton.waitFor({ state: "visible", timeout: 30000 });
  await doneButton.click();

  // Wait for upload modal to close
  await expect(doneButton).toBeHidden({ timeout: 60000 });

  //  verification of uploaded file
  const uploadedFile = page.locator(`span.itemTitle`);
  await expect(uploadedFile.first()).toBeVisible({ timeout: 60000 });

  // Keep checking all uploaded file names until we find "Vignesh"
  await page.waitForFunction(() => {
    const items = Array.from(document.querySelectorAll('span.itemTitle'));
    return items.some(item => item.textContent?.trim() === "Vignesh");
  }, { timeout: 60000 });

  // Final assertion
  const uploadedFileName = await uploadedFile.first().innerText();
  expect(uploadedFileName.trim()).toBe("Vignesh");
});

import { test, expect } from '@playwright/test';

test.use({ storageState: 'instagramState.json' });

test('Logged-in Instagram Test', async ({ page }) => {
    await page.goto("https://www.instagram.com/");

    await page.locator('[aria-label="Search"]').click();
    const searchInput = page.getByPlaceholder('Search');
    await searchInput.fill("kriitii_19");
    await searchInput.press("Enter");
    await page.locator('//span[text() ="Kritika Singh • Followed by unapologeticallykritika"]').click();
    await page.locator('//div[text() ="Message"]').click()
    await page.waitForTimeout(5000);
    await page.fill('[aria-placeholder="Message..."]', "Hello Sweetheart");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(5000);
});

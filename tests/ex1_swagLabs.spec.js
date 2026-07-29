import test, { expect } from "@playwright/test"


test('Swag labs test', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")

    await expect(page).toHaveTitle("Swag Labs");

    await page.getByPlaceholder("Username").fill("standard_user");

    await page.getByPlaceholder("Password").fill("secret_sauce");

    await page.locator("[id= 'login-button']").click();

    await expect(page).toHaveURL(/inventory.html/);// regex
    await expect(page.url()).toContain('inventory.html')

    await expect(page.getByTestId('title')).toBeVisible();
    await expect(page.getByTestId('title')).toHaveText('Products');
    // await expect(page.locator('[data-test="title"]')).toBeVisible();
    // await expect(page.locator('[data-test="title"]')).toHaveText('Products');

    await page.getByRole('button', { name: "Open Menu" }).click();

    await page.getByText("Logout").click();

    await expect(page).toHaveURL('https://www.saucedemo.com')
    await page.waitForTimeout(5000);


})



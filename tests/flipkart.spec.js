import test from "@playwright/test";

test("My First Test", async ({ page }) => {

    await page.goto("https://www.flipkart.com/")

    //To close the popup
    await page.locator('//span[text()="✕"]').click()

    const searchInput = page.locator('(//input[@title="Search for Products, Brands and More"])[1]');

    await searchInput.fill("iphone 17");
    await searchInput.press("Enter");

    await page.locator('(//div[contains(text(), "Black")])[1]').click();

    // await page.locator('//*[text()="Buy with EMI"]/ancestor::*[@style="flex-flow: row; flex: 1 1 0%;"]/preceding-sibling::*').click();
    await page.locator('svg')
        .leftOf(page.getByText('Buy with EMI'))
        .first()
        .click();
    await page.waitForTimeout(5000);

})

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('button', { name: '✕' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('iphone 17 pro max');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).press('Enter');
  const page1Promise = page.waitForEvent('popup');
  await page.getByText('Apple iPhone 17 Pro Max (Cosmic Orange, 256 GB)').click();
  const page1 = await page1Promise;
  await page1.locator('').click();
  await page1.getByRole('link', { name: 'Cart 1 Cart' }).click();
});
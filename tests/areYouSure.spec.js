import { test } from '@playwright/test';

test('Save Instagram Login Session', async ({ page, context }) => {
    // Disable timeout for this login setup test so it never expires while you type OTP
    test.setTimeout(0);

    await page.goto("https://www.instagram.com/");

    console.log("Please complete login and OTP in the opened browser window, then click 'Resume' in Playwright Inspector...");

    // Pauses test execution until you click "Resume" (▶) in the inspector window
    await page.pause();

    // After you click Resume, it saves the session state
    await context.storageState({ path: 'instagramState.json' });
    console.log("Session saved successfully to instagramState.json!");
});

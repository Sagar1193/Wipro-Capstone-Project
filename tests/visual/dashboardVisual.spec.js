const { test, expect } =
require('../../fixtures/baseFixtures');

test.describe.configure({
  mode: 'serial'
});

test.describe(
  'Visual Regression Tests',
  () => {

    test(
      'Dashboard Visual Validation',
      async ({
        page,
        loginPage,
        browserName
      }) => {
        test.skip(
          browserName !== 'chromium',
          'Visual tests only for Chromium'
        );
        await loginPage.loginAndVerify();
        await page.waitForLoadState(
          'networkidle'
        );
        await expect(page).toHaveScreenshot(
          'dashboard-page.png',
          {
            fullPage: true,
            maxDiffPixelRatio: 0.1,
          }
        );
      }
    );

    test.skip(
      'Login Page Visual Validation',
      async ({
        page,
        loginPage,
        browserName
      }) => {
        test.skip(
          browserName !== 'chromium',
          'Visual tests only for Chromium'
        );
        await loginPage.gotoLoginPage();
        await page.waitForLoadState(
          'networkidle'
        );
        await expect(page).toHaveScreenshot(
          'login-page.png',
          {
            fullPage: true,
            maxDiffPixelRatio: 0.1,
          }
        );
      }
    );

    test(
      'PIM Page Visual Validation',
      async ({
        page,
        loginPage,
        pimPage,
        browserName
      }) => {
        test.skip(
          browserName !== 'chromium',
          'Visual tests only for Chromium'
        );
        await loginPage.loginAndVerify();
        await pimPage.navigateToPIM();
        await page.waitForLoadState(
          'networkidle'
        );
        await expect(page).toHaveScreenshot(
          'pim-page.png',
          {
            fullPage: true,
            maxDiffPixelRatio: 0.1,
          }
        );
      }
    );

    test.skip(
      'Admin Page Visual Validation',
      async ({
        page,
        loginPage,
        adminPage,
        browserName
      }) => {
        test.skip(
          browserName !== 'chromium',
          'Visual tests only for Chromium'
        );
        await loginPage.loginAndVerify();
        await adminPage.navigateToAdmin();
        await page.waitForLoadState(
          'networkidle'
        );
        await expect(page).toHaveScreenshot(
          'admin-page.png',
          {
            fullPage: true,
            maxDiffPixelRatio: 0.1,
          }
        );
      }
    );

    test(
      'Leave Page Visual Validation',
      async ({
        page,
        loginPage,
        leavePage,
        browserName
      }) => {
        test.skip(
          browserName !== 'chromium',
          'Visual tests only for Chromium'
        );
        await loginPage.loginAndVerify();
        await leavePage.navigateToLeave();
        await page.waitForLoadState(
          'networkidle'
        );
        await expect(page).toHaveScreenshot(
          'leave-page.png',
          {
            fullPage: true,
            maxDiffPixelRatio: 0.1,
          }
        );
      }
    );

  }
);
const { test, expect } =
require('../../fixtures/baseFixtures');

test.describe('Visual Regression Tests', () => {

  test('Dashboard Visual Validation',
    async ({ page, loginPage }) => {

    await loginPage.gotoLoginPage();

    await loginPage.login();

    await loginPage.verifySuccessfulLogin();

    await expect(page).toHaveScreenshot(
      'dashboard-page.png',
      {
        fullPage: true,
        maxDiffPixelRatio: 0.1,
      }
    );
  });

});
const { test, expect } = require('../../fixtures/baseFixtures');

const { ScreenshotUtil } = require('../../utils/screenshotUtil');

const { Logger } = require('../../utils/logger');

test.describe('OrangeHRM Login Tests', () => {

  test('Valid Login', async ({ loginPage, page }) => {

    Logger.info('Starting Valid Login Test');

    await loginPage.gotoLoginPage();

    await loginPage.login();

    await loginPage.verifySuccessfulLogin();

    await ScreenshotUtil.capture(
      page,
      'valid-login'
    );

    Logger.info('Valid Login Test Completed');
  });

  test('Invalid Login', async ({ loginPage, page }) => {

    Logger.info('Starting Invalid Login Test');

    await loginPage.gotoLoginPage();

    await loginPage.usernameInput.fill('Admin');

    await loginPage.passwordInput.fill('wrongPassword');

    await loginPage.loginButton.click();

    await expect(
      page.getByText('Invalid credentials')
    ).toBeVisible();

    await ScreenshotUtil.capture(
      page,
      'invalid-login'
    );

    Logger.info('Invalid Login Test Completed');
  });

});
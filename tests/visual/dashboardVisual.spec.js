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

      await loginPage.gotoLoginPage();

      await loginPage.login();

      await loginPage.verifySuccessfulLogin();

      await pimPage.navigateToPIM();

      await expect(page).toHaveScreenshot(
        'pim-page.png',
        {
          fullPage: true,
          maxDiffPixelRatio: 0.1,
        }
      );
    }
  );

  test(
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

      await loginPage.gotoLoginPage();

      await loginPage.login();

      await loginPage.verifySuccessfulLogin();

      await adminPage.navigateToAdmin();

      await expect(page).toHaveScreenshot(
        'admin-page.png',
        {
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

      await loginPage.gotoLoginPage();

      await loginPage.login();

      await loginPage.verifySuccessfulLogin();

      await leavePage.navigateToLeave();

      await expect(page).toHaveScreenshot(
        'leave-page.png',
        {
          maxDiffPixelRatio: 0.1,
        }
      );
    }
  );

});
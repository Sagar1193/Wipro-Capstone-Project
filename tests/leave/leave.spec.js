const { test } = require('../../fixtures/baseFixtures');

test.describe('Leave Module Tests', () => {

  test('Verify Leave Page Loaded', async ({
    loginPage,
    leavePage
  }) => {

    await loginPage.gotoLoginPage();

    await loginPage.login();

    await loginPage.verifySuccessfulLogin();

    await leavePage.navigateToLeave();

    await leavePage.verifyLeavePageLoaded();
  });

  test('Verify Search Button Visible', async ({
    loginPage,
    leavePage
  }) => {

    await loginPage.gotoLoginPage();

    await loginPage.login();

    await loginPage.verifySuccessfulLogin();

    await leavePage.navigateToLeave();

    await leavePage.verifySearchButtonVisible();
  });

  test('Verify Reset Button Visible', async ({
    loginPage,
    leavePage
  }) => {

    await loginPage.gotoLoginPage();

    await loginPage.login();

    await loginPage.verifySuccessfulLogin();

    await leavePage.navigateToLeave();

    await leavePage.verifyResetButtonVisible();
  });

  test('Verify Apply Leave Page', async ({
    loginPage,
    leavePage
    }) => {

    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await leavePage.navigateToLeave();

    await leavePage.verifyApplyLeavePage();
    });

    test('Verify Leave List Page', async ({
    loginPage,
    leavePage
    }) => {

    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await leavePage.navigateToLeave();

    await leavePage.verifyLeaveListPage();
    });

    test('Verify Assign Leave Page', async ({
    loginPage,
    leavePage
    }) => {

    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await leavePage.navigateToLeave();

    await leavePage.verifyAssignLeavePage();
    });

    test.skip('Verify Entitlements Page', async ({
    loginPage,
    leavePage
    }) => {

    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await leavePage.navigateToLeave();

    await leavePage.verifyEntitlementsPage();
    });

    test.skip('Verify My Leave Page', async ({
    loginPage,
    leavePage
    }) => {

    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await leavePage.navigateToLeave();

    await leavePage.verifyMyLeavePage();
    });

    test('Verify Leave Menu Visible', async ({
  loginPage,
  leavePage
}) => {
  await loginPage.gotoLoginPage();
  await loginPage.login();
  await loginPage.verifySuccessfulLogin();

  await leavePage.verifyLeaveMenuVisible();
});

test('Verify Leave Menu Enabled', async ({
  loginPage,
  leavePage
}) => {
  await loginPage.gotoLoginPage();
  await loginPage.login();
  await loginPage.verifySuccessfulLogin();

  await leavePage.verifyLeaveMenuEnabled();
});

test('Verify Apply Menu Visible', async ({
  loginPage,
  leavePage
}) => {
  await loginPage.gotoLoginPage();
  await loginPage.login();
  await loginPage.verifySuccessfulLogin();

  await leavePage.navigateToLeave();

  await leavePage.verifyApplyMenuVisible();
});

test('Verify Leave List Menu Visible', async ({
  loginPage,
  leavePage
}) => {
  await loginPage.gotoLoginPage();
  await loginPage.login();
  await loginPage.verifySuccessfulLogin();

  await leavePage.navigateToLeave();

  await leavePage.verifyLeaveListMenuVisible();
});

test('Verify Assign Leave Menu Visible', async ({
  loginPage,
  leavePage
}) => {
  await loginPage.gotoLoginPage();
  await loginPage.login();
  await loginPage.verifySuccessfulLogin();

  await leavePage.navigateToLeave();

  await leavePage.verifyAssignLeaveMenuVisible();
});

test.skip('Verify Leave Table Visible', async ({
  loginPage,
  leavePage
}) => {
  await loginPage.gotoLoginPage();
  await loginPage.login();
  await loginPage.verifySuccessfulLogin();

  await leavePage.navigateToLeave();

  await leavePage.verifyLeaveTableVisible();
});

test('Verify Leave Header Visible', async ({
  loginPage,
  leavePage
}) => {
  await loginPage.gotoLoginPage();
  await loginPage.login();
  await loginPage.verifySuccessfulLogin();

  await leavePage.navigateToLeave();

  await leavePage.verifyLeaveHeaderVisible();
});

test('Verify Search Button Enabled', async ({
  loginPage,
  leavePage
}) => {
  await loginPage.gotoLoginPage();
  await loginPage.login();
  await loginPage.verifySuccessfulLogin();

  await leavePage.navigateToLeave();

  await leavePage.verifySearchButtonEnabled();
});

test('Verify Reset Button Enabled', async ({
  loginPage,
  leavePage
}) => {
  await loginPage.gotoLoginPage();
  await loginPage.login();
  await loginPage.verifySuccessfulLogin();

  await leavePage.navigateToLeave();

  await leavePage.verifyResetButtonEnabled();
});

});
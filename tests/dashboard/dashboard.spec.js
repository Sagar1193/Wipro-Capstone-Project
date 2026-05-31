const { test } =
require('../../fixtures/baseFixtures');

test.describe('Dashboard Module Tests', () => {

  // 1
  test('Verify Dashboard Loaded', async ({
    loginPage,
    dashboardPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await dashboardPage.verifyDashboardLoaded();
  });

  // 2
  test('Verify Dashboard Menu Visible', async ({
    loginPage,
    dashboardPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await dashboardPage.verifyDashboardMenuVisible();
  });

  // 3
  test('Verify Time At Work Widget Visible', async ({
    loginPage,
    dashboardPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await dashboardPage.verifyTimeAtWorkWidgetVisible();
  });

  // 4
  test('Verify My Actions Widget Visible', async ({
    loginPage,
    dashboardPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await dashboardPage.verifyMyActionsWidgetVisible();
  });

  // 5
  test('Verify Quick Launch Widget Visible', async ({
    loginPage,
    dashboardPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await dashboardPage.verifyQuickLaunchWidgetVisible();
  });

  // 6
  test('Verify Buzz Widget Visible', async ({
    loginPage,
    dashboardPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await dashboardPage.verifyBuzzLatestPostsWidgetVisible();
  });

  // 7
  test('Verify Employees On Leave Widget Visible', async ({
    loginPage,
    dashboardPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await dashboardPage.verifyEmployeesOnLeaveWidgetVisible();
  });

  // 8
  test('Verify Employee Distribution Widget Visible', async ({
    loginPage,
    dashboardPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await dashboardPage.verifyEmployeeDistributionWidgetVisible();
  });

  // 9
  test('Verify Employee Location Widget Visible', async ({
    loginPage,
    dashboardPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await dashboardPage.verifyEmployeeLocationWidgetVisible();
  });

  // 10
  test('Verify Dashboard Header Visible', async ({
    loginPage,
    dashboardPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await dashboardPage.verifyDashboardHeaderVisible();
  });

  // 11
  test('Verify Dashboard Menu Enabled', async ({
    loginPage,
    dashboardPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await dashboardPage.verifyDashboardMenuEnabled();
  });

  // 12
  test('Verify Time At Work Widget Exists', async ({
    loginPage,
    dashboardPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await dashboardPage.verifyTimeAtWorkWidgetExists();
  });

  // 13
  test('Verify My Actions Widget Exists', async ({
    loginPage,
    dashboardPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await dashboardPage.verifyMyActionsWidgetExists();
  });

  // 14
  test('Verify Quick Launch Widget Exists', async ({
    loginPage,
    dashboardPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await dashboardPage.verifyQuickLaunchWidgetExists();
  });

  // 15
  test('Verify Buzz Widget Exists', async ({
    loginPage,
    dashboardPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await dashboardPage.verifyBuzzLatestPostsWidgetExists();
  });

});
const { test } = require('../../fixtures/baseFixtures');

test.describe('Admin Module Tests', () => {

  test('Verify Admin Page Loaded', async ({
    loginPage,
    adminPage
  }) => {

    await loginPage.gotoLoginPage();

    await loginPage.login();

    await loginPage.verifySuccessfulLogin();

    await adminPage.navigateToAdmin();

    await adminPage.verifyAdminPageLoaded();
  });

  test('Verify Add Button Visible', async ({
    loginPage,
    adminPage
  }) => {

    await loginPage.gotoLoginPage();

    await loginPage.login();

    await loginPage.verifySuccessfulLogin();

    await adminPage.navigateToAdmin();

    await adminPage.verifyAddButtonVisible();
  });

  test('Verify Reset Button Visible', async ({
    loginPage,
    adminPage
  }) => {

    await loginPage.gotoLoginPage();

    await loginPage.login();

    await loginPage.verifySuccessfulLogin();

    await adminPage.navigateToAdmin();

    await adminPage.verifyResetButtonVisible();
  });

  test('Verify Search Button Visible', async ({
    loginPage,
    adminPage
    }) => {

    await loginPage.gotoLoginPage();

    await loginPage.login();

    await loginPage.verifySuccessfulLogin();

    await adminPage.navigateToAdmin();

    await adminPage.verifySearchButtonVisible();
    });

    test('Verify Add User Page Loaded', async ({
        loginPage,
        adminPage
        }) => {

        await loginPage.gotoLoginPage();

        await loginPage.login();

        await loginPage.verifySuccessfulLogin();

        await adminPage.navigateToAdmin();

        await adminPage.verifyAddUserPageLoaded();
    });

    test('Verify Username Field Visible', async ({
  loginPage,
  adminPage
}) => {

  await loginPage.gotoLoginPage();
  await loginPage.login();
  await loginPage.verifySuccessfulLogin();

  await adminPage.navigateToAdmin();

  await adminPage.verifyUsernameFieldVisible();
});

test('Verify Employee Name Field Visible', async ({
  loginPage,
  adminPage
}) => {

  await loginPage.gotoLoginPage();
  await loginPage.login();
  await loginPage.verifySuccessfulLogin();

  await adminPage.navigateToAdmin();

  await adminPage.verifyEmployeeNameFieldVisible();
});

test('Verify System Users Header Visible', async ({
  loginPage,
  adminPage
}) => {

  await loginPage.gotoLoginPage();
  await loginPage.login();
  await loginPage.verifySuccessfulLogin();

  await adminPage.navigateToAdmin();

  await adminPage.verifySystemUsersHeaderVisible();
});

test('Verify Records Table Visible', async ({
  loginPage,
  adminPage
}) => {

  await loginPage.gotoLoginPage();
  await loginPage.login();
  await loginPage.verifySuccessfulLogin();

  await adminPage.navigateToAdmin();

  await adminPage.verifyRecordsTableVisible();
});

test('Verify Search Form Visible', async ({
  loginPage,
  adminPage
}) => {

  await loginPage.gotoLoginPage();
  await loginPage.login();
  await loginPage.verifySuccessfulLogin();

  await adminPage.navigateToAdmin();

  await adminPage.verifySearchFormVisible();
});

test('Verify Admin Menu Visible', async ({
  loginPage,
  adminPage
}) => {

  await loginPage.gotoLoginPage();
  await loginPage.login();
  await loginPage.verifySuccessfulLogin();

  await adminPage.verifyAdminMenuVisible();
});

test('Verify Add Button Enabled', async ({
  loginPage,
  adminPage
}) => {

  await loginPage.gotoLoginPage();
  await loginPage.login();
  await loginPage.verifySuccessfulLogin();

  await adminPage.navigateToAdmin();

  await adminPage.verifyAddButtonEnabled();
});

test('Verify Cancel Button Visible', async ({
  loginPage,
  adminPage
}) => {

  await loginPage.gotoLoginPage();
  await loginPage.login();
  await loginPage.verifySuccessfulLogin();

  await adminPage.navigateToAdmin();

  await adminPage.verifyCancelButtonVisible();
});

test('Verify Save Button Visible', async ({
  loginPage,
  adminPage
}) => {

  await loginPage.gotoLoginPage();
  await loginPage.login();
  await loginPage.verifySuccessfulLogin();

  await adminPage.navigateToAdmin();

  await adminPage.verifySaveButtonVisible();
});

test('Verify User Role Dropdown Visible', async ({
  loginPage,
  adminPage
}) => {

  await loginPage.gotoLoginPage();
  await loginPage.login();
  await loginPage.verifySuccessfulLogin();

  await adminPage.navigateToAdmin();

  await adminPage.verifyUserRoleDropdownVisible();
});

});
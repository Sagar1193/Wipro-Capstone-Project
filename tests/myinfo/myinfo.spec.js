const { test } =
require('../../fixtures/baseFixtures');

test.describe('My Info Module Tests', () => {

  test('Verify My Info Page Loaded', async ({
    loginPage,
    myInfoPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await myInfoPage.navigateToMyInfo();

    await myInfoPage.verifyMyInfoPageLoaded();
  });

  test('Verify My Info Menu Visible', async ({
    loginPage,
    myInfoPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await myInfoPage.verifyMyInfoMenuVisible();
  });

  test('Verify First Name Field Visible', async ({
    loginPage,
    myInfoPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await myInfoPage.navigateToMyInfo();

    await myInfoPage.verifyFirstNameFieldVisible();
  });

  test('Verify Middle Name Field Visible', async ({
    loginPage,
    myInfoPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await myInfoPage.navigateToMyInfo();

    await myInfoPage.verifyMiddleNameFieldVisible();
  });

  test('Verify Last Name Field Visible', async ({
    loginPage,
    myInfoPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await myInfoPage.navigateToMyInfo();

    await myInfoPage.verifyLastNameFieldVisible();
  });

  test('Verify Employee ID Field Visible', async ({
    loginPage,
    myInfoPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await myInfoPage.navigateToMyInfo();

    await myInfoPage.verifyEmployeeIdFieldVisible();
  });

  test('Verify Save Button Visible', async ({
    loginPage,
    myInfoPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await myInfoPage.navigateToMyInfo();

    await myInfoPage.verifySaveButtonVisible();
  });

  test('Verify Save Button Enabled', async ({
    loginPage,
    myInfoPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await myInfoPage.navigateToMyInfo();

    await myInfoPage.verifySaveButtonEnabled();
  });

  test('Verify Profile Image Visible', async ({
    loginPage,
    myInfoPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await myInfoPage.navigateToMyInfo();

    await myInfoPage.verifyProfileImageVisible();
  });

  test('Verify Form Visible', async ({
    loginPage,
    myInfoPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await myInfoPage.navigateToMyInfo();

    await myInfoPage.verifyFormVisible();
  });

  test('Verify First Name Enabled', async ({
    loginPage,
    myInfoPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await myInfoPage.navigateToMyInfo();

    await myInfoPage.verifyFirstNameEnabled();
  });

  test('Verify Middle Name Enabled', async ({
    loginPage,
    myInfoPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await myInfoPage.navigateToMyInfo();

    await myInfoPage.verifyMiddleNameEnabled();
  });

  test('Verify Last Name Enabled', async ({
    loginPage,
    myInfoPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await myInfoPage.navigateToMyInfo();

    await myInfoPage.verifyLastNameEnabled();
  });

  test('Verify Employee ID Enabled', async ({
    loginPage,
    myInfoPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await myInfoPage.navigateToMyInfo();

    await myInfoPage.verifyEmployeeIdEnabled();
  });

  test('Verify Personal Details Header Visible', async ({
    loginPage,
    myInfoPage
  }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await myInfoPage.navigateToMyInfo();

    await myInfoPage.verifyPersonalDetailsHeaderVisible();
  });

});
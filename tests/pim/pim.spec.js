const path = require('path');

const { test, expect } = require('../../fixtures/baseFixtures');

const { TestData } = require('../../utils/testData');

const { Logger } = require('../../utils/logger');

test.describe('PIM Module Tests', () => {

  test.skip('Add New Employee', async ({
    loginPage,
    pimPage
  }) => {
    Logger.info('Starting Add Employee Test');
    const employee = TestData.generateEmployee();
    await loginPage.loginAndVerify();
    await pimPage.navigateToPIM();
    await pimPage.clickAddEmployee();
    await pimPage.addEmployee(
      employee.firstName,
      employee.lastName
    );
    await pimPage.verifyEmployeeAdded();
    Logger.info(
      'Employee Added Successfully'
    );
  });

  test('Search Employee In Table', async ({
    loginPage,
    pimPage
  }) => {
    Logger.info(
      'Starting Employee Search Test'
    );
    const employee =
      TestData.generateEmployee();
    await loginPage.loginAndVerify();
    await pimPage.navigateToPIM();
    await pimPage.clickAddEmployee();
    await pimPage.addEmployee(
      employee.firstName,
      employee.lastName
    );
    await pimPage.verifyEmployeeAdded();
    await pimPage.navigateToPIM();
    await pimPage.searchEmployee(
      employee.firstName
    );
    await pimPage.verifyEmployeeInTable(
      employee.firstName
    );
    Logger.info(
      'Employee Search Successful'
    );
  });

  test('Validate Employee Table Count', async ({
    loginPage,
    pimPage
  }) => {
    Logger.info(
      'Starting Employee Count Validation'
    );
    await loginPage.loginAndVerify();
    await pimPage.navigateToPIM();
    const count = await pimPage.getEmployeeCount();
    console.log(
      `Employee Count: ${count}`
    );
    expect(count).toBeGreaterThan(0);
    Logger.info(
      'Employee Count Validation Completed'
    );
  });

  test('Upload Employee Profile Image', async ({
    loginPage,
    pimPage
  }) => {
    Logger.info(
      'Starting Profile Upload Test'
    );
    await loginPage.loginAndVerify();
    await pimPage.navigateToMyInfo();
    const filePath = path.join(
      __dirname,
      '../../test-data/images/profile.png'
    );
    await pimPage.uploadProfileImage(
      filePath
    );
    await pimPage.verifyProfileImageUploaded();
    Logger.info(
      'Profile Upload Successful'
    );
  });

  test('Edit Employee Details', async ({
    loginPage,
    pimPage
  }) => {
    Logger.info(
      'Starting Edit Employee Test'
    );
    await loginPage.loginAndVerify();
    await pimPage.navigateToPIM();
    await pimPage.editEmployee();
    Logger.info(
      'Employee Edit Successful'
    );
  });

  test.skip('Delete Employee', async ({
    loginPage,
    pimPage
  }) => {
    Logger.info(
      'Starting Delete Employee Test'
    );
    await loginPage.loginAndVerify();
    await pimPage.navigateToPIM();
    await pimPage.deleteEmployee();
    Logger.info(
      'Employee Deleted Successfully'
    );
  });

  // test('Search Employee By ID', async ({
  //   loginPage,
  //   pimPage
  // }) => {

  //   Logger.info(
  //     'Starting Employee ID Search Test'
  //   );

  //   await loginPage.gotoLoginPage();

  //   await loginPage.login();

  //   await loginPage.verifySuccessfulLogin();

  //   await pimPage.navigateToPIM();

  //   const employeeId =
  //     await pimPage.getFirstEmployeeId();

  //   console.log(
  //     `Searching Employee ID: ${employeeId}`
  //   );

  //   await pimPage.searchEmployeeById(
  //     employeeId
  //   );

  //   await pimPage.verifyEmployeeIdSearch(
  //     employeeId
  //   );

  //   Logger.info(
  //     'Employee ID Search Successful'
  //   );
  // });

  test('Reset Employee Search Filters', async ({
    loginPage,
    pimPage
  }) => {
    Logger.info(
      'Starting Reset Search Test'
    );
    await loginPage.loginAndVerify();
    await pimPage.navigateToPIM();
    await pimPage.resetEmployeeSearch();
    Logger.info(
      'Reset Search Successful'
    );
  });

  test('Verify PIM Page Load', async ({
    loginPage,
    pimPage
  }) => {
    Logger.info(
      'Starting PIM Page Load Test'
    );
    await loginPage.loginAndVerify();
    await pimPage.navigateToPIM();
    await pimPage.verifyPIMPageLoaded();
    Logger.info(
      'PIM Page Loaded Successfully'
    );
  });

  test('Verify Add Employee Button Visible', async ({
    loginPage,
    pimPage
  }) => {
    Logger.info(
      'Starting Add Button Validation'
    );
    await loginPage.loginAndVerify();
    await pimPage.navigateToPIM();
    await pimPage.verifyAddEmployeeButtonVisible();
    Logger.info(
      'Add Button Validation Successful'
    );
  });

  test('Cancel Add Employee', async ({
    loginPage,
    pimPage
  }) => {
    Logger.info(
      'Starting Cancel Employee Test'
    );
    await loginPage.loginAndVerify();
    await pimPage.navigateToPIM();
    await pimPage.cancelAddEmployee();
    Logger.info(
      'Cancel Employee Test Successful'
    );
  });

  // test('Verify Personal Details Page', async ({
  //   loginPage,
  //   pimPage
  // }) => {

  //   await loginPage.gotoLoginPage();

  //   await loginPage.login();

  //   await loginPage.verifySuccessfulLogin();

  //   await pimPage.navigateToPIM();

  //   await pimPage.verifyPersonalDetailsPage();
  // });

  test('Verify Add Employee Page Loaded', async ({
    loginPage,
    pimPage
  }) => {
    await loginPage.loginAndVerify();
    await pimPage.navigateToPIM();
    await pimPage.verifyAddEmployeePageLoaded();
  });

  test('Verify Save Button Visible', async ({
    loginPage,
    pimPage
  }) => {
    await loginPage.loginAndVerify();
    await pimPage.navigateToPIM();
    await pimPage.verifySaveButtonVisible();
  });

  test('Verify Cancel Button Visible', async ({
    loginPage,
    pimPage
  }) => {
    await loginPage.loginAndVerify();
    await pimPage.navigateToPIM();
    await pimPage.verifyCancelButtonVisible();
  });

  test('Verify Employee ID Visible', async ({
    loginPage,
    pimPage
  }) => {
    await loginPage.loginAndVerify();
    await pimPage.navigateToPIM();
    await pimPage.verifyEmployeeIdVisible();
  });

  test('Verify First Name Required', async ({
    loginPage,
    pimPage
  }) => {
    await loginPage.loginAndVerify();
    await pimPage.navigateToPIM();
    await pimPage.verifyFirstNameRequired();
  });

  test('Verify Employee List Page Loads', async ({
    loginPage,
    pimPage
  }) => {
    await loginPage.loginAndVerify();
    await pimPage.navigateToPIM();
    await pimPage.verifyEmployeeListLoaded();
  });

  test('Search Invalid Employee', async ({
    loginPage,
    pimPage
  }) => {
    await loginPage.loginAndVerify();
    await pimPage.navigateToPIM();
    await pimPage.searchInvalidEmployee();
  });

  test('Search Empty Employee', async ({
    loginPage,
    pimPage
  }) => {
    await loginPage.loginAndVerify();
    await pimPage.navigateToPIM();
    await pimPage.searchEmptyEmployee();
  });

  test('Verify Search Button Visible', async ({
    loginPage,
    pimPage
  }) => {
    await loginPage.loginAndVerify();
    await pimPage.navigateToPIM();
    await pimPage.verifySearchButtonVisible();
  });

  test('Verify Reset Button Visible', async ({
    loginPage,
    pimPage
  }) => {
    await loginPage.loginAndVerify();
    await pimPage.navigateToPIM();
    await pimPage.verifyResetButtonVisible();
  });
});
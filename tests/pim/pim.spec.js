const path = require('path');

const { test, expect } = require('../../fixtures/baseFixtures');

const { TestData } = require('../../utils/testData');

const { Logger } = require('../../utils/logger');

test.describe('PIM Module Tests', () => {

  test('Add New Employee', async ({
    loginPage,
    pimPage
  }) => {

    Logger.info('Starting Add Employee Test');

    const employee =
      TestData.generateEmployee();

    await loginPage.gotoLoginPage();

    await loginPage.login();

    await loginPage.verifySuccessfulLogin();

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

    await loginPage.gotoLoginPage();

    await loginPage.login();

    await loginPage.verifySuccessfulLogin();

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

    await loginPage.gotoLoginPage();

    await loginPage.login();

    await loginPage.verifySuccessfulLogin();

    await pimPage.navigateToPIM();

    const count =
      await pimPage.getEmployeeCount();

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

    await loginPage.gotoLoginPage();

    await loginPage.login();

    await loginPage.verifySuccessfulLogin();

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

});
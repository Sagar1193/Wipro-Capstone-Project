const { test } =
require('../../fixtures/baseFixtures');

test.describe(
  'Recruitment Module Tests',
  () => {

  test('Verify Recruitment Page Loaded', async ({
    loginPage,
    recruitmentPage
  }) => {
    await loginPage.loginAndVerify();
    await recruitmentPage.navigateToRecruitment();
    await recruitmentPage.verifyRecruitmentPageLoaded();
  });

  test('Verify Add Button Visible', async ({
    loginPage,
    recruitmentPage
  }) => {
    await loginPage.loginAndVerify();
    await recruitmentPage.navigateToRecruitment();
    await recruitmentPage.verifyAddButtonVisible();
  });

  test('Verify Search Button Visible', async ({
    loginPage,
    recruitmentPage
  }) => {
    await loginPage.loginAndVerify();
    await recruitmentPage.navigateToRecruitment();
    await recruitmentPage.verifySearchButtonVisible();
  });

  test('Verify Reset Button Visible', async ({
    loginPage,
    recruitmentPage
  }) => {
    await loginPage.loginAndVerify();
    await recruitmentPage.navigateToRecruitment();
    await recruitmentPage.verifyResetButtonVisible();
  });

  test('Verify Candidates Tab Visible', async ({
    loginPage,
    recruitmentPage
  }) => {
    await loginPage.loginAndVerify();
    await recruitmentPage.navigateToRecruitment();
    await recruitmentPage.verifyCandidatesTabVisible();
  });

  test('Verify Vacancies Tab Visible', async ({
    loginPage,
    recruitmentPage
  }) => {
    await loginPage.loginAndVerify();
    await recruitmentPage.navigateToRecruitment();
    await recruitmentPage.verifyVacanciesTabVisible();
  });

  test('Verify Recruitment Menu Visible', async ({
    loginPage,
    recruitmentPage
  }) => {
    await loginPage.loginAndVerify();
    await recruitmentPage.verifyRecruitmentMenuVisible();
  });

  test('Verify Add Button Enabled', async ({
    loginPage,
    recruitmentPage
  }) => {
    await loginPage.loginAndVerify();
    await recruitmentPage.navigateToRecruitment();
    await recruitmentPage.verifyAddButtonEnabled();
  });

  test('Verify Search Button Enabled', async ({
    loginPage,
    recruitmentPage
  }) => {
    await loginPage.loginAndVerify();
    await recruitmentPage.navigateToRecruitment();
    await recruitmentPage.verifySearchButtonEnabled();
  });

  test('Verify Reset Button Enabled', async ({
    loginPage,
    recruitmentPage
  }) => {
    await loginPage.loginAndVerify();
    await recruitmentPage.navigateToRecruitment();
    await recruitmentPage.verifyResetButtonEnabled();
  });

  test('Verify Table Visible', async ({
    loginPage,
    recruitmentPage
  }) => {
    await loginPage.loginAndVerify();
    await recruitmentPage.navigateToRecruitment();
    await recruitmentPage.verifyTableVisible();
  });

  test('Verify Form Visible', async ({
    loginPage,
    recruitmentPage
  }) => {
    await loginPage.loginAndVerify();
    await recruitmentPage.navigateToRecruitment();
    await recruitmentPage.verifyFormVisible();
  });

  test('Verify Header Visible', async ({
    loginPage,
    recruitmentPage
  }) => {
    await loginPage.loginAndVerify();
    await recruitmentPage.navigateToRecruitment();
    await recruitmentPage.verifyHeaderVisible();
  });

  test('Verify Candidates Page', async ({
    loginPage,
    recruitmentPage
  }) => {
    await loginPage.loginAndVerify();
    await recruitmentPage.navigateToRecruitment();
    await recruitmentPage.verifyCandidatesPage();
  });

  test('Verify Vacancies Page', async ({
    loginPage,
    recruitmentPage
  }) => {
    await loginPage.loginAndVerify();
    await recruitmentPage.navigateToRecruitment();
    await recruitmentPage.verifyVacanciesPage();
  });

});
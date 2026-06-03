const { test, expect } =
require('../../fixtures/baseFixtures');

test.describe('Navigation Tests', () => {

  test('Dashboard Menu Visible',
  async ({ page, loginPage }) => {

    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await expect(
      page.getByRole('link', {
        name: 'Dashboard'
      })
    ).toBeVisible({
      timeout: 30000
    });
  });

  test('PIM Menu Visible',
  async ({ page, loginPage }) => {

    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await expect(
      page.getByRole('link', {
        name: 'Dashboard'
      })
    ).toBeVisible({
      timeout: 30000
    });

    await expect(
      page.getByRole('link', {
        name: 'PIM'
      })
    ).toBeVisible({
      timeout: 30000
    });
  });

  test('Admin Menu Visible',
  async ({ page, loginPage }) => {

    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await expect(
      page.getByRole('link', {
        name: 'Dashboard'
      })
    ).toBeVisible({
      timeout: 30000
    });

    await expect(
      page.getByRole('link', {
        name: 'Admin'
      })
    ).toBeVisible({
      timeout: 30000
    });
  });

  test('Leave Menu Visible',
  async ({ page, loginPage }) => {

    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await expect(
      page.getByRole('link', {
        name: 'Dashboard'
      })
    ).toBeVisible({
      timeout: 30000
    });

    await expect(
      page.getByRole('link', {
        name: 'Leave'
      })
    ).toBeVisible({
      timeout: 30000
    });
  });

  test('Recruitment Menu Visible',
  async ({ page, loginPage }) => {

    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await expect(
      page.getByRole('link', {
        name: 'Dashboard'
      })
    ).toBeVisible({
      timeout: 30000
    });

    await expect(
      page.getByRole('link', {
        name: 'Recruitment'
      })
    ).toBeVisible({
      timeout: 30000
    });
  });

  test('My Info Menu Visible',
  async ({ page, loginPage }) => {

    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();

    await expect(
      page.getByRole('link', {
        name: 'Dashboard'
      })
    ).toBeVisible({
      timeout: 30000
    });

    await expect(
      page.getByRole('link', {
        name: 'My Info'
      })
    ).toBeVisible({
      timeout: 30000
    });
  });

});
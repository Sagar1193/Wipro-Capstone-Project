const { test, expect } =
require('../../fixtures/baseFixtures');

test.describe('Navigation Tests', () => {

  test('Dashboard Menu Visible',
  async ({ page, loginPage }) => {

    await loginPage.gotoLoginPage();
    await loginPage.login();

    await expect(
      page.getByRole('link', {
        name: 'Dashboard'
      })
    ).toBeVisible();
  });

  test('PIM Menu Visible',
  async ({ page, loginPage }) => {

    await loginPage.gotoLoginPage();
    await loginPage.login();

    await expect(
      page.getByRole('link', {
        name: 'PIM'
      })
    ).toBeVisible();
  });

  test('Admin Menu Visible',
  async ({ page, loginPage }) => {

    await loginPage.gotoLoginPage();
    await loginPage.login();

    await expect(
      page.getByRole('link', {
        name: 'Admin'
      })
    ).toBeVisible();
  });

  test('Leave Menu Visible',
  async ({ page, loginPage }) => {

    await loginPage.gotoLoginPage();
    await loginPage.login();

    await expect(
      page.getByRole('link', {
        name: 'Leave'
      })
    ).toBeVisible();
  });

  test('Recruitment Menu Visible',
  async ({ page, loginPage }) => {

    await loginPage.gotoLoginPage();
    await loginPage.login();

    await expect(
      page.getByRole('link', {
        name: 'Recruitment'
      })
    ).toBeVisible();
  });

  test('My Info Menu Visible',
  async ({ page, loginPage }) => {

    await loginPage.gotoLoginPage();
    await loginPage.login();

    await expect(
      page.getByRole('link', {
        name: 'My Info'
      })
    ).toBeVisible();
  });

});
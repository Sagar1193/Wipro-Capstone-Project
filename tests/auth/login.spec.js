const { test, expect } =
require('../../fixtures/baseFixtures');

test.describe('Authentication Tests', () => {

  test('@smoke Valid Login',
    async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();
  });

  test('@regression Invalid Password',
    async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login(
      'Admin',
      'wrongpassword'
    );
    await loginPage.verifyInvalidCredentialsError();
  });

  test('@regression Invalid Username',
    async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login(
      'WrongUser',
      'admin123'
    );
    await loginPage.verifyInvalidCredentialsError();
  });

  test('@regression Empty Username',
    async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login(
      '',
      'admin123'
    );
    await loginPage.verifyRequiredFieldError();
  });

  test('@regression Empty Password',
    async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login(
      'Admin',
      ''
    );
    await loginPage.verifyRequiredFieldError();
  });

  test('@regression Empty Credentials',
    async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login(
      '',
      ''
    );
    await loginPage.verifyRequiredFieldError();
  });

  test('@sanity Password Mask Validation',
    async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await expect(
      loginPage.passwordInput
    ).toHaveAttribute(
      'type',
      'password'
    );
  });

  test('@regression Username With Spaces',
    async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login(
      ' ',
      'admin123'
    );
    await loginPage.verifyRequiredFieldError();
  });

  test('@regression Password With Spaces',
    async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login(
      'Admin',
      ' '
    );
    await loginPage.verifyRequiredFieldError();
  });

  test('@sanity Login Page Title Validation',
    async ({ page, loginPage }) => {
    await loginPage.gotoLoginPage();
    await expect(page)
      .toHaveTitle(/OrangeHRM/);
  });

  test('@sanity Login Button Visible',
    async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await expect(
      loginPage.loginButton
    ).toBeVisible();
  });

  test('@sanity Username Field Visible',
    async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await expect(
      loginPage.usernameInput
    ).toBeVisible();
  });

  test('@sanity Password Field Visible',
    async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await expect(
      loginPage.passwordInput
    ).toBeVisible();
  });

  test('@sanity Forgot Password Link Visible',
    async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await expect(
      loginPage.forgotPasswordLink
    ).toBeVisible();
  });

  test('@sanity OrangeHRM Logo Visible',
    async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await expect(
    loginPage.orangeHRMLogo
  ).toBeVisible({
    timeout: 30000
  });
  });

});
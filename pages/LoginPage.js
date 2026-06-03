const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {

  constructor(page) {
    super(page);

    this.usernameInput =
      page.locator('input[name="username"]');

    this.passwordInput =
      page.locator('input[name="password"]');

    this.loginButton =
      page.getByRole('button', {
        name: 'Login'
      });

    this.dashboardHeader =
      page.locator('.oxd-topbar-header-title');

    this.credentialText =
      page.locator(
        '.orangehrm-demo-credentials p'
      );

    this.invalidCredentialsError =
      page.locator(
        '.oxd-alert-content-text'
      );

    this.requiredFieldError =
      page.locator(
        '.oxd-input-field-error-message'
      ).first();

    this.forgotPasswordLink =
      page.getByText(
        'Forgot your password?'
      );

    this.orangeHRMLogo =
      page.locator(
        'img[alt="company-branding"]'
      );

    this.userDropdown =
      page.locator(
        '.oxd-userdropdown-name'
      );
  }

  async gotoLoginPage() {
    await this.page.goto(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
      {
        waitUntil: 'domcontentloaded',
        timeout: 120000
      }
    );
    await expect(
      this.usernameInput
    ).toBeVisible({
      timeout: 60000
    });
  }

  async getCredentials() {
    const texts = await this.credentialText.allTextContents();
    const username = texts[0].replace('Username :', '').trim();
    const password = texts[1].replace('Password :', '').trim();
    return {
      username,
      password
    };
  }

  async login(
    username = process.env.APP_USERNAME,
    password = process.env.APP_PASSWORD
  ) {

    await this.usernameInput.fill('');
    await this.passwordInput.fill('');

    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);

    await this.loginButton.click();
  }

  async verifySuccessfulLogin() {
    await this.page.waitForURL(
      '**/dashboard/index',
      {
        timeout: 60000
      }
    );
    await expect(
      this.userDropdown
    ).toBeVisible();
  }

  async verifyInvalidCredentialsError() {
    await expect(
      this.page.getByText(
        'Invalid credentials'
      )
    ).toBeVisible({
      timeout: 15000
    });
  }

  // async verifyInvalidCredentialsError() {

  //   await expect(
  //     this.invalidCredentialsError
  //   ).toBeVisible({
  //     timeout: 10000
  //   });

  //   await expect(
  //     this.invalidCredentialsError
  //   ).toContainText(
  //     'Invalid credentials'
  //   );
  // }

  async verifyRequiredFieldError() {
    await expect(
      this.requiredFieldError
    ).toBeVisible({
      timeout: 10000
    });
    await expect(
      this.requiredFieldError
    ).toContainText(
      'Required'
    );
  }

  async loginAndVerify() {
    await this.gotoLoginPage();
    await this.login();
    await this.verifySuccessfulLogin();
  }
}

module.exports = { LoginPage };
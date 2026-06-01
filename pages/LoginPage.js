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

    await this.page.waitForSelector(
      'input[name="username"]',
      {
        state: 'visible',
        timeout: 30000
      }
    );
  }

  async getCredentials() {

    const texts =
      await this.credentialText
        .allTextContents();

    const username =
      texts[0]
        .replace('Username :', '')
        .trim();

    const password =
      texts[1]
        .replace('Password :', '')
        .trim();

    return {
      username,
      password
    };
  }

  async login(
    username = process.env.APP_USERNAME,
    password = process.env.APP_PASSWORD
  ) {

    await this.usernameInput.waitFor({
      state: 'visible',
      timeout: 30000
    });

    await this.passwordInput.waitFor({
      state: 'visible',
      timeout: 30000
    });

    await this.usernameInput.clear();
    await this.passwordInput.clear();

    await this.usernameInput.fill(
      username
    );

    await this.passwordInput.fill(
      password
    );

    await Promise.all([
      this.page.waitForURL(
        '**/dashboard/index',
        {
          timeout: 30000
        }
      ),
      this.loginButton.click()
    ]);

    console.log(
      'Current URL:',
      await this.page.url()
    );
}

  async verifySuccessfulLogin() {

  await this.page.waitForLoadState(
    'networkidle'
  );

  await expect(
    this.userDropdown
  ).toBeVisible({
    timeout: 60000
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

  async verifyInvalidCredentialsError() {

  await expect(
    this.page.getByText(
      'Invalid credentials'
    )
  ).toBeVisible({
    timeout: 15000
  });
}

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
}

module.exports = { LoginPage };
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim\pim.spec.js >> PIM Module Tests >> Edit Employee Details
- Location: tests\pim\pim.spec.js:151:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-userdropdown-tab')
Expected: visible
Timeout: 30000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for locator('.oxd-userdropdown-tab')

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- alert:
  - text: 
  - paragraph: Invalid credentials
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text:  Password
- textbox "Password"
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.8
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | const { BasePage } = require('./BasePage');
  3  | 
  4  | class LoginPage extends BasePage{
  5  | 
  6  |   constructor(page) {
  7  |     super(page);
  8  | 
  9  |     this.usernameInput = page.locator('input[name="username"]');
  10 | 
  11 |     this.passwordInput = page.locator('input[name="password"]');
  12 | 
  13 |     this.loginButton = page.getByRole('button', { name: 'Login' });
  14 | 
  15 |     this.dashboardHeader =
  16 |       page.locator('.oxd-topbar-header-title');
  17 | 
  18 |     this.credentialText = page.locator('.orangehrm-demo-credentials p');
  19 | 
  20 |     this.requiredFieldError =
  21 |       page.locator(
  22 |         '.oxd-input-field-error-message'
  23 |       ).first();
  24 | 
  25 |       this.invalidCredentialsError =
  26 |         page.locator(
  27 |           '.oxd-alert-content-text'
  28 |         );
  29 | 
  30 |       this.requiredFieldError =
  31 |         page.locator(
  32 |           '.oxd-input-field-error-message'
  33 |         ).first();
  34 | 
  35 |     this.passwordInput =
  36 |       page.locator('input[name="password"]');
  37 |   }
  38 | 
  39 |   async gotoLoginPage() {
  40 |     await this.navigate('/');
  41 |     await this.page.waitForLoadState(
  42 |       'domcontentloaded'
  43 |     );
  44 |   }
  45 | 
  46 |   async getCredentials() {
  47 | 
  48 |     const texts = await this.credentialText.allTextContents();
  49 | 
  50 |     const username = texts[0].replace('Username :', '').trim();
  51 | 
  52 |     const password = texts[1].replace('Password :', '').trim();
  53 | 
  54 |     return { username, password };
  55 |   }
  56 | 
  57 |   async login(
  58 |     username = process.env.USERNAME,
  59 |     password = process.env.PASSWORD
  60 |   ) {
  61 | 
  62 |     await this.usernameInput.waitFor({
  63 |       state: 'visible',
  64 |       timeout: 30000
  65 |     });
  66 | 
  67 |     await this.usernameInput.clear();
  68 | 
  69 |     await this.passwordInput.clear();
  70 | 
  71 |     await this.usernameInput.fill(username);
  72 | 
  73 |     await this.passwordInput.fill(password);
  74 | 
  75 |     await this.loginButton.waitFor({
  76 |       state: 'visible'
  77 |     });
  78 | 
  79 |     await this.loginButton.click();
  80 | 
  81 |     await this.page.waitForTimeout(3000);
  82 |   }
  83 | 
  84 |   async verifySuccessfulLogin() {
  85 |     await expect(
  86 |       this.page.locator('.oxd-userdropdown-tab')
> 87 |     ).toBeVisible({
     |       ^ Error: expect(locator).toBeVisible() failed
  88 |       timeout: 30000
  89 |     });
  90 |   }
  91 | }
  92 | 
  93 | module.exports = { LoginPage };
```
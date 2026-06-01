# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.spec.js >> Authentication Tests >> @smoke Valid Login
- Location: tests\auth\login.spec.js:6:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-topbar-header-breadcrumb')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for locator('.oxd-topbar-header-breadcrumb')

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
  44 |     await this.page.waitForTimeout(2000);
  45 |   }
  46 | 
  47 |   async getCredentials() {
  48 | 
  49 |     const texts = await this.credentialText.allTextContents();
  50 | 
  51 |     const username = texts[0].replace('Username :', '').trim();
  52 | 
  53 |     const password = texts[1].replace('Password :', '').trim();
  54 | 
  55 |     return { username, password };
  56 |   }
  57 | 
  58 |   async login(
  59 |     username = process.env.USERNAME,
  60 |     password = process.env.PASSWORD
  61 |   ) {
  62 | 
  63 |     await this.usernameInput.waitFor({
  64 |       state: 'visible',
  65 |       timeout: 30000
  66 |     });
  67 | 
  68 |     await this.usernameInput.clear();
  69 | 
  70 |     await this.passwordInput.clear();
  71 | 
  72 |     await this.usernameInput.fill(username);
  73 | 
  74 |     await this.passwordInput.fill(password);
  75 | 
  76 |     await this.loginButton.waitFor({
  77 |       state: 'visible'
  78 |     });
  79 | 
  80 |     await this.loginButton.click();
  81 | 
  82 |     await this.page.waitForTimeout(3000);
  83 |   }
  84 | 
  85 |   async verifySuccessfulLogin() {
  86 |     await this.page.waitForTimeout(5000);
  87 |     await expect(
  88 |       this.page.locator('.oxd-topbar-header-breadcrumb')
> 89 |     ).toBeVisible({
     |       ^ Error: expect(locator).toBeVisible() failed
  90 |       timeout: 30000
  91 |     });
  92 |   }
  93 | }
  94 | 
  95 | module.exports = { LoginPage };
```
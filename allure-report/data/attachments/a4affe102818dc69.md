# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\apiMock.spec.js >> API Mocking Tests >> Mock Employee API Response
- Location: tests\api\apiMock.spec.js:6:3

# Error details

```
Error: locator.waitFor: Test ended.
Call log:
  - waiting for locator('input[name="username"]') to be visible

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
  15 |     this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' });
  16 | 
  17 |     this.credentialText = page.locator('.orangehrm-demo-credentials p');
  18 |   }
  19 | 
  20 |   async gotoLoginPage() {
  21 | 
  22 |     await this.navigate('/');
  23 | 
> 24 |     await this.usernameInput.waitFor({
     |                              ^ Error: locator.waitFor: Test ended.
  25 |       state: 'visible'
  26 |     });
  27 |   }
  28 | 
  29 |   async getCredentials() {
  30 | 
  31 |     const texts = await this.credentialText.allTextContents();
  32 | 
  33 |     const username = texts[0].replace('Username :', '').trim();
  34 | 
  35 |     const password = texts[1].replace('Password :', '').trim();
  36 | 
  37 |     return { username, password };
  38 |   }
  39 | 
  40 |   async login() {
  41 | 
  42 |     const credentials = await this.getCredentials();
  43 | 
  44 |     await this.usernameInput.fill(credentials.username);
  45 | 
  46 |     await this.passwordInput.fill(credentials.password);
  47 | 
  48 |     await this.loginButton.click();
  49 |   }
  50 | 
  51 |   async verifySuccessfulLogin() {
  52 | 
  53 |     await expect(this.dashboardHeader).toBeVisible({
  54 |       timeout: 20000
  55 |     });
  56 |   }
  57 | }
  58 | 
  59 | module.exports = { LoginPage };
```
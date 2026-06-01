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

Locator: getByRole('heading', { name: 'Dashboard' })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for getByRole('heading', { name: 'Dashboard' })
    - waiting for navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

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
  18 | 
  19 |     this.invalidCredentialsError =
  20 |       page.getByText('Invalid credentials');
  21 | 
  22 |     this.requiredFieldError =
  23 |       page.getByText('Required');
  24 | 
  25 |     this.passwordInput =
  26 |       page.locator('input[name="password"]');
  27 |   }
  28 | 
  29 |   async gotoLoginPage() {
  30 | 
  31 |     await this.navigate('/');
  32 | 
  33 |     await this.usernameInput.waitFor({
  34 |       state: 'visible'
  35 |     });
  36 |   }
  37 | 
  38 |   async getCredentials() {
  39 | 
  40 |     const texts = await this.credentialText.allTextContents();
  41 | 
  42 |     const username = texts[0].replace('Username :', '').trim();
  43 | 
  44 |     const password = texts[1].replace('Password :', '').trim();
  45 | 
  46 |     return { username, password };
  47 |   }
  48 | 
  49 |   async login(
  50 |     username = process.env.USERNAME,
  51 |     password = process.env.PASSWORD
  52 |   ) {
  53 | 
  54 |     await this.usernameInput.fill(username);
  55 | 
  56 |     await this.passwordInput.fill(password);
  57 | 
  58 |     await this.loginButton.waitFor({
  59 |       state: 'visible'
  60 |     });
  61 | 
  62 |     await this.loginButton.click({
  63 |       force: true
  64 |     });
  65 |   }
  66 | 
  67 |   async verifySuccessfulLogin() {
  68 | 
> 69 |     await expect(this.dashboardHeader).toBeVisible({
     |                                        ^ Error: expect(locator).toBeVisible() failed
  70 |       timeout: 20000
  71 |     });
  72 |   }
  73 | }
  74 | 
  75 | module.exports = { LoginPage };
```
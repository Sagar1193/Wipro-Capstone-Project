# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim\pim.spec.js >> PIM Module Tests >> Reset Employee Search Filters
- Location: tests\pim\pim.spec.js:236:3

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Login' })
    - locator resolved to <button type="submit" data-v-10d463b7="" data-v-0af708be="" class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action
    - click action done
    - waiting for scheduled navigations to finish

```

# Test source

```ts
  2   | const { BasePage } = require('./BasePage');
  3   | 
  4   | class LoginPage extends BasePage {
  5   | 
  6   |   constructor(page) {
  7   |     super(page);
  8   | 
  9   |     this.usernameInput =
  10  |       page.locator('input[name="username"]');
  11  | 
  12  |     this.passwordInput =
  13  |       page.locator('input[name="password"]');
  14  | 
  15  |     this.loginButton =
  16  |       page.getByRole('button', {
  17  |         name: 'Login'
  18  |       });
  19  | 
  20  |     this.dashboardHeader =
  21  |       page.locator('.oxd-topbar-header-title');
  22  | 
  23  |     this.credentialText =
  24  |       page.locator(
  25  |         '.orangehrm-demo-credentials p'
  26  |       );
  27  | 
  28  |     this.invalidCredentialsError =
  29  |       page.locator(
  30  |         '.oxd-alert-content-text'
  31  |       );
  32  | 
  33  |     this.requiredFieldError =
  34  |       page.locator(
  35  |         '.oxd-input-field-error-message'
  36  |       ).first();
  37  |   }
  38  | 
  39  |   async gotoLoginPage() {
  40  | 
  41  |     await this.navigate('/');
  42  | 
  43  |     await this.page.waitForLoadState(
  44  |       'domcontentloaded'
  45  |     );
  46  |   }
  47  | 
  48  |   async getCredentials() {
  49  | 
  50  |     const texts =
  51  |       await this.credentialText
  52  |         .allTextContents();
  53  | 
  54  |     const username =
  55  |       texts[0]
  56  |         .replace('Username :', '')
  57  |         .trim();
  58  | 
  59  |     const password =
  60  |       texts[1]
  61  |         .replace('Password :', '')
  62  |         .trim();
  63  | 
  64  |     return {
  65  |       username,
  66  |       password
  67  |     };
  68  |   }
  69  | 
  70  |   async login(
  71  |     username = process.env.APP_USERNAME,
  72  |     password = process.env.APP_PASSWORD
  73  |   ) {
  74  | 
  75  |     console.log(
  76  |       'Username:',
  77  |       process.env.APP_USERNAME
  78  |     );
  79  | 
  80  |     console.log(
  81  |       'Password:',
  82  |       process.env.APP_PASSWORD 
  83  |     );
  84  | 
  85  |     await this.usernameInput.waitFor({
  86  |       state: 'visible',
  87  |       timeout: 30000
  88  |     });
  89  | 
  90  |     await this.usernameInput.clear();
  91  | 
  92  |     await this.passwordInput.clear();
  93  | 
  94  |     await this.usernameInput.fill(
  95  |       username
  96  |     );
  97  | 
  98  |     await this.passwordInput.fill(
  99  |       password
  100 |     );
  101 | 
> 102 |     await this.loginButton.click();
      |                            ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  103 | 
  104 |     await this.page.waitForTimeout(
  105 |       5000
  106 |     );
  107 | 
  108 |     console.log(
  109 |       'Current URL:',
  110 |       await this.page.url()
  111 |     );
  112 |   }
  113 | 
  114 |   async verifySuccessfulLogin() {
  115 | 
  116 |     await expect(
  117 |       this.page.locator(
  118 |         '.oxd-userdropdown-name'
  119 |       )
  120 |     ).toBeVisible({
  121 |       timeout: 30000
  122 |     });
  123 |   }
  124 | }
  125 | 
  126 | module.exports = { LoginPage };
```
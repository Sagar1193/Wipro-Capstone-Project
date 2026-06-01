# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.spec.js >> Authentication Tests >> @smoke Valid Login
- Location: tests\auth\login.spec.js:6:3

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
  37  | 
  38  |     this.forgotPasswordLink =
  39  |       page.getByText(
  40  |         'Forgot your password?'
  41  |       );
  42  | 
  43  |     this.orangeHRMLogo =
  44  |       page.locator(
  45  |         '.orangehrm-login-branding'
  46  |       );
  47  |   }
  48  | 
  49  |   async gotoLoginPage() {
  50  | 
  51  |     await this.navigate('/');
  52  | 
  53  |     await this.page.waitForLoadState(
  54  |       'domcontentloaded'
  55  |     );
  56  |   }
  57  | 
  58  |   async getCredentials() {
  59  | 
  60  |     const texts =
  61  |       await this.credentialText
  62  |         .allTextContents();
  63  | 
  64  |     const username =
  65  |       texts[0]
  66  |         .replace('Username :', '')
  67  |         .trim();
  68  | 
  69  |     const password =
  70  |       texts[1]
  71  |         .replace('Password :', '')
  72  |         .trim();
  73  | 
  74  |     return {
  75  |       username,
  76  |       password
  77  |     };
  78  |   }
  79  | 
  80  |   async login(
  81  |     username = process.env.APP_USERNAME,
  82  |     password = process.env.APP_PASSWORD
  83  |   ) {
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
  104 |     await this.page.waitForLoadState(
  105 |       'domcontentloaded'
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
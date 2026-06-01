# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.spec.js >> Authentication Tests >> @sanity Forgot Password Link Visible
- Location: tests\auth\login.spec.js:157:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.goto: Test timeout of 60000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1   | const { expect } = require('@playwright/test');
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
  45  |         'img[alt="company-branding"]'
  46  |       );
  47  | 
  48  |     this.userDropdown =
  49  |       page.locator(
  50  |         '.oxd-userdropdown-name'
  51  |       );
  52  |   }
  53  | 
  54  |   async gotoLoginPage() {
  55  | 
> 56  |     await this.page.goto(
      |                     ^ Error: page.goto: Test timeout of 60000ms exceeded.
  57  |       'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  58  |       {
  59  |         waitUntil: 'load',
  60  |         timeout: 120000
  61  |       }
  62  |     );
  63  | 
  64  |     await this.usernameInput.waitFor({
  65  |       state: 'visible',
  66  |       timeout: 30000
  67  |     });
  68  |   }
  69  | 
  70  |   async getCredentials() {
  71  | 
  72  |     const texts =
  73  |       await this.credentialText
  74  |         .allTextContents();
  75  | 
  76  |     const username =
  77  |       texts[0]
  78  |         .replace('Username :', '')
  79  |         .trim();
  80  | 
  81  |     const password =
  82  |       texts[1]
  83  |         .replace('Password :', '')
  84  |         .trim();
  85  | 
  86  |     return {
  87  |       username,
  88  |       password
  89  |     };
  90  |   }
  91  | 
  92  |   async login(
  93  |     username = process.env.APP_USERNAME,
  94  |     password = process.env.APP_PASSWORD
  95  |   ) {
  96  | 
  97  |     await this.usernameInput.waitFor({
  98  |       state: 'visible',
  99  |       timeout: 30000
  100 |     });
  101 | 
  102 |     await this.passwordInput.waitFor({
  103 |       state: 'visible',
  104 |       timeout: 30000
  105 |     });
  106 | 
  107 |     await this.usernameInput.clear();
  108 | 
  109 |     await this.passwordInput.clear();
  110 | 
  111 |     await this.usernameInput.fill(
  112 |       username
  113 |     );
  114 | 
  115 |     await this.passwordInput.fill(
  116 |       password
  117 |     );
  118 | 
  119 |     await this.loginButton.click({
  120 |       noWaitAfter: true
  121 |     });
  122 | 
  123 |     console.log(
  124 |       'Current URL:',
  125 |       await this.page.url()
  126 |     );
  127 |   }
  128 | 
  129 |   async verifySuccessfulLogin() {
  130 | 
  131 |     await expect(
  132 |       this.userDropdown
  133 |     ).toBeVisible({
  134 |       timeout: 60000
  135 |     });
  136 |   }
  137 | 
  138 |   async verifyInvalidCredentialsError() {
  139 | 
  140 |     await expect(
  141 |       this.invalidCredentialsError
  142 |     ).toBeVisible({
  143 |       timeout: 10000
  144 |     });
  145 | 
  146 |     await expect(
  147 |       this.invalidCredentialsError
  148 |     ).toContainText(
  149 |       'Invalid credentials'
  150 |     );
  151 |   }
  152 | 
  153 |   async verifyRequiredFieldError() {
  154 | 
  155 |     await expect(
  156 |       this.requiredFieldError
```
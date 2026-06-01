# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin\admin.spec.js >> Admin Module Tests >> Verify Employee Name Field Visible
- Location: tests\admin\admin.spec.js:99:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
TimeoutError: page.goto: Timeout 60000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "networkidle"

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
        - separator [ref=e35]
        - paragraph [ref=e37]: Or login with
        - generic "svsvdvdss" [ref=e39] [cursor=pointer]:
          - paragraph [ref=e40]: svsvdvdss
      - generic [ref=e41]:
        - generic [ref=e42]:
          - link [ref=e43] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e49] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e52] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e55]:
          - paragraph [ref=e56]: OrangeHRM OS 5.8
          - paragraph [ref=e57]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e58] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e60]
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
  45  |         '.orangehrm-login-branding'
  46  |       );
  47  |   }
  48  | 
  49  |   async gotoLoginPage() {
  50  | 
> 51  |     await this.page.goto(
      |                     ^ TimeoutError: page.goto: Timeout 60000ms exceeded.
  52  |       'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  53  |       {
  54  |         waitUntil: 'networkidle'
  55  |       }
  56  |     );
  57  | 
  58  |     await expect(
  59  |       this.usernameInput
  60  |     ).toBeVisible({
  61  |       timeout: 30000
  62  |     });
  63  |   }
  64  | 
  65  |   async getCredentials() {
  66  | 
  67  |     const texts =
  68  |       await this.credentialText
  69  |         .allTextContents();
  70  | 
  71  |     const username =
  72  |       texts[0]
  73  |         .replace('Username :', '')
  74  |         .trim();
  75  | 
  76  |     const password =
  77  |       texts[1]
  78  |         .replace('Password :', '')
  79  |         .trim();
  80  | 
  81  |     return {
  82  |       username,
  83  |       password
  84  |     };
  85  |   }
  86  | 
  87  |   async login(
  88  |     username = process.env.APP_USERNAME,
  89  |     password = process.env.APP_PASSWORD
  90  |   ) {
  91  |     
  92  |     await this.usernameInput.waitFor({
  93  |       state: 'visible',
  94  |       timeout: 30000
  95  |     });
  96  | 
  97  |     await this.usernameInput.clear();
  98  | 
  99  |     await this.passwordInput.clear();
  100 | 
  101 |     await this.usernameInput.fill(
  102 |       username
  103 |     );
  104 | 
  105 |     await this.passwordInput.fill(
  106 |       password
  107 |     );
  108 | 
  109 |     await this.loginButton.click();
  110 | 
  111 |     await this.page.waitForLoadState(
  112 |       'domcontentloaded'
  113 |     );
  114 | 
  115 |     console.log(
  116 |       'Current URL:',
  117 |       await this.page.url()
  118 |     );
  119 |   }
  120 | 
  121 |   async verifySuccessfulLogin() {
  122 | 
  123 |     await expect(
  124 |       this.page.locator(
  125 |         '.oxd-userdropdown-name'
  126 |       )
  127 |     ).toBeVisible({
  128 |       timeout: 30000
  129 |     });
  130 |   }
  131 | }
  132 | 
  133 | module.exports = { LoginPage };
```
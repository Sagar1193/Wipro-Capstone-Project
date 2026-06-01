# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> Authentication Tests >> @regression Invalid Password
- Location: tests/auth/login.spec.js:14:3

# Error details

```
TimeoutError: page.waitForURL: Timeout 30000ms exceeded.
=========================== logs ===========================
waiting for navigation to "**/dashboard/index" until "load"
  navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e12]:
          - alert [ref=e13]:
            - generic [ref=e14]:
              - generic [ref=e15]: 
              - paragraph [ref=e16]: Invalid credentials
          - generic [ref=e18]:
            - paragraph [ref=e19]: "Username : Admin"
            - paragraph [ref=e20]: "Password : admin123"
        - generic [ref=e21]:
          - generic [ref=e23]:
            - generic [ref=e24]:
              - generic [ref=e25]: 
              - generic [ref=e26]: Username
            - textbox "Username" [active] [ref=e28]
          - generic [ref=e30]:
            - generic [ref=e31]:
              - generic [ref=e32]: 
              - generic [ref=e33]: Password
            - textbox "Password" [ref=e35]
          - button "Login" [ref=e37] [cursor=pointer]
          - paragraph [ref=e39] [cursor=pointer]: Forgot your password?
      - generic [ref=e40]:
        - generic [ref=e41]:
          - link [ref=e42]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e45]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e48]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e51]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e54]:
          - paragraph [ref=e55]: OrangeHRM OS 5.8
          - paragraph [ref=e56]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e57]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e59]
```

# Test source

```ts
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
  56  |     await this.page.goto(
  57  |       'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  58  |       {
  59  |         waitUntil: 'domcontentloaded',
  60  |         timeout: 120000
  61  |       }
  62  |     );
  63  | 
  64  |     await this.page.waitForSelector(
  65  |       'input[name="username"]',
  66  |       {
  67  |         state: 'visible',
  68  |         timeout: 30000
  69  |       }
  70  |     );
  71  |   }
  72  | 
  73  |   async getCredentials() {
  74  | 
  75  |     const texts =
  76  |       await this.credentialText
  77  |         .allTextContents();
  78  | 
  79  |     const username =
  80  |       texts[0]
  81  |         .replace('Username :', '')
  82  |         .trim();
  83  | 
  84  |     const password =
  85  |       texts[1]
  86  |         .replace('Password :', '')
  87  |         .trim();
  88  | 
  89  |     return {
  90  |       username,
  91  |       password
  92  |     };
  93  |   }
  94  | 
  95  |   async login(
  96  |     username = process.env.APP_USERNAME,
  97  |     password = process.env.APP_PASSWORD
  98  |   ) {
  99  | 
  100 |     await this.usernameInput.waitFor({
  101 |       state: 'visible',
  102 |       timeout: 30000
  103 |     });
  104 | 
  105 |     await this.passwordInput.waitFor({
  106 |       state: 'visible',
  107 |       timeout: 30000
  108 |     });
  109 | 
  110 |     await this.usernameInput.clear();
  111 |     await this.passwordInput.clear();
  112 | 
  113 |     await this.usernameInput.fill(
  114 |       username
  115 |     );
  116 | 
  117 |     await this.passwordInput.fill(
  118 |       password
  119 |     );
  120 | 
  121 |     await Promise.all([
> 122 |       this.page.waitForURL(
      |                 ^ TimeoutError: page.waitForURL: Timeout 30000ms exceeded.
  123 |         '**/dashboard/index',
  124 |         {
  125 |           timeout: 30000
  126 |         }
  127 |       ),
  128 |       this.loginButton.click()
  129 |     ]);
  130 | 
  131 |     console.log(
  132 |       'Current URL:',
  133 |       await this.page.url()
  134 |     );
  135 | }
  136 | 
  137 |   async verifySuccessfulLogin() {
  138 | 
  139 |   await this.page.waitForLoadState(
  140 |     'networkidle'
  141 |   );
  142 | 
  143 |   await expect(
  144 |     this.userDropdown
  145 |   ).toBeVisible({
  146 |     timeout: 60000
  147 |   });
  148 | }
  149 | 
  150 |   // async verifyInvalidCredentialsError() {
  151 | 
  152 |   //   await expect(
  153 |   //     this.invalidCredentialsError
  154 |   //   ).toBeVisible({
  155 |   //     timeout: 10000
  156 |   //   });
  157 | 
  158 |   //   await expect(
  159 |   //     this.invalidCredentialsError
  160 |   //   ).toContainText(
  161 |   //     'Invalid credentials'
  162 |   //   );
  163 |   // }
  164 | 
  165 |   async verifyInvalidCredentialsError() {
  166 | 
  167 |   await expect(
  168 |     this.page.getByText(
  169 |       'Invalid credentials'
  170 |     )
  171 |   ).toBeVisible({
  172 |     timeout: 15000
  173 |   });
  174 | }
  175 | 
  176 |   async verifyRequiredFieldError() {
  177 | 
  178 |     await expect(
  179 |       this.requiredFieldError
  180 |     ).toBeVisible({
  181 |       timeout: 10000
  182 |     });
  183 | 
  184 |     await expect(
  185 |       this.requiredFieldError
  186 |     ).toContainText(
  187 |       'Required'
  188 |     );
  189 |   }
  190 | }
  191 | 
  192 | module.exports = { LoginPage };
```
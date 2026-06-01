# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.spec.js >> Authentication Tests >> @regression Invalid Username
- Location: tests\auth\login.spec.js:27:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('.oxd-alert-content-text')
Expected: visible
Received: undefined
Timeout:  10000ms

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('.oxd-alert-content-text')
    - waiting for navigation to finish...

```

# Test source

```ts
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
> 142 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
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
  157 |     ).toBeVisible({
  158 |       timeout: 10000
  159 |     });
  160 | 
  161 |     await expect(
  162 |       this.requiredFieldError
  163 |     ).toContainText(
  164 |       'Required'
  165 |     );
  166 |   }
  167 | }
  168 | 
  169 | module.exports = { LoginPage };
```
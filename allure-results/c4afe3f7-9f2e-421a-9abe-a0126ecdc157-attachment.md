# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.spec.js >> Authentication Tests >> @regression Invalid Username
- Location: tests\auth\login.spec.js:31:3

# Error details

```
Error: toBeVisible can be only used with Locator object, was called with undefined
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
        - separator [ref=e40]
        - paragraph [ref=e42]: Or login with
        - generic "Google" [ref=e44] [cursor=pointer]:
          - paragraph [ref=e45]: Google
      - generic [ref=e46]:
        - generic [ref=e47]:
          - link [ref=e48]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e51]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e54]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e57]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e60]:
          - paragraph [ref=e61]: OrangeHRM OS 5.8
          - paragraph [ref=e62]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e63]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e65]
```

# Test source

```ts
  1   | const { test, expect } =
  2   | require('../../fixtures/baseFixtures');
  3   | 
  4   | test.describe('Authentication Tests', () => {
  5   | 
  6   |   test('@smoke Valid Login',
  7   |     async ({ loginPage }) => {
  8   | 
  9   |     await loginPage.gotoLoginPage();
  10  | 
  11  |     await loginPage.login();
  12  | 
  13  |     await loginPage.verifySuccessfulLogin();
  14  |   });
  15  | 
  16  |   test('@regression Invalid Password',
  17  |     async ({ loginPage }) => {
  18  | 
  19  |     await loginPage.gotoLoginPage();
  20  | 
  21  |     await loginPage.login(
  22  |       'Admin',
  23  |       'wrongpassword'
  24  |     );
  25  | 
  26  |     await expect(
  27  |       loginPage.requiredFieldError
  28  |     ).toBeVisible();
  29  |   });
  30  | 
  31  |   test('@regression Invalid Username',
  32  |     async ({ loginPage }) => {
  33  | 
  34  |     await loginPage.gotoLoginPage();
  35  | 
  36  |     await loginPage.login(
  37  |       'WrongUser',
  38  |       'admin123'
  39  |     );
  40  | 
  41  |     await expect(
  42  |       loginPage.invalidCredentialsError
> 43  |     ).toBeVisible();
      |       ^ Error: toBeVisible can be only used with Locator object, was called with undefined
  44  |   });
  45  | 
  46  |   test('@regression Empty Username',
  47  |     async ({ loginPage }) => {
  48  | 
  49  |     await loginPage.gotoLoginPage();
  50  | 
  51  |     await loginPage.login(
  52  |       '',
  53  |       'admin123'
  54  |     );
  55  | 
  56  |     await expect(
  57  |       loginPage.requiredFieldError
  58  |     ).toBeVisible();
  59  |   });
  60  | 
  61  |   test('@regression Empty Password',
  62  |     async ({ loginPage }) => {
  63  | 
  64  |     await loginPage.gotoLoginPage();
  65  | 
  66  |     await loginPage.login(
  67  |       'Admin',
  68  |       ''
  69  |     );
  70  | 
  71  |     await expect(
  72  |       loginPage.requiredFieldError
  73  |     ).toBeVisible();
  74  |   });
  75  | 
  76  |   test('@regression Empty Credentials',
  77  |     async ({ loginPage }) => {
  78  | 
  79  |     await loginPage.gotoLoginPage();
  80  | 
  81  |     await loginPage.login(
  82  |       '',
  83  |       ''
  84  |     );
  85  | 
  86  |     await expect(
  87  |       loginPage.requiredFieldError
  88  |     ).toBeVisible();
  89  |   });
  90  | 
  91  |   test('@sanity Password Mask Validation',
  92  |     async ({ loginPage }) => {
  93  | 
  94  |     await loginPage.gotoLoginPage();
  95  | 
  96  |     await expect(
  97  |       loginPage.passwordInput
  98  |     ).toHaveAttribute(
  99  |       'type',
  100 |       'password'
  101 |     );
  102 |   });
  103 | 
  104 |   test('@regression Username With Spaces',
  105 |     async ({ loginPage }) => {
  106 | 
  107 |     await loginPage.gotoLoginPage();
  108 | 
  109 |     await loginPage.login(
  110 |       '   ',
  111 |       'admin123'
  112 |     );
  113 | 
  114 |     await expect(
  115 |       loginPage.requiredFieldError
  116 |     ).toBeVisible();
  117 |   });
  118 | 
  119 |   test('@regression Password With Spaces',
  120 |     async ({ loginPage }) => {
  121 | 
  122 |     await loginPage.gotoLoginPage();
  123 | 
  124 |     await loginPage.login(
  125 |       'Admin',
  126 |       '   '
  127 |     );
  128 | 
  129 |     await expect(
  130 |       loginPage.invalidCredentialsError
  131 |     ).toBeVisible();
  132 |   });
  133 | 
  134 |   test('@sanity Login Page Title Validation',
  135 |     async ({ page, loginPage }) => {
  136 | 
  137 |     await loginPage.gotoLoginPage();
  138 | 
  139 |     await expect(page)
  140 |       .toHaveTitle(/OrangeHRM/);
  141 |   });
  142 | 
  143 | });
```
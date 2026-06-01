# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.spec.js >> Authentication Tests >> @regression Password With Spaces
- Location: tests\auth\login.spec.js:119:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Invalid credentials')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Invalid credentials')

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username": Admin
- text:  Password
- textbox "Password"
- text: Required
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
  43  |     ).toBeVisible();
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
> 131 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
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
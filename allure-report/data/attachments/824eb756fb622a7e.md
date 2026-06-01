# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.spec.js >> OrangeHRM Login Tests >> Valid Login
- Location: tests\auth\login.spec.js:7:3

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /dashboard/
Received string:  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    - unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    - waiting for" https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    9 × unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- alert:
  - text: 
  - paragraph: Invalid credentials
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text:  Password
- textbox "Password"
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
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | const { LoginPage } = require('../../pages/LoginPage');
  4  | 
  5  | test.describe('OrangeHRM Login Tests', () => {
  6  | 
  7  |   test('Valid Login', async ({ page }) => {
  8  | 
  9  |     const loginPage = new LoginPage(page);
  10 | 
  11 |     await loginPage.gotoLoginPage();
  12 | 
  13 |     await loginPage.login(
  14 |       process.env.USERNAME,
  15 |       process.env.PASSWORD
  16 |     );
  17 | 
> 18 |     await expect(page).toHaveURL(/dashboard/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  19 |   });
  20 | 
  21 | });
```
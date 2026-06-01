# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.spec.js >> OrangeHRM Login Tests >> Invalid Login
- Location: tests\auth\login.spec.js:27:3

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
            - textbox "Username" [ref=e23]: Admin
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [active] [ref=e30]: wrongPassword
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.8
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
```

# Test source

```ts
  1  | const { test, expect } = require('../../fixtures/baseFixtures');
  2  | 
  3  | const { ScreenshotUtil } = require('../../utils/screenshotUtil');
  4  | 
  5  | const { Logger } = require('../../utils/logger');
  6  | 
  7  | test.describe('OrangeHRM Login Tests', () => {
  8  | 
  9  |   test('Valid Login', async ({ loginPage, page }) => {
  10 | 
  11 |     Logger.info('Starting Valid Login Test');
  12 | 
  13 |     await loginPage.gotoLoginPage();
  14 | 
  15 |     await loginPage.login();
  16 | 
  17 |     await loginPage.verifySuccessfulLogin();
  18 | 
  19 |     await ScreenshotUtil.capture(
  20 |       page,
  21 |       'valid-login'
  22 |     );
  23 | 
  24 |     Logger.info('Valid Login Test Completed');
  25 |   });
  26 | 
  27 |   test('Invalid Login', async ({ loginPage, page }) => {
  28 | 
  29 |     Logger.info('Starting Invalid Login Test');
  30 | 
  31 |     await loginPage.gotoLoginPage();
  32 | 
  33 |     await loginPage.usernameInput.fill('Admin');
  34 | 
  35 |     await loginPage.passwordInput.fill('wrongPassword');
  36 | 
> 37 |     await loginPage.loginButton.click();
     |                                 ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  38 | 
  39 |     await expect(
  40 |       page.getByText('Invalid credentials')
  41 |     ).toBeVisible();
  42 | 
  43 |     await ScreenshotUtil.capture(
  44 |       page,
  45 |       'invalid-login'
  46 |     );
  47 | 
  48 |     Logger.info('Invalid Login Test Completed');
  49 |   });
  50 | 
  51 | });
```
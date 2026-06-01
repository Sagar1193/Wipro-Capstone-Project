# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual\dashboardVisual.spec.js >> Visual Regression Tests >> Login Page Visual Validation
- Location: tests\visual\dashboardVisual.spec.js:24:3

# Error details

```
Error: A snapshot doesn't exist at C:\Users\sagar\Downloads\Capstone\tests\visual\dashboardVisual.spec.js-snapshots\login-page-chromium-win32.png, writing actual.
```

# Test source

```ts
  1   | const { test, expect } =
  2   | require('../../fixtures/baseFixtures');
  3   | 
  4   | test.describe('Visual Regression Tests', () => {
  5   | 
  6   |   test('Dashboard Visual Validation',
  7   |     async ({ page, loginPage }) => {
  8   | 
  9   |     await loginPage.gotoLoginPage();
  10  | 
  11  |     await loginPage.login();
  12  | 
  13  |     await loginPage.verifySuccessfulLogin();
  14  | 
  15  |     await expect(page).toHaveScreenshot(
  16  |       'dashboard-page.png',
  17  |       {
  18  |         fullPage: true,
  19  |         maxDiffPixelRatio: 0.1,
  20  |       }
  21  |     );
  22  |   });
  23  | 
  24  |   test('Login Page Visual Validation',
  25  |       async ({ page }) => {
  26  | 
  27  |       await page.goto(
  28  |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  29  |       );
  30  | 
> 31  |       await expect(page).toHaveScreenshot(
      |       ^ Error: A snapshot doesn't exist at C:\Users\sagar\Downloads\Capstone\tests\visual\dashboardVisual.spec.js-snapshots\login-page-chromium-win32.png, writing actual.
  32  |         'login-page.png',
  33  |         {
  34  |           fullPage: true,
  35  |           maxDiffPixelRatio: 0.1,
  36  |         }
  37  |       );
  38  |   }); 
  39  | 
  40  |     test('PIM Page Visual Validation',
  41  |       async ({
  42  |         page,
  43  |         loginPage,
  44  |         pimPage
  45  |       }) => {
  46  | 
  47  |       await loginPage.gotoLoginPage();
  48  | 
  49  |       await loginPage.login();
  50  | 
  51  |       await loginPage.verifySuccessfulLogin();
  52  | 
  53  |       await pimPage.navigateToPIM();
  54  | 
  55  |       await expect(page).toHaveScreenshot(
  56  |         'pim-page.png',
  57  |         {
  58  |           fullPage: true,
  59  |           maxDiffPixelRatio: 0.1,
  60  |         }
  61  |       );
  62  |     });
  63  | 
  64  |     test('Admin Page Visual Validation',
  65  |       async ({
  66  |         page,
  67  |         loginPage,
  68  |         adminPage
  69  |       }) => {
  70  | 
  71  |       await loginPage.gotoLoginPage();
  72  | 
  73  |       await loginPage.login();
  74  | 
  75  |       await loginPage.verifySuccessfulLogin();
  76  | 
  77  |       await adminPage.navigateToAdmin();
  78  | 
  79  |       await expect(page).toHaveScreenshot(
  80  |         'admin-page.png',
  81  |         {
  82  |           fullPage: true,
  83  |           maxDiffPixelRatio: 0.1,
  84  |         }
  85  |       );
  86  |     });
  87  | 
  88  |     test('Leave Page Visual Validation',
  89  |       async ({
  90  |         page,
  91  |         loginPage,
  92  |         leavePage
  93  |       }) => {
  94  | 
  95  |       await loginPage.gotoLoginPage();
  96  | 
  97  |       await loginPage.login();
  98  | 
  99  |       await loginPage.verifySuccessfulLogin();
  100 | 
  101 |       await leavePage.navigateToLeave();
  102 | 
  103 |       await expect(page).toHaveScreenshot(
  104 |         'leave-page.png',
  105 |         {
  106 |           fullPage: true,
  107 |           maxDiffPixelRatio: 0.1,
  108 |         }
  109 |       );
  110 |     });
  111 | });
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\apiMock.spec.js >> API Mocking Tests >> Mock Employee API Response
- Location: tests\api\apiMock.spec.js:6:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Test source

```ts
  1  | const { test, expect } =
  2  | require('../../fixtures/baseFixtures');
  3  | 
  4  | test.describe('API Mocking Tests', () => {
  5  | 
  6  |   test('Mock Employee API Response',
  7  |     async ({ page, loginPage }) => {
  8  | 
  9  |     let apiIntercepted = false;
  10 | 
  11 |     await page.route(
  12 |       '**/web/index.php/api/v2/pim/employees*',
  13 | 
  14 |       async route => {
  15 | 
  16 |         apiIntercepted = true;
  17 | 
  18 |         const mockResponse = {
  19 | 
  20 |           data: [
  21 |             {
  22 |               empNumber: 999,
  23 |               firstName: 'Mock',
  24 |               lastName: 'Employee'
  25 |             }
  26 |           ]
  27 |         };
  28 | 
  29 |         await route.fulfill({
  30 | 
  31 |           status: 200,
  32 | 
  33 |           contentType: 'application/json',
  34 | 
  35 |           body: JSON.stringify(mockResponse)
  36 |         });
  37 |       }
  38 |     );
  39 | 
  40 |     await loginPage.gotoLoginPage();
  41 | 
  42 |     await loginPage.login();
  43 | 
  44 |     await loginPage.verifySuccessfulLogin();
  45 | 
  46 |     // Navigate directly to PIM URL
  47 |     await page.goto(
  48 |       'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList'
  49 |     );
  50 | 
  51 |     // Force fresh employee API request
  52 |     await page.reload();
  53 | 
> 54 |     await page.waitForTimeout(5000);
     |                ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  55 | 
  56 |     expect(apiIntercepted).toBeTruthy();
  57 |   });
  58 | 
  59 | });
```
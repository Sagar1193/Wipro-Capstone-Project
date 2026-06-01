# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\api.spec.js >> API Mocking Tests >> Mock Employee API Response
- Location: tests\api\api.spec.js:6:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 60000ms exceeded.
```

# Test source

```ts
  1   | const { test, expect } =
  2   | require('../../fixtures/baseFixtures');
  3   | 
  4   | test.describe('API Mocking Tests', () => {
  5   | 
  6   |   test('Mock Employee API Response',
  7   |     async ({ page, loginPage }) => {
  8   | 
  9   |     let apiIntercepted = false;
  10  | 
  11  |     await page.route(
  12  |       '**/web/index.php/api/v2/pim/employees*',
  13  | 
  14  |       async route => {
  15  | 
  16  |         apiIntercepted = true;
  17  | 
  18  |         const mockResponse = {
  19  | 
  20  |           data: [
  21  |             {
  22  |               empNumber: 999,
  23  |               firstName: 'Mock',
  24  |               lastName: 'Employee'
  25  |             }
  26  |           ]
  27  |         };
  28  | 
  29  |         await route.fulfill({
  30  | 
  31  |           status: 200,
  32  | 
  33  |           contentType: 'application/json',
  34  | 
  35  |           body: JSON.stringify(mockResponse)
  36  |         });
  37  |       }
  38  |     );
  39  | 
  40  |     await loginPage.gotoLoginPage();
  41  | 
  42  |     await loginPage.login();
  43  | 
  44  |     await loginPage.verifySuccessfulLogin();
  45  | 
  46  |       // Force fresh employee API request
  47  |       await page.goto(
  48  |         'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
  49  |         {
  50  |           waitUntil: 'domcontentloaded'
  51  |         }
  52  |       );
  53  | 
> 54  |       await page.waitForTimeout(5000);
      |                  ^ Error: page.waitForTimeout: Test timeout of 60000ms exceeded.
  55  |       console.log(
  56  |         'API Intercepted:',
  57  |         apiIntercepted
  58  |       );
  59  | 
  60  |       expect(apiIntercepted).toBeTruthy();
  61  | });
  62  | 
  63  | test('Verify Dashboard API Response', async ({
  64  |   page,
  65  |   loginPage
  66  | }) => {
  67  | 
  68  |   let dashboardApiHit = false;
  69  | 
  70  |   await page.route(
  71  |     '**/dashboard/employees/action-summary*',
  72  |     async route => {
  73  | 
  74  |       dashboardApiHit = true;
  75  | 
  76  |       await route.continue();
  77  |     }
  78  |   );
  79  | 
  80  |   await loginPage.gotoLoginPage();
  81  | 
  82  |   await loginPage.login();
  83  | 
  84  |   await loginPage.verifySuccessfulLogin();
  85  | 
  86  |   await page.waitForTimeout(5000);
  87  | 
  88  |   expect(
  89  |     dashboardApiHit
  90  |   ).toBeTruthy();
  91  | });
  92  | 
  93  | test('Mock Dashboard Widget API', async ({
  94  |   page,
  95  |   loginPage
  96  | }) => {
  97  | 
  98  |   let intercepted = false;
  99  | 
  100 |   await page.route(
  101 |     '**/dashboard/employees/action-summary*',
  102 |     async route => {
  103 | 
  104 |       intercepted = true;
  105 | 
  106 |       await route.fulfill({
  107 |         status: 200,
  108 |         contentType: 'application/json',
  109 |         body: JSON.stringify({
  110 |           data: {
  111 |             totalEmployees: 100
  112 |           }
  113 |         })
  114 |       });
  115 |     }
  116 |   );
  117 | 
  118 |   await loginPage.gotoLoginPage();
  119 | 
  120 |   await loginPage.login();
  121 | 
  122 |   await loginPage.verifySuccessfulLogin();
  123 | 
  124 |   await page.waitForTimeout(3000);
  125 | 
  126 |   expect(
  127 |     intercepted
  128 |   ).toBeTruthy();
  129 | });
  130 | 
  131 | test('Intercept PIM Employee API', async ({
  132 |   page,
  133 |   loginPage
  134 | }) => {
  135 | 
  136 |   let intercepted = false;
  137 | 
  138 |   await page.route(
  139 |     '**/api/v2/pim/employees*',
  140 |     async route => {
  141 | 
  142 |       intercepted = true;
  143 | 
  144 |       await route.continue();
  145 |     }
  146 |   );
  147 | 
  148 |   await loginPage.gotoLoginPage();
  149 | 
  150 |   await loginPage.login();
  151 | 
  152 |   await loginPage.verifySuccessfulLogin();
  153 | 
  154 |   await page.goto(
```
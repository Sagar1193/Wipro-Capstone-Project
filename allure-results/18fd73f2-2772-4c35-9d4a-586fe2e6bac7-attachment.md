# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation\navigation.spec.js >> Navigation Tests >> Leave Menu Visible
- Location: tests\navigation\navigation.spec.js:45:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Leave' })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Leave' })

```

# Test source

```ts
  1  | const { test, expect } =
  2  | require('../../fixtures/baseFixtures');
  3  | 
  4  | test.describe('Navigation Tests', () => {
  5  | 
  6  |   test('Dashboard Menu Visible',
  7  |   async ({ page, loginPage }) => {
  8  | 
  9  |     await loginPage.gotoLoginPage();
  10 |     await loginPage.login();
  11 | 
  12 |     await expect(
  13 |       page.getByRole('link', {
  14 |         name: 'Dashboard'
  15 |       })
  16 |     ).toBeVisible();
  17 |   });
  18 | 
  19 |   test('PIM Menu Visible',
  20 |   async ({ page, loginPage }) => {
  21 | 
  22 |     await loginPage.gotoLoginPage();
  23 |     await loginPage.login();
  24 | 
  25 |     await expect(
  26 |       page.getByRole('link', {
  27 |         name: 'PIM'
  28 |       })
  29 |     ).toBeVisible();
  30 |   });
  31 | 
  32 |   test('Admin Menu Visible',
  33 |   async ({ page, loginPage }) => {
  34 | 
  35 |     await loginPage.gotoLoginPage();
  36 |     await loginPage.login();
  37 | 
  38 |     await expect(
  39 |       page.getByRole('link', {
  40 |         name: 'Admin'
  41 |       })
  42 |     ).toBeVisible();
  43 |   });
  44 | 
  45 |   test('Leave Menu Visible',
  46 |   async ({ page, loginPage }) => {
  47 | 
  48 |     await loginPage.gotoLoginPage();
  49 |     await loginPage.login();
  50 | 
  51 |     await expect(
  52 |       page.getByRole('link', {
  53 |         name: 'Leave'
  54 |       })
> 55 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  56 |   });
  57 | 
  58 |   test('Recruitment Menu Visible',
  59 |   async ({ page, loginPage }) => {
  60 | 
  61 |     await loginPage.gotoLoginPage();
  62 |     await loginPage.login();
  63 | 
  64 |     await expect(
  65 |       page.getByRole('link', {
  66 |         name: 'Recruitment'
  67 |       })
  68 |     ).toBeVisible();
  69 |   });
  70 | 
  71 |   test('My Info Menu Visible',
  72 |   async ({ page, loginPage }) => {
  73 | 
  74 |     await loginPage.gotoLoginPage();
  75 |     await loginPage.login();
  76 | 
  77 |     await expect(
  78 |       page.getByRole('link', {
  79 |         name: 'My Info'
  80 |       })
  81 |     ).toBeVisible();
  82 |   });
  83 | 
  84 | });
```
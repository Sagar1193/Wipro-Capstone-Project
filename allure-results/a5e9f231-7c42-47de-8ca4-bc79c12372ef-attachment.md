# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: myinfo\myinfo.spec.js >> My Info Module Tests >> Verify Save Button Enabled
- Location: tests\myinfo\myinfo.spec.js:95:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Personal Details' })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for getByRole('heading', { name: 'Personal Details' })

```

# Test source

```ts
  1   | const { expect } = require('@playwright/test');
  2   | 
  3   | class MyInfoPage {
  4   | 
  5   |   constructor(page) {
  6   | 
  7   |     this.page = page;
  8   | 
  9   |     this.myInfoMenu =
  10  |       page.getByRole('link', {
  11  |         name: 'My Info'
  12  |       });
  13  | 
  14  |     this.personalDetailsHeader =
  15  |       page.getByRole('heading', {
  16  |         name: 'Personal Details'
  17  |       });
  18  | 
  19  |     this.firstNameField =
  20  |       page.locator('input[name="firstName"]');
  21  | 
  22  |     this.middleNameField =
  23  |       page.locator('input[name="middleName"]');
  24  | 
  25  |     this.lastNameField =
  26  |       page.locator('input[name="lastName"]');
  27  | 
  28  |     this.employeeIdField =
  29  |       page.locator('.oxd-input').nth(4);
  30  | 
  31  |     this.saveButton =
  32  |       page.getByRole('button', {
  33  |         name: 'Save'
  34  |       }).first();
  35  | 
  36  |     this.profileImage =
  37  |       page.locator('.employee-image');
  38  | 
  39  |     this.form =
  40  |       page.locator('form');
  41  |   }
  42  | 
  43  |   async navigateToMyInfo() {
  44  | 
  45  |     await this.myInfoMenu.click();
  46  | 
  47  |     await expect(
  48  |       this.personalDetailsHeader
> 49  |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  50  |       timeout: 30000
  51  |     });
  52  |   }
  53  | 
  54  |   async verifyMyInfoPageLoaded() {
  55  |     await expect(
  56  |       this.personalDetailsHeader
  57  |     ).toBeVisible();
  58  |   }
  59  | 
  60  |   async verifyMyInfoMenuVisible() {
  61  |     await expect(
  62  |       this.myInfoMenu
  63  |     ).toBeVisible();
  64  |   }
  65  | 
  66  |   async verifyFirstNameFieldVisible() {
  67  |     await expect(
  68  |       this.firstNameField
  69  |     ).toBeVisible();
  70  |   }
  71  | 
  72  |   async verifyMiddleNameFieldVisible() {
  73  |     await expect(
  74  |       this.middleNameField
  75  |     ).toBeVisible();
  76  |   }
  77  | 
  78  |   async verifyLastNameFieldVisible() {
  79  |     await expect(
  80  |       this.lastNameField
  81  |     ).toBeVisible();
  82  |   }
  83  | 
  84  |   async verifyEmployeeIdFieldVisible() {
  85  |     await expect(
  86  |       this.employeeIdField
  87  |     ).toBeVisible();
  88  |   }
  89  | 
  90  |   async verifySaveButtonVisible() {
  91  |     await expect(
  92  |       this.saveButton
  93  |     ).toBeVisible();
  94  |   }
  95  | 
  96  |   async verifySaveButtonEnabled() {
  97  |     await expect(
  98  |       this.saveButton
  99  |     ).toBeEnabled();
  100 |   }
  101 | 
  102 |   async verifyProfileImageVisible() {
  103 |     await expect(
  104 |       this.profileImage
  105 |     ).toBeVisible();
  106 |   }
  107 | 
  108 |   async verifyFormVisible() {
  109 |     await expect(
  110 |       this.form
  111 |     ).toBeVisible();
  112 |   }
  113 | 
  114 |   async verifyFirstNameEnabled() {
  115 |     await expect(
  116 |       this.firstNameField
  117 |     ).toBeEnabled();
  118 |   }
  119 | 
  120 |   async verifyMiddleNameEnabled() {
  121 |     await expect(
  122 |       this.middleNameField
  123 |     ).toBeEnabled();
  124 |   }
  125 | 
  126 |   async verifyLastNameEnabled() {
  127 |     await expect(
  128 |       this.lastNameField
  129 |     ).toBeEnabled();
  130 |   }
  131 | 
  132 |   async verifyEmployeeIdEnabled() {
  133 |     await expect(
  134 |       this.employeeIdField
  135 |     ).toBeEnabled();
  136 |   }
  137 | 
  138 |   async verifyPersonalDetailsHeaderVisible() {
  139 |     await expect(
  140 |       this.personalDetailsHeader
  141 |     ).toBeVisible();
  142 |   }
  143 | }
  144 | 
  145 | module.exports = { MyInfoPage };
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin\admin.spec.js >> Admin Module Tests >> Verify Admin Page Loaded
- Location: tests\admin\admin.spec.js:5:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Search' })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for getByRole('button', { name: 'Search' })

```

# Test source

```ts
  1   | const { expect } = require('@playwright/test');
  2   | 
  3   | class AdminPage {
  4   | 
  5   |   constructor(page) {
  6   | 
  7   |     this.page = page;
  8   | 
  9   |     this.adminMenu =
  10  |       page.getByRole('link', {
  11  |         name: 'Admin'
  12  |       });
  13  | 
  14  |     this.searchButton =
  15  |       page.getByRole('button', {
  16  |         name: 'Search'
  17  |       });
  18  | 
  19  |     this.resetButton =
  20  |       page.getByRole('button', {
  21  |         name: 'Reset'
  22  |       });
  23  | 
  24  |     this.addButton =
  25  |       page.getByRole('button', {
  26  |         name: 'Add'
  27  |       });
  28  | 
  29  |     this.addUserHeader =
  30  |         this.page.getByRole('heading', {
  31  |             name: 'Add User'
  32  |         });
  33  | 
  34  |     this.cancelButton =
  35  |         page.getByRole('button', {
  36  |             name: 'Cancel'
  37  |         });
  38  | 
  39  |     this.saveButton =
  40  |         page.getByRole('button', {
  41  |             name: 'Save'
  42  |         });
  43  | 
  44  |     this.userRoleDropdown =
  45  |         page.locator('.oxd-select-text')
  46  |             .first();
  47  | 
  48  |     this.usernameField =
  49  |       page.locator('.oxd-input').nth(1);
  50  | 
  51  |     this.employeeNameField =
  52  |       page.getByPlaceholder('Type for hints...');
  53  | 
  54  |     this.systemUsersHeader =
  55  |       page.getByRole('heading', {
  56  |         name: 'System Users'
  57  |       });
  58  | 
  59  |     this.recordsTable =
  60  |       page.locator('.oxd-table-body');
  61  | 
  62  |     this.searchForm =
  63  |       page.locator('form');
  64  |   }
  65  | 
  66  |   async navigateToAdmin() {
  67  | 
  68  |   await this.adminMenu.click();
  69  | 
  70  |   await expect(
  71  |     this.searchButton
> 72  |   ).toBeVisible({
      |     ^ Error: expect(locator).toBeVisible() failed
  73  |     timeout: 30000
  74  |   });
  75  | }
  76  | 
  77  |   async verifyAdminPageLoaded() {
  78  |     await expect(
  79  |       this.searchButton
  80  |     ).toBeVisible();
  81  |   }
  82  | 
  83  |   async verifyAddButtonVisible() {
  84  |     await expect(
  85  |       this.addButton
  86  |     ).toBeVisible();
  87  |   }
  88  | 
  89  |   async verifyResetButtonVisible() {
  90  |     await expect(
  91  |       this.resetButton
  92  |     ).toBeVisible();
  93  |   }
  94  | 
  95  |   async verifySearchButtonVisible() {
  96  | 
  97  |     await expect(
  98  |         this.searchButton
  99  |     ).toBeVisible();
  100 |     }
  101 | 
  102 |     async verifyAddUserPageLoaded() {
  103 | 
  104 |     await this.addButton.click();
  105 | 
  106 |     await expect(
  107 |         this.addUserHeader
  108 |     ).toBeVisible();
  109 |     }
  110 | 
  111 |     async verifyCancelButtonVisible() {
  112 | 
  113 |         await this.addButton.click();
  114 | 
  115 |         await expect(
  116 |             this.cancelButton
  117 |         ).toBeVisible();
  118 |         }
  119 | 
  120 |     async verifySaveButtonVisible() {
  121 | 
  122 |         await this.addButton.click();
  123 | 
  124 |         await expect(
  125 |             this.saveButton
  126 |         ).toBeVisible();
  127 |     }
  128 | 
  129 |     async verifyUserRoleDropdownVisible() {
  130 | 
  131 |         await this.addButton.click();
  132 | 
  133 |         await expect(
  134 |             this.userRoleDropdown
  135 |         ).toBeVisible();
  136 |     }
  137 | 
  138 |     async verifyUsernameFieldVisible() {
  139 | 
  140 |     await expect(
  141 |       this.usernameField
  142 |     ).toBeVisible();
  143 |   }
  144 | 
  145 |   async verifyEmployeeNameFieldVisible() {
  146 | 
  147 |     await this.addButton.click();
  148 | 
  149 |     await expect(
  150 |       this.employeeNameField
  151 |     ).toBeVisible();
  152 |   }
  153 | 
  154 |   async verifySystemUsersHeaderVisible() {
  155 | 
  156 |     await expect(
  157 |       this.systemUsersHeader
  158 |     ).toBeVisible();
  159 |   }
  160 | 
  161 |   async verifyRecordsTableVisible() {
  162 | 
  163 |     await expect(
  164 |       this.recordsTable
  165 |     ).toBeVisible();
  166 |   }
  167 | 
  168 |   async verifySearchFormVisible() {
  169 | 
  170 |     await expect(
  171 |       this.searchForm
  172 |     ).toBeVisible();
```
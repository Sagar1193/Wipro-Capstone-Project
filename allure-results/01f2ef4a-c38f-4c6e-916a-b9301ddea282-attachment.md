# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim\pim.spec.js >> PIM Module Tests >> Search Employee In Table
- Location: tests\pim\pim.spec.js:43:3

# Error details

```
Test timeout of 30000ms exceeded.
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

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "PIM" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Mohammad Stanikzai
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Add Employee" [level=6]
- separator
- button "Choose File"
- img "profile picture"
- button ""
- paragraph: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
- text: Employee Full Name*
- textbox "First Name": Clemmie
- textbox "Middle Name"
- textbox "Last Name": Doyle
- text: Employee Id
- textbox: "0380"
- text: Employee Id already exists
- separator
- paragraph: Create Login Details
- checkbox
- separator
- paragraph: "* Required"
- button "Cancel"
- button "Save"
- paragraph: OrangeHRM OS 5.8
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1   | const { expect } = require('@playwright/test');
  2   | 
  3   | class PIMPage {
  4   | 
  5   |   constructor(page) {
  6   | 
  7   |     this.page = page;
  8   | 
  9   |     this.pimMenu = page.getByRole('link', { name: 'PIM' });
  10  | 
  11  |     this.addEmployeeButton = page.getByRole('button', { name: 'Add' });
  12  | 
  13  |     this.firstNameInput = page.locator('input[name="firstName"]');
  14  | 
  15  |     this.lastNameInput = page.locator('input[name="lastName"]');
  16  | 
  17  |     this.saveButton = page.getByRole('button', { name: 'Save' });
  18  | 
  19  |     this.successToast = page.getByText('Successfully Saved');
  20  | 
  21  |     this.employeeNameSearch =
  22  |       page.locator('(//input[@placeholder="Type for hints..."])[1]');
  23  | 
  24  |     this.searchButton =
  25  |       page.getByRole('button', { name: 'Search' });
  26  | 
  27  |     this.employeeTableRows =
  28  |       page.locator('.oxd-table-body .oxd-table-row');
  29  | 
  30  |     this.employeeNameCells =
  31  |       page.locator('.oxd-table-body .oxd-table-row .oxd-table-cell');
  32  | 
  33  |     this.personalDetailsHeader =
  34  |     page.getByRole('heading', {
  35  |       name: 'Personal Details'
  36  |     });
  37  | 
  38  |     this.myInfoMenu =
  39  |     page.getByRole('link', {
  40  |       name: 'My Info'
  41  |     });
  42  | 
  43  |     this.profileImage =
  44  |       page.locator('input[type="file"]');
  45  | 
  46  |     this.profileImageSaveButton =
  47  |       page.getByRole('button', {
  48  |         name: 'Save'
  49  |       }).last();
  50  |   }
  51  | 
  52  |   async navigateToPIM() {
  53  |     await this.pimMenu.click();
  54  |   }
  55  | 
  56  |   async clickAddEmployee() {
  57  |     await this.addEmployeeButton.click();
  58  |   }
  59  | 
  60  |   async addEmployee(firstName, lastName) {
  61  |     await this.firstNameInput.fill(firstName);
  62  |     await this.lastNameInput.fill(lastName);
  63  |     await Promise.all([
  64  |     this.page.waitForLoadState('networkidle'),
  65  |     this.saveButton.click()
  66  |     ]);
  67  |   }
  68  | 
  69  |   async verifyEmployeeAdded() {
  70  |   await expect(
  71  |     this.personalDetailsHeader
> 72  |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  73  |       timeout: 30000
  74  |     });
  75  |   }
  76  | 
  77  |   async searchEmployee(employeeName) {
  78  |     await this.employeeNameSearch.fill(employeeName);
  79  |     await this.searchButton.click();
  80  |   }
  81  |   
  82  |   async verifyEmployeeInTable(employeeName) {
  83  | 
  84  |     await this.employeeTableRows
  85  |       .first()
  86  |       .waitFor({
  87  |         state: 'visible',
  88  |         timeout: 30000
  89  |       });
  90  | 
  91  |     const rows =
  92  |       await this.employeeTableRows.allTextContents();
  93  | 
  94  |     const employeeFound = rows.some(row =>
  95  |       row.includes(employeeName)
  96  |     );
  97  | 
  98  |     expect(employeeFound).toBeTruthy();
  99  |   }
  100 | 
  101 |   async getEmployeeCount() {
  102 |     await this.employeeTableRows.first().waitFor();
  103 |     return await this.employeeTableRows.count();
  104 |   }
  105 | 
  106 |   async navigateToMyInfo() {
  107 |     await this.myInfoMenu.click();
  108 |   }
  109 | 
  110 |   async uploadProfileImage(filePath) {
  111 |     await this.profileImage.setInputFiles(
  112 |       filePath
  113 |     );
  114 |     await this.profileImageSaveButton.click();
  115 |   }
  116 | }
  117 | 
  118 | module.exports = { PIMPage };
```
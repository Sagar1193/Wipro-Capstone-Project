# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim\pim.spec.js >> PIM Module Tests >> Search Employee In Table
- Location: tests\pim\pim.spec.js:37:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "PIM" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: Test 84 wifi
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - generic [ref=e133]:
              - text: Configuration
              - generic [ref=e134]: 
          - listitem [ref=e135] [cursor=pointer]:
            - link "Employee List" [ref=e136]:
              - /url: "#"
          - listitem [ref=e137] [cursor=pointer]:
            - link "Add Employee" [ref=e138]:
              - /url: "#"
          - listitem [ref=e139] [cursor=pointer]:
            - link "Reports" [ref=e140]:
              - /url: "#"
          - button "" [ref=e142] [cursor=pointer]:
            - generic [ref=e143]: 
  - generic [ref=e144]:
    - generic [ref=e146]:
      - generic [ref=e147]:
        - generic [ref=e148]:
          - heading "Employee Information" [level=5] [ref=e150]
          - button "" [ref=e153] [cursor=pointer]:
            - generic [ref=e154]: 
        - separator [ref=e155]
        - generic [ref=e157]:
          - generic [ref=e159]:
            - generic [ref=e161]:
              - generic [ref=e163]: Employee Name
              - textbox "Type for hints..." [ref=e167]: Afton
            - generic [ref=e169]:
              - generic [ref=e171]: Employee Id
              - textbox [ref=e173]
            - generic [ref=e175]:
              - generic [ref=e177]: Employment Status
              - generic [ref=e180] [cursor=pointer]:
                - generic [ref=e181]: "-- Select --"
                - generic [ref=e183]: 
            - generic [ref=e185]:
              - generic [ref=e187]: Include
              - generic [ref=e190] [cursor=pointer]:
                - generic [ref=e191]: Current Employees Only
                - generic [ref=e193]: 
            - generic [ref=e195]:
              - generic [ref=e197]: Supervisor Name
              - textbox "Type for hints..." [ref=e201]
            - generic [ref=e203]:
              - generic [ref=e205]: Job Title
              - generic [ref=e208] [cursor=pointer]:
                - generic [ref=e209]: "-- Select --"
                - generic [ref=e211]: 
            - generic [ref=e213]:
              - generic [ref=e215]: Sub Unit
              - generic [ref=e218] [cursor=pointer]:
                - generic [ref=e219]: "-- Select --"
                - generic [ref=e221]: 
          - separator [ref=e222]
          - generic [ref=e223]:
            - button "Reset" [ref=e224] [cursor=pointer]
            - button "Search" [active] [ref=e225] [cursor=pointer]
      - generic [ref=e226]:
        - button " Add" [ref=e228] [cursor=pointer]:
          - generic [ref=e229]: 
          - text: Add
        - table [ref=e231]
    - generic [ref=e236]:
      - paragraph [ref=e237]: OrangeHRM OS 5.8
      - paragraph [ref=e238]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e239] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | 
  3  | class PIMPage {
  4  | 
  5  |   constructor(page) {
  6  | 
  7  |     this.page = page;
  8  | 
  9  |     this.pimMenu = page.getByRole('link', { name: 'PIM' });
  10 | 
  11 |     this.addEmployeeButton = page.getByRole('button', { name: 'Add' });
  12 | 
  13 |     this.firstNameInput = page.locator('input[name="firstName"]');
  14 | 
  15 |     this.lastNameInput = page.locator('input[name="lastName"]');
  16 | 
  17 |     this.saveButton = page.getByRole('button', { name: 'Save' });
  18 | 
  19 |     this.successToast = page.getByText('Successfully Saved');
  20 | 
  21 |     this.employeeNameSearch =
  22 |       page.locator('(//input[@placeholder="Type for hints..."])[1]');
  23 | 
  24 |     this.searchButton =
  25 |       page.getByRole('button', { name: 'Search' });
  26 | 
  27 |     this.employeeTableRows =
  28 |       page.locator('.oxd-table-body .oxd-table-row');
  29 | 
  30 |     this.employeeNameCells =
  31 |       page.locator('.oxd-table-body .oxd-table-row .oxd-table-cell');
  32 | 
  33 |     this.personalDetailsHeader =
  34 |     page.getByRole('heading', {
  35 |       name: 'Personal Details'
  36 |     });
  37 |   }
  38 | 
  39 |   async navigateToPIM() {
  40 |     await this.pimMenu.click();
  41 |   }
  42 | 
  43 |   async clickAddEmployee() {
  44 |     await this.addEmployeeButton.click();
  45 |   }
  46 | 
  47 |   async addEmployee(firstName, lastName) {
  48 |     await this.firstNameInput.fill(firstName);
  49 |     await this.lastNameInput.fill(lastName);
  50 |     await Promise.all([
  51 |     this.page.waitForLoadState('networkidle'),
  52 |     this.saveButton.click()
  53 |     ]);
  54 |   }
  55 | 
  56 |   async verifyEmployeeAdded() {
  57 |   await expect(
  58 |     this.personalDetailsHeader
  59 |     ).toBeVisible({
  60 |       timeout: 15000
  61 |     });
  62 |   }
  63 | 
  64 |   async searchEmployee(employeeName) {
  65 |     await this.employeeNameSearch.fill(employeeName);
  66 |     await this.searchButton.click();
  67 |   }
  68 |   
  69 |   async verifyEmployeeInTable(employeeName) {
> 70 |   await this.page.waitForTimeout(2000);
     |                   ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  71 |   const rows = await this.employeeTableRows.allTextContents();
  72 |   const employeeFound = rows.some(row =>
  73 |     row.includes(employeeName)
  74 |   );
  75 | 
  76 |     expect(employeeFound).toBeTruthy();
  77 |   }
  78 | 
  79 |   async getEmployeeCount() {
  80 |     await this.employeeTableRows.first().waitFor();
  81 |     return await this.employeeTableRows.count();
  82 |   }
  83 | }
  84 | 
  85 | module.exports = { PIMPage };
```
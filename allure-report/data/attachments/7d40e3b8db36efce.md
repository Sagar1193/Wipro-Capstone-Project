# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\apiMock.spec.js >> API Mocking Tests >> Mock Employee API Response
- Location: tests\api\apiMock.spec.js:6:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Mock Employee')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Mock Employee')

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
      - paragraph: testName testLastName
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
- heading "Employee Information" [level=5]
- button ""
- separator
- text: Employee Name
- textbox "Type for hints..."
- text: Employee Id
- textbox
- text: Employment Status -- Select --  Include Current Employees Only  Supervisor Name
- textbox "Type for hints..."
- text: Job Title -- Select --  Sub Unit -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: No Records Found
- table:
  - rowgroup:
    - row " Id  First (& Middle) Name  Last Name  Job Title  Employment Status  Sub Unit  Supervisor  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Id "
      - columnheader "First (& Middle) Name "
      - columnheader "Last Name "
      - columnheader "Job Title "
      - columnheader "Employment Status "
      - columnheader "Sub Unit "
      - columnheader "Supervisor "
      - columnheader "Actions"
  - rowgroup:
    - row " Mock undefined Employee  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Mock undefined"
      - cell "Employee"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
- paragraph: OrangeHRM OS 5.8
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
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
  9  |     await page.route(
  10 |       '**/api/v2/pim/employees*',
  11 | 
  12 |       async route => {
  13 | 
  14 |         const mockResponse = {
  15 | 
  16 |           data: [
  17 |             {
  18 |               empNumber: 999,
  19 |               firstName: 'Mock',
  20 |               lastName: 'Employee'
  21 |             }
  22 |           ]
  23 |         };
  24 | 
  25 |         await route.fulfill({
  26 | 
  27 |           status: 200,
  28 | 
  29 |           contentType: 'application/json',
  30 | 
  31 |           body: JSON.stringify(mockResponse)
  32 |         });
  33 |       }
  34 |     );
  35 | 
  36 |     await loginPage.gotoLoginPage();
  37 | 
  38 |     await loginPage.login();
  39 | 
  40 |     await loginPage.verifySuccessfulLogin();
  41 | 
  42 |     await page.getByRole('link', {
  43 |       name: 'PIM'
  44 |     }).click();
  45 | 
  46 |     await expect(
  47 |       page.getByText('Mock Employee')
> 48 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  49 |   });
  50 | 
  51 | });
```
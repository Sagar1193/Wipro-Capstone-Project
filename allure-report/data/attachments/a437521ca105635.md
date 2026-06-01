# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual\dashboardVisual.spec.js >> Visual Regression Tests >> PIM Page Visual Validation
- Location: tests\visual\dashboardVisual.spec.js:40:5

# Error details

```
Error: A snapshot doesn't exist at C:\Users\sagar\Downloads\Capstone\tests\visual\dashboardVisual.spec.js-snapshots\pim-page-firefox-win32.png, writing actual.
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
              - paragraph [ref=e127]: Zeztz Rider
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
              - textbox "Type for hints..." [ref=e167]
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
            - button "Search" [ref=e225] [cursor=pointer]
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
  31  |       await expect(page).toHaveScreenshot(
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
> 55  |       await expect(page).toHaveScreenshot(
      |       ^ Error: A snapshot doesn't exist at C:\Users\sagar\Downloads\Capstone\tests\visual\dashboardVisual.spec.js-snapshots\pim-page-firefox-win32.png, writing actual.
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
  82  |           maxDiffPixelRatio: 0.1,
  83  |         }
  84  |       );
  85  |     });
  86  | 
  87  |     test('Leave Page Visual Validation',
  88  |       async ({
  89  |         page,
  90  |         loginPage,
  91  |         leavePage
  92  |       }) => {
  93  | 
  94  |       await loginPage.gotoLoginPage();
  95  | 
  96  |       await loginPage.login();
  97  | 
  98  |       await loginPage.verifySuccessfulLogin();
  99  | 
  100 |       await leavePage.navigateToLeave();
  101 | 
  102 |       await expect(page).toHaveScreenshot(
  103 |         'leave-page.png',
  104 |         {
  105 |           maxDiffPixelRatio: 0.1,
  106 |         }
  107 |       );
  108 |     });
  109 | });
```
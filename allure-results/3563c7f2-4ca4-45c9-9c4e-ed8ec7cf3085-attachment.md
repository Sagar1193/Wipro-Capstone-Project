# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual\dashboardVisual.spec.js >> Visual Regression Tests >> Admin Page Visual Validation
- Location: tests\visual\dashboardVisual.spec.js:64:5

# Error details

```
Error: A snapshot doesn't exist at C:\Users\sagar\Downloads\Capstone\tests\visual\dashboardVisual.spec.js-snapshots\admin-page-firefox-win32.png, writing actual.
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
          - generic [ref=e113]:
            - heading "Admin" [level=6] [ref=e114]
            - heading "/ User Management" [level=6] [ref=e115]
        - link "Upgrade" [ref=e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e118] [cursor=pointer]: Upgrade
        - list [ref=e124]:
          - listitem [ref=e125]:
            - generic [ref=e126] [cursor=pointer]:
              - img "profile picture" [ref=e127]
              - paragraph [ref=e128]: Zeztz Rider
              - generic [ref=e129]: 
      - navigation "Topbar Menu" [ref=e131]:
        - list [ref=e132]:
          - listitem [ref=e133] [cursor=pointer]:
            - generic [ref=e134]:
              - text: User Management
              - generic [ref=e135]: 
          - listitem [ref=e136] [cursor=pointer]:
            - generic [ref=e137]:
              - text: Job
              - generic [ref=e138]: 
          - listitem [ref=e139] [cursor=pointer]:
            - generic [ref=e140]:
              - text: Organization
              - generic [ref=e141]: 
          - listitem [ref=e142] [cursor=pointer]:
            - generic [ref=e143]:
              - text: Qualifications
              - generic [ref=e144]: 
          - listitem [ref=e145] [cursor=pointer]:
            - link "Nationalities" [ref=e146]:
              - /url: "#"
          - listitem [ref=e147] [cursor=pointer]:
            - link "Corporate Branding" [ref=e148]:
              - /url: "#"
          - listitem [ref=e149] [cursor=pointer]:
            - generic [ref=e150]:
              - text: More
              - generic [ref=e151]: 
          - button "" [ref=e153] [cursor=pointer]:
            - generic [ref=e154]: 
  - generic [ref=e155]:
    - generic [ref=e157]:
      - generic [ref=e158]:
        - generic [ref=e159]:
          - heading "System Users" [level=5] [ref=e161]
          - button "" [ref=e164] [cursor=pointer]:
            - generic [ref=e165]: 
        - separator [ref=e166]
        - generic [ref=e168]:
          - generic [ref=e170]:
            - generic [ref=e172]:
              - generic [ref=e174]: Username
              - textbox [ref=e176]
            - generic [ref=e178]:
              - generic [ref=e180]: User Role
              - generic [ref=e183] [cursor=pointer]:
                - generic [ref=e184]: "-- Select --"
                - generic [ref=e186]: 
            - generic [ref=e188]:
              - generic [ref=e190]: Employee Name
              - textbox "Type for hints..." [ref=e194]
            - generic [ref=e196]:
              - generic [ref=e198]: Status
              - generic [ref=e201] [cursor=pointer]:
                - generic [ref=e202]: "-- Select --"
                - generic [ref=e204]: 
          - separator [ref=e205]
          - generic [ref=e206]:
            - button "Reset" [ref=e207] [cursor=pointer]
            - button "Search" [ref=e208] [cursor=pointer]
      - generic [ref=e209]:
        - button " Add" [ref=e211] [cursor=pointer]:
          - generic [ref=e212]: 
          - text: Add
        - table [ref=e214]
    - generic [ref=e219]:
      - paragraph [ref=e220]: OrangeHRM OS 5.8
      - paragraph [ref=e221]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e222] [cursor=pointer]:
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
> 79  |       await expect(page).toHaveScreenshot(
      |       ^ Error: A snapshot doesn't exist at C:\Users\sagar\Downloads\Capstone\tests\visual\dashboardVisual.spec.js-snapshots\admin-page-firefox-win32.png, writing actual.
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
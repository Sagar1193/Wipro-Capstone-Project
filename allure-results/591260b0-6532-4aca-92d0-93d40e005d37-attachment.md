# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual\dashboardVisual.spec.js >> Visual Regression Tests >> Leave Page Visual Validation
- Location: tests\visual\dashboardVisual.spec.js:87:5

# Error details

```
Error: A snapshot doesn't exist at C:\Users\sagar\Downloads\Capstone\tests\visual\dashboardVisual.spec.js-snapshots\leave-page-webkit-win32.png, writing actual.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7]:
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
              - link "Admin" [ref=e21]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "Leave" [level=6] [ref=e114]
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
            - link "Apply" [ref=e133]:
              - /url: "#"
          - listitem [ref=e134] [cursor=pointer]:
            - link "My Leave" [ref=e135]:
              - /url: "#"
          - listitem [ref=e136] [cursor=pointer]:
            - generic [ref=e137]:
              - text: Entitlements
              - generic [ref=e138]: 
          - listitem [ref=e139] [cursor=pointer]:
            - generic [ref=e140]:
              - text: Reports
              - generic [ref=e141]: 
          - listitem [ref=e142] [cursor=pointer]:
            - generic [ref=e143]:
              - text: Configure
              - generic [ref=e144]: 
          - listitem [ref=e145] [cursor=pointer]:
            - link "Leave List" [ref=e146]:
              - /url: "#"
          - listitem [ref=e147] [cursor=pointer]:
            - link "Assign Leave" [ref=e148]:
              - /url: "#"
          - button "" [ref=e150] [cursor=pointer]:
            - generic [ref=e151]: 
  - generic [ref=e152]:
    - generic [ref=e154]:
      - generic [ref=e155]:
        - generic [ref=e156]:
          - heading "Leave List" [level=5] [ref=e158]
          - button "" [ref=e161] [cursor=pointer]:
            - generic [ref=e162]: 
        - separator [ref=e163]
        - generic [ref=e165]:
          - generic [ref=e167]:
            - generic [ref=e169]:
              - generic [ref=e171]: From Date
              - generic [ref=e174]:
                - textbox "yyyy-dd-mm" [ref=e175]: 2026-01-01
                - generic [ref=e176] [cursor=pointer]: 
            - generic [ref=e178]:
              - generic [ref=e180]: To Date
              - generic [ref=e183]:
                - textbox "yyyy-dd-mm" [ref=e184]: 2026-31-12
                - generic [ref=e185] [cursor=pointer]: 
            - generic [ref=e187]:
              - generic [ref=e189]: Show Leave with Status*
              - generic [ref=e191]:
                - generic [ref=e192] [cursor=pointer]:
                  - generic [ref=e193]: "-- Select --"
                  - generic [ref=e195]: 
                - generic [ref=e197]:
                  - text: Pending Approval
                  - generic [ref=e198] [cursor=pointer]: 
            - generic [ref=e200]:
              - generic [ref=e202]: Leave Type
              - generic [ref=e205] [cursor=pointer]:
                - generic [ref=e206]: "-- Select --"
                - generic [ref=e208]: 
          - generic [ref=e210]:
            - generic [ref=e212]:
              - generic [ref=e214]: Employee Name
              - textbox "Type for hints..." [ref=e218]
            - generic [ref=e220]:
              - generic [ref=e222]: Sub Unit
              - generic [ref=e225] [cursor=pointer]:
                - generic [ref=e226]: "-- Select --"
                - generic [ref=e228]: 
            - generic [ref=e229]:
              - paragraph [ref=e230]: Include Past Employees
              - checkbox [ref=e233]
          - separator [ref=e235]
          - generic [ref=e236]:
            - paragraph [ref=e237]: "* Required"
            - button "Reset" [ref=e238] [cursor=pointer]
            - button "Search" [ref=e239] [cursor=pointer]
      - generic [ref=e240]:
        - generic [ref=e242]: (2) Records Found
        - table [ref=e244]:
          - rowgroup [ref=e245]:
            - row " Date Employee Name Leave Type Leave Balance (Days) Number of Days Status Comments Actions" [ref=e246]:
              - columnheader "" [ref=e247]:
                - generic [ref=e249] [cursor=pointer]:
                  - checkbox "" [ref=e250]
                  - generic [ref=e252]: 
              - columnheader "Date" [ref=e253]
              - columnheader "Employee Name" [ref=e254]
              - columnheader "Leave Type" [ref=e255]
              - columnheader "Leave Balance (Days)" [ref=e256]
              - columnheader "Number of Days" [ref=e257]
              - columnheader "Status" [ref=e258]
              - columnheader "Comments" [ref=e259]
              - columnheader "Actions" [ref=e260]
          - rowgroup [ref=e261]:
            - row " 2026-09-06 to 2026-12-06 Zeztz Rider CAN - FMLA 15.00 4.00 Pending Approval (4.00) " [ref=e263]:
              - cell "" [ref=e264]:
                - generic [ref=e267] [cursor=pointer]:
                  - checkbox "" [ref=e268]
                  - generic [ref=e270]: 
              - cell "2026-09-06 to 2026-12-06" [ref=e271]:
                - generic [ref=e272]: 2026-09-06 to 2026-12-06
              - cell "Zeztz Rider" [ref=e273]:
                - generic [ref=e274]: Zeztz Rider
              - cell "CAN - FMLA" [ref=e275]:
                - generic [ref=e276]: CAN - FMLA
              - cell "15.00" [ref=e277]:
                - generic [ref=e278]: "15.00"
              - cell "4.00" [ref=e279]:
                - generic [ref=e280]: "4.00"
              - cell "Pending Approval (4.00)" [ref=e281]:
                - generic [ref=e282]: Pending Approval (4.00)
              - cell [ref=e283]
              - cell "" [ref=e284]:
                - listitem [ref=e286]:
                  - button "" [ref=e287] [cursor=pointer]:
                    - generic [ref=e288]: 
            - row " 2026-08-06 Zeztz Rider CAN - FMLA 15.00 1.00 Pending Approval (1.00) " [ref=e290]:
              - cell "" [ref=e291]:
                - generic [ref=e294] [cursor=pointer]:
                  - checkbox "" [ref=e295]
                  - generic [ref=e297]: 
              - cell "2026-08-06" [ref=e298]:
                - generic [ref=e299]: 2026-08-06
              - cell "Zeztz Rider" [ref=e300]:
                - generic [ref=e301]: Zeztz Rider
              - cell "CAN - FMLA" [ref=e302]:
                - generic [ref=e303]: CAN - FMLA
              - cell "15.00" [ref=e304]:
                - generic [ref=e305]: "15.00"
              - cell "1.00" [ref=e306]:
                - generic [ref=e307]: "1.00"
              - cell "Pending Approval (1.00)" [ref=e308]:
                - generic [ref=e309]: Pending Approval (1.00)
              - cell [ref=e310]
              - cell "" [ref=e311]:
                - listitem [ref=e313]:
                  - button "" [ref=e314] [cursor=pointer]:
                    - generic [ref=e315]: 
    - generic [ref=e317]:
      - paragraph [ref=e318]: OrangeHRM OS 5.8
      - paragraph [ref=e319]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e320]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
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
> 102 |       await expect(page).toHaveScreenshot(
      |       ^ Error: A snapshot doesn't exist at C:\Users\sagar\Downloads\Capstone\tests\visual\dashboardVisual.spec.js-snapshots\leave-page-webkit-win32.png, writing actual.
  103 |         'leave-page.png',
  104 |         {
  105 |           maxDiffPixelRatio: 0.1,
  106 |         }
  107 |       );
  108 |     });
  109 | });
```
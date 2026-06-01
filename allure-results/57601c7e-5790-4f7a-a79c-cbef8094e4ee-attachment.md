# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual\dashboardVisual.spec.js >> Visual Regression Tests >> Admin Page Visual Validation
- Location: tests\visual\dashboardVisual.spec.js:64:5

# Error details

```
Error: A snapshot doesn't exist at C:\Users\sagar\Downloads\Capstone\tests\visual\dashboardVisual.spec.js-snapshots\admin-page-chromium-win32.png, writing actual.
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
              - paragraph [ref=e128]: manda user
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
              - text: Configuration
              - generic [ref=e151]: 
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
        - generic [ref=e213]:
          - separator [ref=e214]
          - generic [ref=e216]: (6) Records Found
        - table [ref=e218]:
          - rowgroup [ref=e219]:
            - row " Username  User Role  Employee Name  Status  Actions" [ref=e220]:
              - columnheader "" [ref=e221]:
                - generic [ref=e223] [cursor=pointer]:
                  - checkbox "" [ref=e224]
                  - generic [ref=e226]: 
              - columnheader "Username " [ref=e227]:
                - text: Username
                - generic [ref=e228]:
                  - generic [ref=e229] [cursor=pointer]: 
                  - text:  
              - columnheader "User Role " [ref=e230]:
                - text: User Role
                - generic [ref=e231]:
                  - generic [ref=e232] [cursor=pointer]: 
                  - text:  
              - columnheader "Employee Name " [ref=e233]:
                - text: Employee Name
                - generic [ref=e234]:
                  - generic [ref=e235] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=e236]:
                - text: Status
                - generic [ref=e237]:
                  - generic [ref=e238] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=e239]
          - rowgroup [ref=e240]:
            - row " Admin Admin manda user Enabled  " [ref=e242]:
              - cell "" [ref=e243]:
                - generic [ref=e247]:
                  - checkbox "" [ref=e248]
                  - generic [ref=e250]: 
              - cell "Admin" [ref=e251]:
                - generic [ref=e252]: Admin
              - cell "Admin" [ref=e253]:
                - generic [ref=e254]: Admin
              - cell "manda user" [ref=e255]:
                - generic [ref=e256]: manda user
              - cell "Enabled" [ref=e257]:
                - generic [ref=e258]: Enabled
              - cell " " [ref=e259]:
                - generic [ref=e260]:
                  - button "" [ref=e261] [cursor=pointer]:
                    - generic [ref=e262]: 
                  - button "" [ref=e263] [cursor=pointer]:
                    - generic [ref=e264]: 
            - row " FMLName ESS Qwerty LName Enabled  " [ref=e266]:
              - cell "" [ref=e267]:
                - generic [ref=e270] [cursor=pointer]:
                  - checkbox "" [ref=e271]
                  - generic [ref=e273]: 
              - cell "FMLName" [ref=e274]:
                - generic [ref=e275]: FMLName
              - cell "ESS" [ref=e276]:
                - generic [ref=e277]: ESS
              - cell "Qwerty LName" [ref=e278]:
                - generic [ref=e279]: Qwerty LName
              - cell "Enabled" [ref=e280]:
                - generic [ref=e281]: Enabled
              - cell " " [ref=e282]:
                - generic [ref=e283]:
                  - button "" [ref=e284] [cursor=pointer]:
                    - generic [ref=e285]: 
                  - button "" [ref=e286] [cursor=pointer]:
                    - generic [ref=e287]: 
            - row " FMLName1 ESS FName LName Enabled  " [ref=e289]:
              - cell "" [ref=e290]:
                - generic [ref=e293] [cursor=pointer]:
                  - checkbox "" [ref=e294]
                  - generic [ref=e296]: 
              - cell "FMLName1" [ref=e297]:
                - generic [ref=e298]: FMLName1
              - cell "ESS" [ref=e299]:
                - generic [ref=e300]: ESS
              - cell "FName LName" [ref=e301]:
                - generic [ref=e302]: FName LName
              - cell "Enabled" [ref=e303]:
                - generic [ref=e304]: Enabled
              - cell " " [ref=e305]:
                - generic [ref=e306]:
                  - button "" [ref=e307] [cursor=pointer]:
                    - generic [ref=e308]: 
                  - button "" [ref=e309] [cursor=pointer]:
                    - generic [ref=e310]: 
            - row " Jobinsam@6742 ESS Jobin Sam Enabled  " [ref=e312]:
              - cell "" [ref=e313]:
                - generic [ref=e316] [cursor=pointer]:
                  - checkbox "" [ref=e317]
                  - generic [ref=e319]: 
              - cell "Jobinsam@6742" [ref=e320]:
                - generic [ref=e321]: Jobinsam@6742
              - cell "ESS" [ref=e322]:
                - generic [ref=e323]: ESS
              - cell "Jobin Sam" [ref=e324]:
                - generic [ref=e325]: Jobin Sam
              - cell "Enabled" [ref=e326]:
                - generic [ref=e327]: Enabled
              - cell " " [ref=e328]:
                - generic [ref=e329]:
                  - button "" [ref=e330] [cursor=pointer]:
                    - generic [ref=e331]: 
                  - button "" [ref=e332] [cursor=pointer]:
                    - generic [ref=e333]: 
            - row " Lakshmanan Admin Ranga Akunuri Enabled  " [ref=e335]:
              - cell "" [ref=e336]:
                - generic [ref=e339] [cursor=pointer]:
                  - checkbox "" [ref=e340]
                  - generic [ref=e342]: 
              - cell "Lakshmanan" [ref=e343]:
                - generic [ref=e344]: Lakshmanan
              - cell "Admin" [ref=e345]:
                - generic [ref=e346]: Admin
              - cell "Ranga Akunuri" [ref=e347]:
                - generic [ref=e348]: Ranga Akunuri
              - cell "Enabled" [ref=e349]:
                - generic [ref=e350]: Enabled
              - cell " " [ref=e351]:
                - generic [ref=e352]:
                  - button "" [ref=e353] [cursor=pointer]:
                    - generic [ref=e354]: 
                  - button "" [ref=e355] [cursor=pointer]:
                    - generic [ref=e356]: 
            - row " user418787 ESS Login User Enabled  " [ref=e358]:
              - cell "" [ref=e359]:
                - generic [ref=e362] [cursor=pointer]:
                  - checkbox "" [ref=e363]
                  - generic [ref=e365]: 
              - cell "user418787" [ref=e366]:
                - generic [ref=e367]: user418787
              - cell "ESS" [ref=e368]:
                - generic [ref=e369]: ESS
              - cell "Login User" [ref=e370]:
                - generic [ref=e371]: Login User
              - cell "Enabled" [ref=e372]:
                - generic [ref=e373]: Enabled
              - cell " " [ref=e374]:
                - generic [ref=e375]:
                  - button "" [ref=e376] [cursor=pointer]:
                    - generic [ref=e377]: 
                  - button "" [ref=e378] [cursor=pointer]:
                    - generic [ref=e379]: 
    - generic [ref=e381]:
      - paragraph [ref=e382]: OrangeHRM OS 5.8
      - paragraph [ref=e383]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e384] [cursor=pointer]:
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
      |       ^ Error: A snapshot doesn't exist at C:\Users\sagar\Downloads\Capstone\tests\visual\dashboardVisual.spec.js-snapshots\admin-page-chromium-win32.png, writing actual.
  80  |         'admin-page.png',
  81  |         {
  82  |           fullPage: true,
  83  |           maxDiffPixelRatio: 0.1,
  84  |         }
  85  |       );
  86  |     });
  87  | 
  88  |     test('Leave Page Visual Validation',
  89  |       async ({
  90  |         page,
  91  |         loginPage,
  92  |         leavePage
  93  |       }) => {
  94  | 
  95  |       await loginPage.gotoLoginPage();
  96  | 
  97  |       await loginPage.login();
  98  | 
  99  |       await loginPage.verifySuccessfulLogin();
  100 | 
  101 |       await leavePage.navigateToLeave();
  102 | 
  103 |       await expect(page).toHaveScreenshot(
  104 |         'leave-page.png',
  105 |         {
  106 |           fullPage: true,
  107 |           maxDiffPixelRatio: 0.1,
  108 |         }
  109 |       );
  110 |     });
  111 | });
```
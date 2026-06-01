# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leave\leave.spec.js >> Leave Module Tests >> Verify Entitlements Page
- Location: tests\leave\leave.spec.js:95:5

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Entitlements' })

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
          - heading "Leave" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: manda user
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
        - generic [ref=e242]: No Records Found
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
          - rowgroup
    - generic [ref=e262]:
      - paragraph [ref=e263]: OrangeHRM OS 5.8
      - paragraph [ref=e264]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e265] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  15  |       page.getByRole('link', {
  16  |         name: 'Apply'
  17  |       });
  18  | 
  19  |     this.leaveListButton =
  20  |       page.getByRole('link', {
  21  |         name: 'Leave List'
  22  |       });
  23  | 
  24  |     this.searchButton =
  25  |       page.getByRole('button', {
  26  |         name: 'Search'
  27  |       });
  28  | 
  29  |     this.resetButton =
  30  |       page.getByRole('button', {
  31  |         name: 'Reset'
  32  |       });
  33  | 
  34  |     this.applyMenu =
  35  |         page.getByRole('link', {
  36  |             name: 'Apply'
  37  |         });
  38  | 
  39  |         this.leaveListMenu =
  40  |         page.getByRole('link', {
  41  |             name: 'Leave List'
  42  |         });
  43  | 
  44  |         this.assignLeaveMenu =
  45  |         page.getByRole('link', {
  46  |             name: 'Assign Leave'
  47  |         });
  48  | 
  49  |         this.entitlementsMenu =
  50  |         page.getByRole('link', {
  51  |             name: 'Entitlements'
  52  |         });
  53  | 
  54  |         this.myLeaveMenu =
  55  |         page.getByRole('link', {
  56  |             name: 'My Leave'
  57  |         });
  58  |   }
  59  | 
  60  |   async navigateToLeave() {
  61  |     await this.leaveMenu.click();
  62  |   }
  63  | 
  64  |   async verifyLeavePageLoaded() {
  65  |     await expect(
  66  |       this.searchButton
  67  |     ).toBeVisible();
  68  |   }
  69  | 
  70  |   async verifyResetButtonVisible() {
  71  |     await expect(
  72  |       this.resetButton
  73  |     ).toBeVisible();
  74  |   }
  75  | 
  76  |   async verifySearchButtonVisible() {
  77  |     await expect(
  78  |       this.searchButton
  79  |     ).toBeVisible();
  80  |   }
  81  | 
  82  |   async verifyApplyLeavePage() {
  83  | 
  84  |   await this.applyMenu.click();
  85  | 
  86  |         await expect(
  87  |             this.page
  88  |             .getByRole('heading')
  89  |             .first()
  90  |         ).toBeVisible();
  91  |         }
  92  | 
  93  |         async verifyLeaveListPage() {
  94  | 
  95  |         await this.leaveListMenu.click();
  96  | 
  97  |         await expect(
  98  |             this.searchButton
  99  |         ).toBeVisible();
  100 |         }
  101 | 
  102 |         async verifyAssignLeavePage() {
  103 | 
  104 |         await this.assignLeaveMenu.click();
  105 | 
  106 |         await expect(
  107 |             this.page
  108 |             .getByRole('heading')
  109 |             .first()
  110 |         ).toBeVisible();
  111 |         }
  112 | 
  113 |         async verifyEntitlementsPage() {
  114 | 
> 115 |         await this.entitlementsMenu.click();
      |                                     ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  116 | 
  117 |         await expect(
  118 |             this.page
  119 |             .locator('body')
  120 |         ).toBeVisible();
  121 |         }
  122 | 
  123 |         async verifyMyLeavePage() {
  124 | 
  125 |         await this.myLeaveMenu.click();
  126 | 
  127 |         await expect(
  128 |             this.searchButton
  129 |         ).toBeVisible();
  130 |     }
  131 | }
  132 | 
  133 | module.exports = { LeavePage };
```
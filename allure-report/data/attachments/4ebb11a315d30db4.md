# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin\admin.spec.js >> Admin Module Tests >> Verify Cancel Button Visible
- Location: tests\admin\admin.spec.js:181:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect.toBeVisible: Target page, context or browser has been closed
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
              - paragraph [ref=e128]: Quan <script></
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
  72  |   ).toBeVisible({
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
> 117 |         ).toBeVisible();
      |           ^ Error: expect.toBeVisible: Target page, context or browser has been closed
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
  173 |   }
  174 | 
  175 |   async verifyAdminMenuVisible() {
  176 | 
  177 |     await expect(
  178 |       this.adminMenu
  179 |     ).toBeVisible();
  180 |   }
  181 | 
  182 |   async verifyAddButtonEnabled() {
  183 | 
  184 |     await expect(
  185 |       this.addButton
  186 |     ).toBeEnabled();
  187 |   }
  188 | }
  189 | 
  190 | module.exports = { AdminPage };
```
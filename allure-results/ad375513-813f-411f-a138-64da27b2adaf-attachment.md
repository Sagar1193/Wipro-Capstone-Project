# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim\pim.spec.js >> PIM Module Tests >> Upload Employee Profile Image
- Location: tests\pim\pim.spec.js:118:3

# Error details

```
TimeoutError: locator.setInputFiles: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('input[type="file"]')

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
              - paragraph [ref=e127]: Orange Test
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - button "" [ref=e133] [cursor=pointer]:
            - generic [ref=e134]: 
  - generic [ref=e135]:
    - generic [ref=e139]:
      - generic [ref=e140]:
        - generic [ref=e141]:
          - heading "Orange Test" [level=6] [ref=e143]
          - img "profile picture" [ref=e146] [cursor=pointer]
        - tablist [ref=e147]:
          - tab "Personal Details" [ref=e148]:
            - link "Personal Details" [ref=e149] [cursor=pointer]:
              - /url: /web/index.php/pim/viewPersonalDetails/empNumber/7
          - tab "Contact Details" [ref=e150]:
            - link "Contact Details" [ref=e151] [cursor=pointer]:
              - /url: /web/index.php/pim/contactDetails/empNumber/7
          - tab "Emergency Contacts" [ref=e152]:
            - link "Emergency Contacts" [ref=e153] [cursor=pointer]:
              - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/7
          - tab "Dependents" [ref=e154]:
            - link "Dependents" [ref=e155] [cursor=pointer]:
              - /url: /web/index.php/pim/viewDependents/empNumber/7
          - tab "Immigration" [ref=e156]:
            - link "Immigration" [ref=e157] [cursor=pointer]:
              - /url: /web/index.php/pim/viewImmigration/empNumber/7
          - tab "Job" [ref=e158]:
            - link "Job" [ref=e159] [cursor=pointer]:
              - /url: /web/index.php/pim/viewJobDetails/empNumber/7
          - tab "Salary" [ref=e160]:
            - link "Salary" [ref=e161] [cursor=pointer]:
              - /url: /web/index.php/pim/viewSalaryList/empNumber/7
          - tab "Report-to" [ref=e162]:
            - link "Report-to" [ref=e163] [cursor=pointer]:
              - /url: /web/index.php/pim/viewReportToDetails/empNumber/7
          - tab "Qualifications" [ref=e164]:
            - link "Qualifications" [ref=e165] [cursor=pointer]:
              - /url: /web/index.php/pim/viewQualifications/empNumber/7
          - tab "Memberships" [ref=e166]:
            - link "Memberships" [ref=e167] [cursor=pointer]:
              - /url: /web/index.php/pim/viewMemberships/empNumber/7
      - generic [ref=e168]:
        - generic [ref=e169]:
          - heading "Personal Details" [level=6] [ref=e170]
          - separator [ref=e171]
          - generic [ref=e172]:
            - generic [ref=e176]:
              - generic [ref=e178]: Employee Full Name*
              - generic [ref=e179]:
                - textbox "First Name" [ref=e182]: Orange
                - textbox "Middle Name" [ref=e185]: Test
                - textbox "Last Name" [ref=e188]: Test
            - separator [ref=e189]
            - generic [ref=e190]:
              - generic [ref=e191]:
                - generic [ref=e193]:
                  - generic [ref=e195]: Employee Id
                  - textbox [ref=e197]: muser
                - generic [ref=e199]:
                  - generic [ref=e201]: Other Id
                  - textbox [ref=e203]: "4957589"
              - generic [ref=e204]:
                - generic [ref=e206]:
                  - generic [ref=e208]: Driver's License Number
                  - textbox [ref=e210]: "56788"
                - generic [ref=e212]:
                  - generic [ref=e214]: License Expiry Date
                  - generic [ref=e217]:
                    - textbox "yyyy-dd-mm" [ref=e218]: 2023-18-10
                    - generic [ref=e219] [cursor=pointer]: 
            - separator [ref=e220]
            - generic [ref=e221]:
              - generic [ref=e222]:
                - generic [ref=e224]:
                  - generic [ref=e226]: Nationality
                  - generic [ref=e229] [cursor=pointer]:
                    - generic [ref=e230]: American
                    - generic [ref=e232]: 
                - generic [ref=e234]:
                  - generic [ref=e236]: Marital Status
                  - generic [ref=e239] [cursor=pointer]:
                    - generic [ref=e240]: Single
                    - generic [ref=e242]: 
              - generic [ref=e243]:
                - generic [ref=e245]:
                  - generic [ref=e247]: Date of Birth
                  - generic [ref=e250]:
                    - textbox "yyyy-dd-mm" [ref=e251]: 2023-21-10
                    - generic [ref=e252] [cursor=pointer]: 
                - generic [ref=e254]:
                  - generic [ref=e256]: Gender
                  - generic [ref=e257]:
                    - generic [ref=e261] [cursor=pointer]:
                      - radio "Male" [checked] [ref=e262]
                      - text: Male
                    - generic [ref=e267] [cursor=pointer]:
                      - radio "Female" [ref=e268]
                      - text: Female
            - separator [ref=e270]
            - generic [ref=e271]:
              - paragraph [ref=e272]: "* Required"
              - button "Save" [ref=e273] [cursor=pointer]
        - generic [ref=e274]:
          - separator [ref=e275]
          - generic [ref=e276]:
            - heading "Custom Fields" [level=6] [ref=e277]
            - separator [ref=e278]
            - generic [ref=e279]:
              - generic [ref=e281]:
                - generic [ref=e283]:
                  - generic [ref=e285]: Blood Type
                  - generic [ref=e288] [cursor=pointer]:
                    - generic [ref=e289]: A+
                    - generic [ref=e291]: 
                - generic [ref=e293]:
                  - generic [ref=e295]: Test_Field
                  - textbox [ref=e297]: "445"
              - separator [ref=e298]
              - button "Save" [ref=e300] [cursor=pointer]
        - generic [ref=e301]:
          - separator [ref=e302]
          - generic [ref=e304]:
            - heading "Attachments" [level=6] [ref=e305]
            - button " Add" [ref=e306] [cursor=pointer]:
              - generic [ref=e307]: 
              - text: Add
          - generic [ref=e308]:
            - separator [ref=e309]
            - generic [ref=e311]: (1) Record Found
          - table [ref=e313]:
            - rowgroup [ref=e314]:
              - row " File Name Description Size Type Date Added Added By Actions" [ref=e315]:
                - columnheader "" [ref=e316]:
                  - generic [ref=e318] [cursor=pointer]:
                    - checkbox "" [ref=e319]
                    - generic [ref=e321]: 
                - columnheader "File Name" [ref=e322]
                - columnheader "Description" [ref=e323]
                - columnheader "Size" [ref=e324]
                - columnheader "Type" [ref=e325]
                - columnheader "Date Added" [ref=e326]
                - columnheader "Added By" [ref=e327]
                - columnheader "Actions" [ref=e328]
            - rowgroup [ref=e329]:
              - row " test.png test 53.16 kB image/png 2024-06-02 Admin   " [ref=e331]:
                - cell "" [ref=e332]:
                  - generic [ref=e335] [cursor=pointer]:
                    - checkbox "" [ref=e336]
                    - generic [ref=e338]: 
                - cell "test.png" [ref=e339]:
                  - generic [ref=e340]: test.png
                - cell "test" [ref=e341]:
                  - generic [ref=e342]: test
                - cell "53.16 kB" [ref=e343]:
                  - generic [ref=e344]: 53.16 kB
                - cell "image/png" [ref=e345]:
                  - generic [ref=e346]: image/png
                - cell "2024-06-02" [ref=e347]:
                  - generic [ref=e348]: 2024-06-02
                - cell "Admin" [ref=e349]:
                  - generic [ref=e350]: Admin
                - cell "  " [ref=e351]:
                  - generic [ref=e352]:
                    - button "" [ref=e353] [cursor=pointer]:
                      - generic [ref=e354]: 
                    - button "" [ref=e355] [cursor=pointer]:
                      - generic [ref=e356]: 
                    - button "" [ref=e357] [cursor=pointer]:
                      - generic [ref=e358]: 
    - generic [ref=e359]:
      - paragraph [ref=e360]: OrangeHRM OS 5.8
      - paragraph [ref=e361]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e362] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  57  | 
  58  |     this.myInfoMenu =
  59  |     page.getByRole('link', {
  60  |       name: 'My Info'
  61  |     });
  62  | 
  63  |     this.profileImage =
  64  |       page.locator('input[type="file"]');
  65  | 
  66  |     this.profileImageSaveButton =
  67  |       page.getByRole('button', {
  68  |         name: 'Save'
  69  |       }).last();
  70  | 
  71  |     this.firstEmployeeDeleteButton =
  72  |       page.locator(
  73  |         '.oxd-table-body .oxd-table-row button'
  74  |       ).nth(1);
  75  | 
  76  |     this.confirmDeleteButton =
  77  |       page.getByRole('button', {
  78  |         name: 'Yes, Delete'
  79  |       });
  80  | 
  81  |     this.deleteSuccessToast =
  82  |       page.getByText(
  83  |         'Successfully Deleted'
  84  |       );
  85  | 
  86  |     this.employeeIdSearch =
  87  |       page.locator(
  88  |         '.oxd-form-row .oxd-input'
  89  |       ).nth(1);
  90  | 
  91  |     this.employeeIdSearch =
  92  |       page.locator('.oxd-form-row .oxd-input').nth(1);
  93  | 
  94  |     this.employeeIdCells =
  95  |       page.locator('.oxd-table-body .oxd-table-row .oxd-table-cell:nth-child(2)');
  96  | 
  97  |     this.resetButton =
  98  |       page.getByRole('button', {
  99  |         name: 'Reset'
  100 |       });
  101 |   }
  102 | 
  103 |   async navigateToPIM() {
  104 |     await this.pimMenu.click();
  105 |   }
  106 | 
  107 |   async clickAddEmployee() {
  108 |     await this.addEmployeeButton.click();
  109 |   }
  110 | 
  111 |   async addEmployee(firstName, lastName) {
  112 |     await this.firstNameInput.fill(firstName);
  113 |     await this.lastNameInput.fill(lastName);
  114 |     await this.saveButton.click();
  115 |   }
  116 | 
  117 |   async verifyEmployeeAdded() {
  118 |   await this.personalDetailsHeader
  119 |     .waitFor({
  120 |       state: 'visible',
  121 |       timeout: 30000
  122 |     });
  123 |   }
  124 | 
  125 |   async searchEmployee(employeeName) {
  126 |     await this.employeeNameSearch.fill(employeeName);
  127 |     await this.searchButton.click();
  128 |   }
  129 |   
  130 |   async verifyEmployeeInTable(employeeName) {
  131 |     await this.employeeTableRows
  132 |     .first()
  133 |     .waitFor({
  134 |       state: 'visible',
  135 |       timeout: 30000
  136 |     });
  137 |     const rows =
  138 |       await this.employeeTableRows
  139 |         .allTextContents();
  140 |     const employeeFound =
  141 |       rows.some(row =>
  142 |         row.includes(employeeName)
  143 |       );
  144 |     expect(employeeFound).toBeTruthy();
  145 |   }
  146 | 
  147 |   async getEmployeeCount() {
  148 |     await this.employeeTableRows.first().waitFor();
  149 |     return await this.employeeTableRows.count();
  150 |   }
  151 | 
  152 |   async navigateToMyInfo() {
  153 |     await this.myInfoMenu.click();
  154 |   }
  155 | 
  156 |   async uploadProfileImage(filePath) {
> 157 |     await this.profileImage.setInputFiles(
      |     ^ TimeoutError: locator.setInputFiles: Timeout 10000ms exceeded.
  158 |       filePath
  159 |     );
  160 |     await this.profileImageSaveButton.click();
  161 |   }
  162 | 
  163 |   async verifyProfileImageUploaded() {
  164 | 
  165 |   await expect(
  166 |     this.page.getByText(
  167 |         'Successfully Updated'
  168 |       )
  169 |     ).toBeVisible({
  170 |       timeout: 10000
  171 |     });
  172 |   }
  173 | 
  174 |   async editEmployee() {
  175 | 
  176 |     await this.firstEmployeeEditButton.click();
  177 | 
  178 |     await this.personalDetailsHeader
  179 |       .waitFor({
  180 |         state: 'visible'
  181 |       });
  182 | 
  183 |     await this.middleNameInput.fill(
  184 |       'Updated'
  185 |     );
  186 | 
  187 |     await this.personalSaveButton.click();
  188 | 
  189 |     await expect(
  190 |       this.successUpdateToast
  191 |     ).toBeVisible({
  192 |       timeout: 10000
  193 |     });
  194 |   }
  195 | 
  196 |   async deleteEmployee() {
  197 | 
  198 |     await this.firstEmployeeDeleteButton
  199 |       .click();
  200 | 
  201 |     await this.confirmDeleteButton
  202 |       .click();
  203 | 
  204 |     await expect(
  205 |       this.deleteSuccessToast
  206 |     ).toBeVisible({
  207 |       timeout: 10000
  208 |     });
  209 |   }
  210 | 
  211 |   async getFirstEmployeeId() {
  212 | 
  213 |     await this.employeeTableRows.first().waitFor();
  214 | 
  215 |     const firstRow =
  216 |       await this.employeeTableRows.first().textContent();
  217 | 
  218 |     const employeeId =
  219 |       firstRow.match(/\d+/)?.[0];
  220 | 
  221 |     return employeeId;
  222 |   }
  223 | 
  224 |   async searchEmployeeById(employeeId) {
  225 | 
  226 |     await this.page.waitForURL(
  227 |       '**/viewEmployeeList'
  228 |     );
  229 | 
  230 |     await this.employeeIdSearch.waitFor({
  231 |       state: 'visible',
  232 |       timeout: 30000
  233 |     });
  234 | 
  235 |     await this.employeeIdSearch.fill(
  236 |       employeeId
  237 |     );
  238 | 
  239 |     await this.searchButton.click();
  240 |   }
  241 | 
  242 |   async verifyEmployeeIdSearch(employeeId) {
  243 | 
  244 |     await this.employeeTableRows.first().waitFor({
  245 |       state: 'visible'
  246 |     });
  247 | 
  248 |     const tableText =
  249 |       await this.employeeTableRows.first()
  250 |         .textContent();
  251 | 
  252 |     expect(tableText)
  253 |       .toContain(employeeId);
  254 |   }
  255 | 
  256 |   async resetEmployeeSearch() {
  257 | 
```
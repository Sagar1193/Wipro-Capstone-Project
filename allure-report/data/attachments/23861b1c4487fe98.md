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
  - waiting for locator('.oxd-file-input')

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
              - paragraph [ref=e127]: Steve Rogers
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - button "" [ref=e133] [cursor=pointer]:
            - generic [ref=e134]: 
  - generic [ref=e135]:
    - generic [ref=e139]:
      - generic [ref=e140]:
        - generic [ref=e141]:
          - heading "Steve Rogers" [level=6] [ref=e143]
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
                - textbox "First Name" [ref=e182]: Steve
                - textbox "Middle Name" [ref=e185]
                - textbox "Last Name" [ref=e188]: Rogers
            - separator [ref=e189]
            - generic [ref=e190]:
              - generic [ref=e191]:
                - generic [ref=e193]:
                  - generic [ref=e195]: Employee Id
                  - textbox [ref=e197]: "638013"
                - generic [ref=e199]:
                  - generic [ref=e201]: Other Id
                  - textbox [ref=e203]: "175834"
              - generic [ref=e204]:
                - generic [ref=e206]:
                  - generic [ref=e208]: Driver's License Number
                  - textbox [ref=e210]: "8662174089"
                - generic [ref=e212]:
                  - generic [ref=e214]: License Expiry Date
                  - generic [ref=e217]:
                    - textbox "yyyy-dd-mm" [ref=e218]: 2027-03-06
                    - generic [ref=e219] [cursor=pointer]: 
            - separator [ref=e220]
            - generic [ref=e221]:
              - generic [ref=e222]:
                - generic [ref=e224]:
                  - generic [ref=e226]: Nationality
                  - generic [ref=e229] [cursor=pointer]:
                    - generic [ref=e230]: North Korean
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
  184 | 
  185 |   async editEmployee() {
  186 | 
  187 |     await this.firstEmployeeEditButton.click();
  188 | 
  189 |     await this.personalDetailsHeader
  190 |       .waitFor({
  191 |         state: 'visible'
  192 |       });
  193 | 
  194 |     await this.middleNameInput.fill(
  195 |       'Updated'
  196 |     );
  197 | 
  198 |     await this.personalSaveButton.click();
  199 | 
  200 |     await expect(
  201 |       this.successUpdateToast
  202 |     ).toBeVisible({
  203 |       timeout: 10000
  204 |     });
  205 |   }
  206 | 
  207 |   async deleteEmployee() {
  208 | 
  209 |     await this.firstEmployeeDeleteButton
  210 |       .click();
  211 | 
  212 |     await this.confirmDeleteButton
  213 |       .click();
  214 | 
  215 |     await expect(
  216 |       this.deleteSuccessToast
  217 |     ).toBeVisible({
  218 |       timeout: 10000
  219 |     });
  220 |   }
  221 | 
  222 |   async getFirstEmployeeId() {
  223 | 
  224 |     await this.employeeTableRows.first().waitFor();
  225 | 
  226 |     const firstRow =
  227 |       await this.employeeTableRows.first().textContent();
  228 | 
  229 |     const employeeId =
  230 |       firstRow.match(/\d+/)?.[0];
  231 | 
  232 |     return employeeId;
  233 |   }
  234 | 
  235 |   async searchEmployeeById(employeeId) {
  236 | 
  237 |     await this.page.waitForURL(
  238 |       '**/viewEmployeeList'
  239 |     );
  240 | 
  241 |     await this.employeeIdSearch.waitFor({
  242 |       state: 'visible',
  243 |       timeout: 30000
  244 |     });
  245 | 
  246 |     await this.employeeIdSearch.fill(
  247 |       employeeId
  248 |     );
  249 | 
  250 |     await this.searchButton.click();
  251 |   }
  252 | 
  253 |   async verifyEmployeeIdSearch(employeeId) {
  254 | 
  255 |     await this.employeeTableRows.first().waitFor({
  256 |       state: 'visible'
  257 |     });
  258 | 
  259 |     const tableText =
  260 |       await this.employeeTableRows.first()
  261 |         .textContent();
  262 | 
  263 |     expect(tableText)
  264 |       .toContain(employeeId);
  265 |   }
  266 | 
  267 |   async resetEmployeeSearch() {
  268 | 
  269 |     await this.employeeNameSearch.fill(
  270 |       'Test Employee'
  271 |     );
  272 | 
  273 |     await this.resetButton.click();
  274 | 
  275 |     await expect(
  276 |       this.employeeNameSearch
  277 |     ).toHaveValue('');
  278 |   }
  279 | 
  280 |   async uploadProfileImage(filePath) {
  281 | 
  282 |     console.log('Uploading:', filePath);
  283 | 
> 284 |     await this.profileImage.setInputFiles(
      |     ^ TimeoutError: locator.setInputFiles: Timeout 10000ms exceeded.
  285 |       filePath
  286 |     );
  287 | 
  288 |     await this.profileImageSaveButton.click();
  289 |   }
  290 | 
  291 |   async cancelAddEmployee() {
  292 | 
  293 |   }
  294 | }
  295 | 
  296 | module.exports = { PIMPage };
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim\pim.spec.js >> PIM Module Tests >> Upload Employee Profile Image
- Location: tests\pim\pim.spec.js:118:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Successfully Updated')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText('Successfully Updated')

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
      - paragraph: Steve Rogers
      - text: 
  - navigation "Topbar Menu":
    - list:
      - button ""
- heading "Steve Rogers" [level=6]
- img "profile picture"
- tablist:
  - tab "Personal Details":
    - link "Personal Details":
      - /url: /web/index.php/pim/viewPersonalDetails/empNumber/7
  - tab "Contact Details":
    - link "Contact Details":
      - /url: /web/index.php/pim/contactDetails/empNumber/7
  - tab "Emergency Contacts":
    - link "Emergency Contacts":
      - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/7
  - tab "Dependents":
    - link "Dependents":
      - /url: /web/index.php/pim/viewDependents/empNumber/7
  - tab "Immigration":
    - link "Immigration":
      - /url: /web/index.php/pim/viewImmigration/empNumber/7
  - tab "Job":
    - link "Job":
      - /url: /web/index.php/pim/viewJobDetails/empNumber/7
  - tab "Salary":
    - link "Salary":
      - /url: /web/index.php/pim/viewSalaryList/empNumber/7
  - tab "Report-to":
    - link "Report-to":
      - /url: /web/index.php/pim/viewReportToDetails/empNumber/7
  - tab "Qualifications":
    - link "Qualifications":
      - /url: /web/index.php/pim/viewQualifications/empNumber/7
  - tab "Memberships":
    - link "Memberships":
      - /url: /web/index.php/pim/viewMemberships/empNumber/7
- heading "Change Profile Picture" [level=6]
- separator
- button "Choose File"
- img "profile picture"
- button ""
- paragraph: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
- separator
- button "Save"
- paragraph: OrangeHRM OS 5.8
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
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
  101 | 
  102 |     this.profilePictureButton =
  103 |       this.page.getByRole('img', {
  104 |         name: 'profile picture'
  105 |       }).nth(1);
  106 | 
  107 |     this.uploadButton =
  108 |       this.page.getByRole('button')
  109 |         .nth(4);
  110 |   }
  111 | 
  112 |   async navigateToPIM() {
  113 |     await this.pimMenu.click();
  114 |   }
  115 | 
  116 |   async clickAddEmployee() {
  117 |     await this.addEmployeeButton.click();
  118 |   }
  119 | 
  120 |   async addEmployee(firstName, lastName) {
  121 |     await this.firstNameInput.fill(firstName);
  122 |     await this.lastNameInput.fill(lastName);
  123 |     await this.saveButton.click();
  124 |   }
  125 | 
  126 |   async verifyEmployeeAdded() {
  127 |   await this.personalDetailsHeader
  128 |     .waitFor({
  129 |       state: 'visible',
  130 |       timeout: 30000
  131 |     });
  132 |   }
  133 | 
  134 |   async searchEmployee(employeeName) {
  135 |     await this.employeeNameSearch.fill(employeeName);
  136 |     await this.searchButton.click();
  137 |   }
  138 |   
  139 |   async verifyEmployeeInTable(employeeName) {
  140 |     await this.employeeTableRows
  141 |     .first()
  142 |     .waitFor({
  143 |       state: 'visible',
  144 |       timeout: 30000
  145 |     });
  146 |     const rows =
  147 |       await this.employeeTableRows
  148 |         .allTextContents();
  149 |     const employeeFound =
  150 |       rows.some(row =>
  151 |         row.includes(employeeName)
  152 |       );
  153 |     expect(employeeFound).toBeTruthy();
  154 |   }
  155 | 
  156 |   async getEmployeeCount() {
  157 |     await this.employeeTableRows.first().waitFor();
  158 |     return await this.employeeTableRows.count();
  159 |   }
  160 | 
  161 |   async navigateToMyInfo() {
  162 |     await this.myInfoMenu.click();
  163 |   }
  164 | 
  165 |   async uploadProfileImage() {
  166 | 
  167 |     await this.profilePictureButton.click();
  168 | 
  169 |     await this.uploadButton.click();
  170 |   }
  171 | 
  172 |   async verifyProfileImageUploaded() {
  173 | 
  174 |   await expect(
  175 |     this.page.getByText(
  176 |         'Successfully Updated'
  177 |       )
> 178 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  179 |       timeout: 10000
  180 |     });
  181 |   }
  182 | 
  183 |   async editEmployee() {
  184 | 
  185 |     await this.firstEmployeeEditButton.click();
  186 | 
  187 |     await this.personalDetailsHeader
  188 |       .waitFor({
  189 |         state: 'visible'
  190 |       });
  191 | 
  192 |     await this.middleNameInput.fill(
  193 |       'Updated'
  194 |     );
  195 | 
  196 |     await this.personalSaveButton.click();
  197 | 
  198 |     await expect(
  199 |       this.successUpdateToast
  200 |     ).toBeVisible({
  201 |       timeout: 10000
  202 |     });
  203 |   }
  204 | 
  205 |   async deleteEmployee() {
  206 | 
  207 |     await this.firstEmployeeDeleteButton
  208 |       .click();
  209 | 
  210 |     await this.confirmDeleteButton
  211 |       .click();
  212 | 
  213 |     await expect(
  214 |       this.deleteSuccessToast
  215 |     ).toBeVisible({
  216 |       timeout: 10000
  217 |     });
  218 |   }
  219 | 
  220 |   async getFirstEmployeeId() {
  221 | 
  222 |     await this.employeeTableRows.first().waitFor();
  223 | 
  224 |     const firstRow =
  225 |       await this.employeeTableRows.first().textContent();
  226 | 
  227 |     const employeeId =
  228 |       firstRow.match(/\d+/)?.[0];
  229 | 
  230 |     return employeeId;
  231 |   }
  232 | 
  233 |   async searchEmployeeById(employeeId) {
  234 | 
  235 |     await this.page.waitForURL(
  236 |       '**/viewEmployeeList'
  237 |     );
  238 | 
  239 |     await this.employeeIdSearch.waitFor({
  240 |       state: 'visible',
  241 |       timeout: 30000
  242 |     });
  243 | 
  244 |     await this.employeeIdSearch.fill(
  245 |       employeeId
  246 |     );
  247 | 
  248 |     await this.searchButton.click();
  249 |   }
  250 | 
  251 |   async verifyEmployeeIdSearch(employeeId) {
  252 | 
  253 |     await this.employeeTableRows.first().waitFor({
  254 |       state: 'visible'
  255 |     });
  256 | 
  257 |     const tableText =
  258 |       await this.employeeTableRows.first()
  259 |         .textContent();
  260 | 
  261 |     expect(tableText)
  262 |       .toContain(employeeId);
  263 |   }
  264 | 
  265 |   async resetEmployeeSearch() {
  266 | 
  267 |     await this.employeeNameSearch.fill(
  268 |       'Test Employee'
  269 |     );
  270 | 
  271 |     await this.resetButton.click();
  272 | 
  273 |     await expect(
  274 |       this.employeeNameSearch
  275 |     ).toHaveValue('');
  276 |   }
  277 | 
  278 |   async cancelAddEmployee() {
```
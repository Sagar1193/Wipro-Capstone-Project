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
      - paragraph: Richard johnson
      - text: 
  - navigation "Topbar Menu":
    - list:
      - button ""
- heading "Richard johnson" [level=6]
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
  - tab "Tax Exemptions":
    - link "Tax Exemptions":
      - /url: /web/index.php/pim/viewUsTaxExemptions/empNumber/7
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
  117 |   }
  118 | 
  119 |   async navigateToPIM() {
  120 |     await this.pimMenu.click();
  121 |   }
  122 | 
  123 |   async clickAddEmployee() {
  124 |     await this.addEmployeeButton.click();
  125 |   }
  126 | 
  127 |   async addEmployee(firstName, lastName) {
  128 |     await this.firstNameInput.fill(firstName);
  129 |     await this.lastNameInput.fill(lastName);
  130 |     await this.saveButton.click();
  131 |   }
  132 | 
  133 |   async verifyEmployeeAdded() {
  134 |   await this.personalDetailsHeader
  135 |     .waitFor({
  136 |       state: 'visible',
  137 |       timeout: 30000
  138 |     });
  139 |   }
  140 | 
  141 |   async searchEmployee(employeeName) {
  142 |     await this.employeeNameSearch.fill(employeeName);
  143 |     await this.searchButton.click();
  144 |   }
  145 |   
  146 |   async verifyEmployeeInTable(employeeName) {
  147 |     await this.employeeTableRows
  148 |     .first()
  149 |     .waitFor({
  150 |       state: 'visible',
  151 |       timeout: 30000
  152 |     });
  153 |     const rows =
  154 |       await this.employeeTableRows
  155 |         .allTextContents();
  156 |     const employeeFound =
  157 |       rows.some(row =>
  158 |         row.includes(employeeName)
  159 |       );
  160 |     expect(employeeFound).toBeTruthy();
  161 |   }
  162 | 
  163 |   async getEmployeeCount() {
  164 |     await this.employeeTableRows.first().waitFor();
  165 |     return await this.employeeTableRows.count();
  166 |   }
  167 | 
  168 |   async navigateToMyInfo() {
  169 | 
  170 |     await this.myInfoMenu.click();
  171 | 
  172 |     await this.page.waitForURL(
  173 |       '**/viewPersonalDetails/**',
  174 |       {
  175 |         timeout: 30000
  176 |       }
  177 |     );
  178 | 
  179 |     console.log(
  180 |       'MyInfo URL:',
  181 |       this.page.url()
  182 |     );
  183 |   }
  184 | 
  185 |   async uploadProfileImage(filePath) {
  186 | 
  187 |     console.log(
  188 |       'Before click:',
  189 |       this.page.url()
  190 |     );
  191 | 
  192 |     await this.profilePictureImage.click();
  193 | 
  194 |     console.log(
  195 |       'After click:',
  196 |       this.page.url()
  197 |     );
  198 | 
  199 |     await this.page.waitForTimeout(3000);
  200 | 
  201 |     console.log(
  202 |       'After wait:',
  203 |       this.page.url()
  204 |     );
  205 | 
  206 |     await this.profileImage.setInputFiles(
  207 |       filePath
  208 |     );
  209 |   }
  210 | 
  211 |   async verifyProfileImageUploaded() {
  212 | 
  213 |   await expect(
  214 |     this.page.getByText(
  215 |         'Successfully Updated'
  216 |       )
> 217 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  218 |       timeout: 10000
  219 |     });
  220 |   }
  221 | 
  222 |   async editEmployee() {
  223 | 
  224 |     await this.firstEmployeeEditButton.click();
  225 | 
  226 |     await this.personalDetailsHeader
  227 |       .waitFor({
  228 |         state: 'visible'
  229 |       });
  230 | 
  231 |     await this.middleNameInput.fill(
  232 |       'Updated'
  233 |     );
  234 | 
  235 |     await this.personalSaveButton.click();
  236 | 
  237 |     await expect(
  238 |       this.successUpdateToast
  239 |     ).toBeVisible({
  240 |       timeout: 10000
  241 |     });
  242 |   }
  243 | 
  244 |   async deleteEmployee() {
  245 | 
  246 |     await this.firstEmployeeDeleteButton
  247 |       .click();
  248 | 
  249 |     await this.confirmDeleteButton
  250 |       .click();
  251 | 
  252 |     await expect(
  253 |       this.deleteSuccessToast
  254 |     ).toBeVisible({
  255 |       timeout: 10000
  256 |     });
  257 |   }
  258 | 
  259 |   async getFirstEmployeeId() {
  260 | 
  261 |     await this.employeeTableRows.first().waitFor();
  262 | 
  263 |     const firstRow =
  264 |       await this.employeeTableRows.first().textContent();
  265 | 
  266 |     const employeeId =
  267 |       firstRow.match(/\d+/)?.[0];
  268 | 
  269 |     return employeeId;
  270 |   }
  271 | 
  272 |   async searchEmployeeById(employeeId) {
  273 | 
  274 |     await this.page.waitForURL(
  275 |       '**/viewEmployeeList'
  276 |     );
  277 | 
  278 |     await this.employeeIdSearch.waitFor({
  279 |       state: 'visible',
  280 |       timeout: 30000
  281 |     });
  282 | 
  283 |     await this.employeeIdSearch.fill(
  284 |       employeeId
  285 |     );
  286 | 
  287 |     await this.searchButton.click();
  288 |   }
  289 | 
  290 |   async verifyEmployeeIdSearch(employeeId) {
  291 | 
  292 |     await this.employeeTableRows.first().waitFor({
  293 |       state: 'visible'
  294 |     });
  295 | 
  296 |     const tableText =
  297 |       await this.employeeTableRows.first()
  298 |         .textContent();
  299 | 
  300 |     expect(tableText)
  301 |       .toContain(employeeId);
  302 |   }
  303 | 
  304 |   async resetEmployeeSearch() {
  305 | 
  306 |     await this.employeeNameSearch.fill(
  307 |       'Test Employee'
  308 |     );
  309 | 
  310 |     await this.resetButton.click();
  311 | 
  312 |     await expect(
  313 |       this.employeeNameSearch
  314 |     ).toHaveValue('');
  315 |   }
  316 | 
  317 |   async uploadProfileImage(filePath) {
```
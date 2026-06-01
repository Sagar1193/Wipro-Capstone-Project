# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim\pim.spec.js >> PIM Module Tests >> Search Employee In Table
- Location: tests\pim\pim.spec.js:43:3

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
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
              - paragraph [ref=e127]: AdminAuto User
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
              - textbox "Type for hints..." [ref=e167]: Nikolas
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
            - button "Search" [active] [ref=e225] [cursor=pointer]
      - generic [ref=e226]:
        - button " Add" [ref=e228] [cursor=pointer]:
          - generic [ref=e229]: 
          - text: Add
        - generic [ref=e230]:
          - separator [ref=e231]
          - generic [ref=e233]: (1) Record Found
        - table [ref=e235]:
          - rowgroup [ref=e236]:
            - row " Id  First (& Middle) Name  Last Name  Job Title  Employment Status  Sub Unit  Supervisor  Actions" [ref=e237]:
              - columnheader "" [ref=e238]:
                - generic [ref=e240] [cursor=pointer]:
                  - checkbox "" [ref=e241]
                  - generic [ref=e243]: 
              - columnheader "Id " [ref=e244]:
                - text: Id
                - generic [ref=e245]:
                  - generic [ref=e246] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=e247]:
                - text: First (& Middle) Name
                - generic [ref=e248]:
                  - generic [ref=e249] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=e250]:
                - text: Last Name
                - generic [ref=e251]:
                  - generic [ref=e252] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=e253]:
                - text: Job Title
                - generic [ref=e254]:
                  - generic [ref=e255] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=e256]:
                - text: Employment Status
                - generic [ref=e257]:
                  - generic [ref=e258] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=e259]:
                - text: Sub Unit
                - generic [ref=e260]:
                  - generic [ref=e261] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=e262]:
                - text: Supervisor
                - generic [ref=e263]:
                  - generic [ref=e264] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=e265]
          - rowgroup [ref=e266]:
            - row " 0472 Nikolas Yost-Boyer  " [ref=e268] [cursor=pointer]:
              - cell "" [ref=e269]:
                - generic [ref=e272]:
                  - checkbox "" [ref=e273]
                  - generic [ref=e275]: 
              - cell "0472" [ref=e276]:
                - generic [ref=e277]: "0472"
              - cell "Nikolas" [ref=e278]:
                - generic [ref=e279]: Nikolas
              - cell "Yost-Boyer" [ref=e280]:
                - generic [ref=e281]: Yost-Boyer
              - cell [ref=e282]
              - cell [ref=e283]
              - cell [ref=e284]
              - cell [ref=e285]
              - cell " " [ref=e286]:
                - generic [ref=e287]:
                  - button "" [ref=e288]:
                    - generic [ref=e289]: 
                  - button "" [ref=e290]:
                    - generic [ref=e291]: 
    - generic [ref=e293]:
      - paragraph [ref=e294]: OrangeHRM OS 5.8
      - paragraph [ref=e295]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e296] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  64  |       page.locator(
  65  |         'input[type="file"]'
  66  |       );
  67  | 
  68  |     this.profileImageSaveButton =
  69  |       page.getByRole('button', {
  70  |         name: 'Save'
  71  |       });
  72  | 
  73  |     this.firstEmployeeDeleteButton =
  74  |       page.locator(
  75  |         '.oxd-table-body .oxd-table-row button'
  76  |       ).nth(1);
  77  | 
  78  |     this.confirmDeleteButton =
  79  |       page.getByRole('button', {
  80  |         name: 'Yes, Delete'
  81  |       });
  82  | 
  83  |     this.deleteSuccessToast =
  84  |       page.getByText(
  85  |         'Successfully Deleted'
  86  |       );
  87  | 
  88  |     this.employeeIdSearch =
  89  |       page.locator('.oxd-form-row .oxd-input').nth(1);
  90  | 
  91  |     this.employeeIdCells =
  92  |       page.locator('.oxd-table-body .oxd-table-row .oxd-table-cell:nth-child(2)');
  93  | 
  94  |     this.resetButton =
  95  |       page.getByRole('button', {
  96  |         name: 'Reset'
  97  |       });
  98  | 
  99  |     this.profilePictureImage =
  100 |       page.getByRole('img', {
  101 |         name: 'profile picture'
  102 |       }).nth(1);
  103 | 
  104 |     this.cancelButton =
  105 |       page.getByRole('button', {
  106 |         name: 'Cancel'
  107 |       });
  108 | 
  109 |     this.addEmployeeHeader =
  110 |       page.getByRole('heading', {
  111 |         name: 'Add Employee'
  112 |       });
  113 | 
  114 |     this.employeeIdField =
  115 |       page.locator('.oxd-input').nth(4);
  116 | 
  117 |     this.requiredFieldError =
  118 |       page.locator(
  119 |         '.oxd-input-field-error-message'
  120 |       ).first();
  121 |   }
  122 | 
  123 |   async navigateToPIM() {
  124 |     await this.pimMenu.click();
  125 |   }
  126 | 
  127 |   async clickAddEmployee() {
  128 |     await this.addEmployeeButton.click();
  129 |   }
  130 | 
  131 |   async addEmployee(firstName, lastName) {
  132 |     await this.firstNameInput.fill(firstName);
  133 |     await this.lastNameInput.fill(lastName);
  134 |     await this.saveButton.click();
  135 |   }
  136 | 
  137 |   async verifyEmployeeAdded() {
  138 |   await this.personalDetailsHeader
  139 |     .waitFor({
  140 |       state: 'visible',
  141 |       timeout: 30000
  142 |     });
  143 |   }
  144 | 
  145 |   async searchEmployee(employeeName) {
  146 |     await this.employeeNameSearch.fill(employeeName);
  147 |     await this.searchButton.click();
  148 |   }
  149 |   
  150 |   async verifyEmployeeInTable(employeeName) {
  151 |     await this.employeeTableRows
  152 |     .first()
  153 |     .waitFor({
  154 |       state: 'visible',
  155 |       timeout: 30000
  156 |     });
  157 |     const rows =
  158 |       await this.employeeTableRows
  159 |         .allTextContents();
  160 |     const employeeFound =
  161 |       rows.some(row =>
  162 |         row.includes(employeeName)
  163 |       );
> 164 |     expect(employeeFound).toBeTruthy();
      |                           ^ Error: expect(received).toBeTruthy()
  165 |   }
  166 | 
  167 |   async getEmployeeCount() {
  168 |     await this.employeeTableRows.first().waitFor();
  169 |     return await this.employeeTableRows.count();
  170 |   }
  171 | 
  172 |   async navigateToMyInfo() {
  173 | 
  174 |     await this.myInfoMenu.click();
  175 | 
  176 |     await this.page.waitForURL(
  177 |       '**/viewPersonalDetails/**',
  178 |       {
  179 |         timeout: 30000
  180 |       }
  181 |     );
  182 | 
  183 |     console.log(
  184 |       'MyInfo URL:',
  185 |       this.page.url()
  186 |     );
  187 |   }
  188 | 
  189 |   async uploadProfileImage(filePath) {
  190 | 
  191 |     console.log(
  192 |       'Before click:',
  193 |       this.page.url()
  194 |     );
  195 | 
  196 |     await this.profilePictureImage.click();
  197 | 
  198 |     await this.page.waitForURL(
  199 |       '**/viewPhotograph/**',
  200 |       {
  201 |         timeout: 30000
  202 |       }
  203 |     );
  204 | 
  205 |     console.log(
  206 |       'After click:',
  207 |       this.page.url()
  208 |     );
  209 | 
  210 |     await this.profileImage.waitFor({
  211 |       state: 'attached',
  212 |       timeout: 30000
  213 |     });
  214 | 
  215 |     await this.profileImage.setInputFiles(
  216 |       filePath
  217 |     );
  218 | 
  219 |     await this.profileImageSaveButton.click();
  220 |   }
  221 | 
  222 |   async verifyProfileImageUploaded() {
  223 | 
  224 |   await expect(
  225 |     this.page.getByText(
  226 |         'Successfully Updated'
  227 |       )
  228 |     ).toBeVisible({
  229 |       timeout: 10000
  230 |     });
  231 |   }
  232 | 
  233 |   async editEmployee() {
  234 | 
  235 |     await this.firstEmployeeEditButton.click();
  236 | 
  237 |     await this.personalDetailsHeader
  238 |       .waitFor({
  239 |         state: 'visible'
  240 |       });
  241 | 
  242 |     await this.middleNameInput.fill(
  243 |       'Updated'
  244 |     );
  245 | 
  246 |     await this.personalSaveButton.click();
  247 | 
  248 |     await expect(
  249 |       this.successUpdateToast
  250 |     ).toBeVisible({
  251 |       timeout: 10000
  252 |     });
  253 |   }
  254 | 
  255 |   async deleteEmployee() {
  256 | 
  257 |     await this.firstEmployeeDeleteButton
  258 |       .click();
  259 | 
  260 |     await this.confirmDeleteButton
  261 |       .click();
  262 | 
  263 |     await expect(
  264 |       this.deleteSuccessToast
```
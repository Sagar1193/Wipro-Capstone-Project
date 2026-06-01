# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim\pim.spec.js >> PIM Module Tests >> Upload Employee Profile Image
- Location: tests\pim\pim.spec.js:118:3

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('img', { name: 'profile picture' }).nth(1)
    - locator resolved to <img data-v-af86f9aa="" alt="profile picture" class="employee-image" src="/web/index.php/pim/viewPhoto/empNumber/7"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    8 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action
    - click action done
    - waiting for scheduled navigations to finish

```

# Test source

```ts
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
  164 |     expect(employeeFound).toBeTruthy();
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
> 196 |     await this.profilePictureImage.click();
      |                                    ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
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
  265 |     ).toBeVisible({
  266 |       timeout: 10000
  267 |     });
  268 |   }
  269 | 
  270 |   async getFirstEmployeeId() {
  271 | 
  272 |     await this.employeeTableRows.first().waitFor();
  273 | 
  274 |     const firstRow =
  275 |       await this.employeeTableRows.first().textContent();
  276 | 
  277 |     const employeeId =
  278 |       firstRow.match(/\d+/)?.[0];
  279 | 
  280 |     return employeeId;
  281 |   }
  282 | 
  283 |   async searchEmployeeById(employeeId) {
  284 | 
  285 |     await this.page.waitForURL(
  286 |       '**/viewEmployeeList'
  287 |     );
  288 | 
  289 |     await this.employeeIdSearch.waitFor({
  290 |       state: 'visible',
  291 |       timeout: 30000
  292 |     });
  293 | 
  294 |     await this.employeeIdSearch.fill(
  295 |       employeeId
  296 |     );
```
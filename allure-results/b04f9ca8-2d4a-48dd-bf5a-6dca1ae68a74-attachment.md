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
  - waiting for getByRole('link', { name: 'My Info' })
    - locator resolved to <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/pim/viewMyDetails">…</a>
  - attempting click action
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
  62  | 
  63  |     this.profileImage =
  64  |       page.locator('.oxd-file-input');
  65  | 
  66  |     this.profileImageSaveButton =
  67  |       page.getByRole('button', {
  68  |         name: 'Save'
  69  |       });
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
> 162 |     await this.myInfoMenu.click();
      |                           ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  163 |   }
  164 | 
  165 |   async uploadProfileImage(filePath) {
  166 | 
  167 |     await this.profileImage.setInputFiles(
  168 |       filePath
  169 |     );
  170 | 
  171 |     await this.profileImageSaveButton.click();
  172 |   }
  173 | 
  174 |   async verifyProfileImageUploaded() {
  175 | 
  176 |   await expect(
  177 |     this.page.getByText(
  178 |         'Successfully Updated'
  179 |       )
  180 |     ).toBeVisible({
  181 |       timeout: 10000
  182 |     });
  183 |   }
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
```
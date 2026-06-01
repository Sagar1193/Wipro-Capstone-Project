# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim\pim.spec.js >> PIM Module Tests >> Verify Reset Button Visible
- Location: tests\pim\pim.spec.js:492:3

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'PIM' })
    - locator resolved to <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/pim/viewPimModule">…</a>
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
  24  |     this.searchButton =
  25  |       page.getByRole('button', { name: 'Search' });
  26  | 
  27  |     this.employeeTableRows =
  28  |       page.locator('.oxd-table-body .oxd-table-row');
  29  | 
  30  |     this.firstEmployeeEditButton =
  31  |       page.locator(
  32  |         '.oxd-table-body .oxd-table-row button'
  33  |       ).nth(0);
  34  | 
  35  |     this.middleNameInput =
  36  |       page.locator(
  37  |         'input[name="middleName"]'
  38  |       );
  39  | 
  40  |     this.personalSaveButton =
  41  |       page.getByRole('button', {
  42  |         name: 'Save'
  43  |       }).first();
  44  | 
  45  |     this.successUpdateToast =
  46  |       page.getByText(
  47  |         'Successfully Updated'
  48  |       );
  49  | 
  50  |     this.employeeNameCells =
  51  |       page.locator('.oxd-table-body .oxd-table-row .oxd-table-cell');
  52  | 
  53  |     this.personalDetailsHeader =
  54  |     page.getByRole('heading', {
  55  |       name: 'Personal Details'
  56  |     });
  57  | 
  58  |     this.myInfoMenu =
  59  |     page.getByRole('link', {
  60  |       name: 'My Info'
  61  |     });
  62  | 
  63  |     this.profileImage =
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
> 124 |     await this.pimMenu.click();
      |                        ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
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
```
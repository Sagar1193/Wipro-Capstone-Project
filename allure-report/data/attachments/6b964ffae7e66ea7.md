# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim\pim.spec.js >> PIM Module Tests >> Upload Employee Profile Image
- Location: tests\pim\pim.spec.js:118:3

# Error details

```
Error: ENOENT: no such file or directory, stat 'C:\Users\sagar\Downloads\Capstone\test-data\images\profile.png'
```

# Test source

```ts
  11  |     this.addEmployeeButton = page.getByRole('button', { name: 'Add' });
  12  | 
  13  |     this.firstNameInput = page.locator('input[name="firstName"]');
  14  | 
  15  |     this.lastNameInput = page.locator('input[name="lastName"]');
  16  | 
  17  |     this.saveButton = page.getByRole('button', { name: 'Save' });
  18  | 
  19  |     this.successToast = page.getByText('Successfully Saved');
  20  | 
  21  |     this.employeeNameSearch =
  22  |       page.locator('(//input[@placeholder="Type for hints..."])[1]');
  23  | 
  24  |     this.searchButton =
  25  |       page.getByRole('button', { name: 'Search' });
  26  | 
  27  |     this.employeeTableRows =
  28  |       page.locator('.oxd-table-body .oxd-table-row');
  29  | 
  30  |     this.employeeNameCells =
  31  |       page.locator('.oxd-table-body .oxd-table-row .oxd-table-cell');
  32  | 
  33  |     this.personalDetailsHeader =
  34  |     page.getByRole('heading', {
  35  |       name: 'Personal Details'
  36  |     });
  37  | 
  38  |     this.myInfoMenu =
  39  |     page.getByRole('link', {
  40  |       name: 'My Info'
  41  |     });
  42  | 
  43  |     this.profileImage =
  44  |       page.locator('input[type="file"]');
  45  | 
  46  |     this.profileImageSaveButton =
  47  |       page.getByRole('button', {
  48  |         name: 'Save'
  49  |       }).last();
  50  |   }
  51  | 
  52  |   async navigateToPIM() {
  53  |     await this.pimMenu.click();
  54  |   }
  55  | 
  56  |   async clickAddEmployee() {
  57  |     await this.addEmployeeButton.click();
  58  |   }
  59  | 
  60  |   async addEmployee(firstName, lastName) {
  61  |     await this.firstNameInput.fill(firstName);
  62  |     await this.lastNameInput.fill(lastName);
  63  |     await Promise.all([
  64  |     this.page.waitForLoadState('networkidle'),
  65  |     this.saveButton.click()
  66  |     ]);
  67  |   }
  68  | 
  69  |   async verifyEmployeeAdded() {
  70  |   await this.personalDetailsHeader
  71  |     .waitFor({
  72  |       state: 'visible',
  73  |       timeout: 30000
  74  |     });
  75  |   }
  76  | 
  77  |   async searchEmployee(employeeName) {
  78  |     await this.employeeNameSearch.fill(employeeName);
  79  |     await this.searchButton.click();
  80  |   }
  81  |   
  82  |   async verifyEmployeeInTable(employeeName) {
  83  | 
  84  |     await this.employeeTableRows
  85  |       .first()
  86  |       .waitFor({
  87  |         state: 'visible',
  88  |         timeout: 30000
  89  |       });
  90  | 
  91  |     const rows =
  92  |       await this.employeeTableRows.allTextContents();
  93  | 
  94  |     const employeeFound = rows.some(row =>
  95  |       row.includes(employeeName)
  96  |     );
  97  | 
  98  |     expect(employeeFound).toBeTruthy();
  99  |   }
  100 | 
  101 |   async getEmployeeCount() {
  102 |     await this.employeeTableRows.first().waitFor();
  103 |     return await this.employeeTableRows.count();
  104 |   }
  105 | 
  106 |   async navigateToMyInfo() {
  107 |     await this.myInfoMenu.click();
  108 |   }
  109 | 
  110 |   async uploadProfileImage(filePath) {
> 111 |     await this.profileImage.setInputFiles(
      |     ^ Error: ENOENT: no such file or directory, stat 'C:\Users\sagar\Downloads\Capstone\test-data\images\profile.png'
  112 |       filePath
  113 |     );
  114 |     await this.profileImageSaveButton.click();
  115 |   }
  116 | }
  117 | 
  118 | module.exports = { PIMPage };
```
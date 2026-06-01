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
              - paragraph [ref=e127]: admin raj
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - button "" [ref=e133] [cursor=pointer]:
            - generic [ref=e134]: 
  - generic [ref=e135]:
    - generic [ref=e139]:
      - generic [ref=e140]:
        - generic [ref=e141]:
          - generic:
            - heading [level=6]
          - img "profile picture" [ref=e144] [cursor=pointer]
        - tablist [ref=e145]:
          - tab "Personal Details" [ref=e146]:
            - link "Personal Details" [ref=e147] [cursor=pointer]:
              - /url: /web/index.php/pim/viewPersonalDetails/empNumber/7
          - tab "Contact Details" [ref=e148]:
            - link "Contact Details" [ref=e149] [cursor=pointer]:
              - /url: /web/index.php/pim/contactDetails/empNumber/7
          - tab "Emergency Contacts" [ref=e150]:
            - link "Emergency Contacts" [ref=e151] [cursor=pointer]:
              - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/7
          - tab "Dependents" [ref=e152]:
            - link "Dependents" [ref=e153] [cursor=pointer]:
              - /url: /web/index.php/pim/viewDependents/empNumber/7
          - tab "Immigration" [ref=e154]:
            - link "Immigration" [ref=e155] [cursor=pointer]:
              - /url: /web/index.php/pim/viewImmigration/empNumber/7
          - tab "Job" [ref=e156]:
            - link "Job" [ref=e157] [cursor=pointer]:
              - /url: /web/index.php/pim/viewJobDetails/empNumber/7
          - tab "Salary" [ref=e158]:
            - link "Salary" [ref=e159] [cursor=pointer]:
              - /url: /web/index.php/pim/viewSalaryList/empNumber/7
          - tab "Report-to" [ref=e160]:
            - link "Report-to" [ref=e161] [cursor=pointer]:
              - /url: /web/index.php/pim/viewReportToDetails/empNumber/7
          - tab "Qualifications" [ref=e162]:
            - link "Qualifications" [ref=e163] [cursor=pointer]:
              - /url: /web/index.php/pim/viewQualifications/empNumber/7
          - tab "Memberships" [ref=e164]:
            - link "Memberships" [ref=e165] [cursor=pointer]:
              - /url: /web/index.php/pim/viewMemberships/empNumber/7
      - generic [ref=e166]:
        - generic [ref=e167]:
          - heading "Personal Details" [level=6] [ref=e168]
          - separator [ref=e169]
          - generic [ref=e170]:
            - generic [ref=e177]:
              - generic [ref=e179]: Employee Full Name*
              - generic [ref=e180]:
                - textbox "First Name" [ref=e183]
                - textbox "Middle Name" [ref=e186]
                - textbox "Last Name" [ref=e189]
            - separator [ref=e190]
            - generic [ref=e191]:
              - generic [ref=e192]:
                - generic [ref=e194]:
                  - generic [ref=e196]: Employee Id
                  - textbox [ref=e198]
                - generic [ref=e200]:
                  - generic [ref=e202]: Other Id
                  - textbox [ref=e204]
              - generic [ref=e205]:
                - generic [ref=e207]:
                  - generic [ref=e209]: Driver's License Number
                  - textbox [ref=e211]
                - generic [ref=e213]:
                  - generic [ref=e215]: License Expiry Date
                  - generic [ref=e218]:
                    - textbox "yyyy-dd-mm" [ref=e219]
                    - generic [ref=e220] [cursor=pointer]: 
            - separator [ref=e221]
            - generic [ref=e222]:
              - generic [ref=e223]:
                - generic [ref=e225]:
                  - generic [ref=e227]: Nationality
                  - generic [ref=e230] [cursor=pointer]:
                    - generic [ref=e231]: "-- Select --"
                    - generic [ref=e233]: 
                - generic [ref=e235]:
                  - generic [ref=e237]: Marital Status
                  - generic [ref=e240] [cursor=pointer]:
                    - generic [ref=e241]: "-- Select --"
                    - generic [ref=e243]: 
              - generic [ref=e244]:
                - generic [ref=e246]:
                  - generic [ref=e248]: Date of Birth
                  - generic [ref=e251]:
                    - textbox "yyyy-dd-mm" [ref=e252]
                    - generic [ref=e253] [cursor=pointer]: 
                - generic [ref=e255]:
                  - generic [ref=e257]: Gender
                  - generic [ref=e258]:
                    - generic [ref=e262] [cursor=pointer]:
                      - radio "Male" [ref=e263]
                      - text: Male
                    - generic [ref=e268] [cursor=pointer]:
                      - radio "Female" [ref=e269]
                      - text: Female
            - separator [ref=e271]
            - generic [ref=e272]:
              - paragraph [ref=e273]: "* Required"
              - button "Save" [ref=e274] [cursor=pointer]
        - generic [ref=e275]:
          - separator [ref=e276]
          - generic [ref=e277]:
            - heading "Custom Fields" [level=6] [ref=e278]
            - separator [ref=e279]
            - generic [ref=e280]:
              - generic [ref=e282]:
                - generic [ref=e284]:
                  - generic [ref=e286]: Blood Type
                  - generic [ref=e289] [cursor=pointer]:
                    - generic [ref=e290]: B+
                    - generic [ref=e292]: 
                - generic [ref=e294]:
                  - generic [ref=e296]: Test_Field
                  - textbox [ref=e298]: "445"
              - separator [ref=e299]
              - button "Save" [ref=e301] [cursor=pointer]
        - generic [ref=e302]:
          - separator [ref=e303]
          - generic [ref=e305]:
            - heading "Attachments" [level=6] [ref=e306]
            - button " Add" [ref=e307] [cursor=pointer]:
              - generic [ref=e308]: 
              - text: Add
          - table [ref=e310]
    - generic [ref=e314]:
      - paragraph [ref=e315]: OrangeHRM OS 5.8
      - paragraph [ref=e316]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e317] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
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
              - paragraph [ref=e127]: Mohammad Stanikzai
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
          - generic [ref=e143] [cursor=pointer]:
            - img "profile picture"
        - tablist [ref=e144]:
          - tab "Personal Details" [ref=e145]:
            - link "Personal Details" [ref=e146] [cursor=pointer]:
              - /url: /web/index.php/pim/viewPersonalDetails/empNumber/7
          - tab "Contact Details" [ref=e147]:
            - link "Contact Details" [ref=e148] [cursor=pointer]:
              - /url: /web/index.php/pim/contactDetails/empNumber/7
          - tab "Emergency Contacts" [ref=e149]:
            - link "Emergency Contacts" [ref=e150] [cursor=pointer]:
              - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/7
          - tab "Dependents" [ref=e151]:
            - link "Dependents" [ref=e152] [cursor=pointer]:
              - /url: /web/index.php/pim/viewDependents/empNumber/7
          - tab "Immigration" [ref=e153]:
            - link "Immigration" [ref=e154] [cursor=pointer]:
              - /url: /web/index.php/pim/viewImmigration/empNumber/7
          - tab "Job" [ref=e155]:
            - link "Job" [ref=e156] [cursor=pointer]:
              - /url: /web/index.php/pim/viewJobDetails/empNumber/7
          - tab "Salary" [ref=e157]:
            - link "Salary" [ref=e158] [cursor=pointer]:
              - /url: /web/index.php/pim/viewSalaryList/empNumber/7
          - tab "Report-to" [ref=e159]:
            - link "Report-to" [ref=e160] [cursor=pointer]:
              - /url: /web/index.php/pim/viewReportToDetails/empNumber/7
          - tab "Qualifications" [ref=e161]:
            - link "Qualifications" [ref=e162] [cursor=pointer]:
              - /url: /web/index.php/pim/viewQualifications/empNumber/7
          - tab "Memberships" [ref=e163]:
            - link "Memberships" [ref=e164] [cursor=pointer]:
              - /url: /web/index.php/pim/viewMemberships/empNumber/7
      - generic [ref=e165]:
        - generic [ref=e166]:
          - heading "Personal Details" [level=6] [ref=e167]
          - separator [ref=e168]
          - generic [ref=e169]:
            - generic [ref=e176]:
              - generic [ref=e178]: Employee Full Name*
              - generic [ref=e179]:
                - textbox "First Name" [ref=e182]
                - textbox "Middle Name" [ref=e185]
                - textbox "Last Name" [ref=e188]
            - separator [ref=e189]
            - generic [ref=e190]:
              - generic [ref=e191]:
                - generic [ref=e193]:
                  - generic [ref=e195]: Employee Id
                  - textbox [ref=e197]
                - generic [ref=e199]:
                  - generic [ref=e201]: Other Id
                  - textbox [ref=e203]
              - generic [ref=e204]:
                - generic [ref=e206]:
                  - generic [ref=e208]: Driver's License Number
                  - textbox [ref=e210]
                - generic [ref=e212]:
                  - generic [ref=e214]: License Expiry Date
                  - generic [ref=e217]:
                    - textbox "yyyy-dd-mm" [ref=e218]
                    - generic [ref=e219] [cursor=pointer]: 
            - separator [ref=e220]
            - generic [ref=e221]:
              - generic [ref=e222]:
                - generic [ref=e224]:
                  - generic [ref=e226]: Nationality
                  - generic [ref=e229] [cursor=pointer]:
                    - generic [ref=e230]: "-- Select --"
                    - generic [ref=e232]: 
                - generic [ref=e234]:
                  - generic [ref=e236]: Marital Status
                  - generic [ref=e239] [cursor=pointer]:
                    - generic [ref=e240]: "-- Select --"
                    - generic [ref=e242]: 
              - generic [ref=e243]:
                - generic [ref=e245]:
                  - generic [ref=e247]: Date of Birth
                  - generic [ref=e250]:
                    - textbox "yyyy-dd-mm" [ref=e251]
                    - generic [ref=e252] [cursor=pointer]: 
                - generic [ref=e254]:
                  - generic [ref=e256]: Gender
                  - generic [ref=e257]:
                    - generic [ref=e261] [cursor=pointer]:
                      - radio "Male" [ref=e262]
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
          - generic [ref=e277]:
            - heading "Attachments" [level=6] [ref=e278]
            - button " Add" [ref=e279] [cursor=pointer]:
              - generic [ref=e280]: 
              - text: Add
          - table [ref=e282]
    - generic [ref=e286]:
      - paragraph [ref=e287]: OrangeHRM OS 5.8
      - paragraph [ref=e288]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e289] [cursor=pointer]:
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
  70  |   await expect(
  71  |     this.personalDetailsHeader
  72  |     ).toBeVisible({
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
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim\pim.spec.js >> PIM Module Tests >> Search Invalid Employee
- Location: tests\pim\pim.spec.js:444:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('No Records Found')
Expected: visible
Error: strict mode violation: getByText('No Records Found') resolved to 2 elements:
    1) <span data-v-7b563373="" data-v-5a621acd="" class="oxd-text oxd-text--span">No Records Found</span> aka locator('span').filter({ hasText: 'No Records Found' })
    2) <p data-v-7b563373="" data-v-35c8fe09="" class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text">No Records Found</p> aka locator('#oxd-toaster_1').getByText('No Records Found')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('No Records Found')

```

# Page snapshot

```yaml
- generic [ref=e2]:
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
                - paragraph [ref=e127]: 029340238940234234 ô kìa
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
                - textbox "Type for hints..." [ref=e167]: ZZZZZZZZZZ
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
            - generic [ref=e233]: No Records Found
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
            - rowgroup
      - generic [ref=e267]:
        - paragraph [ref=e268]: OrangeHRM OS 5.8
        - paragraph [ref=e269]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=e270] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=e272] [cursor=pointer]:
    - generic [ref=e273]:
      - generic [ref=e276]: 
      - generic [ref=e277]:
        - paragraph [ref=e278]: Info
        - paragraph [ref=e279]: No Records Found
    - button "×" [ref=e281]
```

# Test source

```ts
  331 |     ).toBeVisible();
  332 |   }
  333 | 
  334 |   async verifyAddEmployeeButtonVisible() {
  335 | 
  336 |     await expect(
  337 |       this.addEmployeeButton
  338 |     ).toBeVisible();
  339 |   }
  340 | 
  341 |   async cancelAddEmployee() {
  342 | 
  343 |     await this.clickAddEmployee();
  344 | 
  345 |     await this.cancelButton.click();
  346 | 
  347 |     await this.page.waitForURL(
  348 |       '**/viewEmployeeList'
  349 |     );
  350 | 
  351 |     await expect(
  352 |       this.searchButton
  353 |     ).toBeVisible();
  354 |   }
  355 | 
  356 |   async verifyPersonalDetailsPage() {
  357 | 
  358 |     await this.clickAddEmployee();
  359 | 
  360 |     await expect(
  361 |       this.personalDetailsHeader
  362 |     ).toBeVisible();
  363 |   }
  364 | 
  365 |   async verifyAddEmployeePageLoaded() {
  366 | 
  367 |     await this.clickAddEmployee();
  368 | 
  369 |     await expect(
  370 |       this.addEmployeeHeader
  371 |     ).toBeVisible();
  372 |   }
  373 | 
  374 |   async verifySaveButtonVisible() {
  375 | 
  376 |     await this.clickAddEmployee();
  377 | 
  378 |     await expect(
  379 |       this.saveButton
  380 |     ).toBeVisible();
  381 |   }
  382 | 
  383 |   async verifyCancelButtonVisible() {
  384 | 
  385 |     await this.clickAddEmployee();
  386 | 
  387 |     await expect(
  388 |       this.cancelButton
  389 |     ).toBeVisible();
  390 |   }
  391 | 
  392 |   async verifyEmployeeIdVisible() {
  393 | 
  394 |     await this.clickAddEmployee();
  395 | 
  396 |     await expect(
  397 |       this.employeeIdField
  398 |     ).toBeVisible();
  399 |   }
  400 | 
  401 |   async verifyFirstNameRequired() {
  402 | 
  403 |     await this.clickAddEmployee();
  404 | 
  405 |     await this.saveButton.click();
  406 | 
  407 |     await expect(
  408 |       this.requiredFieldError
  409 |     ).toBeVisible();
  410 |   }
  411 | 
  412 |   async verifyEmployeeListLoaded() {
  413 | 
  414 |     await expect(
  415 |       this.employeeTableRows.first()
  416 |     ).toBeVisible();
  417 |   }
  418 | 
  419 |   async searchInvalidEmployee() {
  420 | 
  421 |     await this.employeeNameSearch.fill(
  422 |       'ZZZZZZZZZZ'
  423 |     );
  424 | 
  425 |     await this.searchButton.click();
  426 | 
  427 |     await expect(
  428 |       this.page.getByText(
  429 |         'No Records Found'
  430 |       )
> 431 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  432 |   }
  433 | 
  434 |   async searchEmptyEmployee() {
  435 | 
  436 |     await this.searchButton.click();
  437 | 
  438 |     await expect(
  439 |       this.employeeTableRows.first()
  440 |     ).toBeVisible();
  441 |   }
  442 | 
  443 |   async verifySearchButtonVisible() {
  444 | 
  445 |     await expect(
  446 |       this.searchButton
  447 |     ).toBeVisible();
  448 |   }
  449 | 
  450 |   async verifyResetButtonVisible() {
  451 | 
  452 |     await expect(
  453 |       this.resetButton
  454 |     ).toBeVisible();
  455 |   }
  456 | }
  457 | 
  458 | module.exports = { PIMPage };
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim\pim.spec.js >> PIM Module Tests >> Verify Personal Details Page
- Location: tests\pim\pim.spec.js:332:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Personal Details' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Personal Details' })

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
      - paragraph: 029340238940234234 ô kìa
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Add Employee" [level=6]
- separator
- button "Choose File"
- img "profile picture"
- button ""
- paragraph: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
- text: Employee Full Name*
- textbox "First Name"
- textbox "Middle Name"
- textbox "Last Name"
- text: Employee Id
- textbox: "0507"
- separator
- paragraph: Create Login Details
- checkbox
- separator
- paragraph: "* Required"
- button "Cancel"
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
  297 | 
  298 |     await this.searchButton.click();
  299 |   }
  300 | 
  301 |   async verifyEmployeeIdSearch(employeeId) {
  302 | 
  303 |     await this.employeeTableRows.first().waitFor({
  304 |       state: 'visible'
  305 |     });
  306 | 
  307 |     const tableText =
  308 |       await this.employeeTableRows.first()
  309 |         .textContent();
  310 | 
  311 |     expect(tableText)
  312 |       .toContain(employeeId);
  313 |   }
  314 | 
  315 |   async resetEmployeeSearch() {
  316 | 
  317 |     await this.employeeNameSearch.fill(
  318 |       'Test Employee'
  319 |     );
  320 | 
  321 |     await this.resetButton.click();
  322 | 
  323 |     await expect(
  324 |       this.employeeNameSearch
  325 |     ).toHaveValue('');
  326 |   }
  327 | 
  328 |   async verifyPIMPageLoaded() {
  329 | 
  330 |     await expect(
  331 |       this.pimMenu
  332 |     ).toBeVisible();
  333 | 
  334 |     await expect(
  335 |       this.searchButton
  336 |     ).toBeVisible();
  337 |   }
  338 | 
  339 |   async verifyAddEmployeeButtonVisible() {
  340 | 
  341 |     await expect(
  342 |       this.addEmployeeButton
  343 |     ).toBeVisible();
  344 |   }
  345 | 
  346 |   async cancelAddEmployee() {
  347 | 
  348 |     await this.clickAddEmployee();
  349 | 
  350 |     await this.cancelButton.click();
  351 | 
  352 |     await this.page.waitForURL(
  353 |       '**/viewEmployeeList'
  354 |     );
  355 | 
  356 |     await expect(
  357 |       this.searchButton
  358 |     ).toBeVisible();
  359 |   }
  360 | 
  361 |   async verifyPersonalDetailsPage() {
  362 | 
  363 |     await this.clickAddEmployee();
  364 | 
  365 |     await expect(
  366 |       this.personalDetailsHeader
> 367 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  368 |   }
  369 | 
  370 |   async verifyAddEmployeePageLoaded() {
  371 | 
  372 |     await this.clickAddEmployee();
  373 | 
  374 |     await expect(
  375 |       this.addEmployeeHeader
  376 |     ).toBeVisible();
  377 |   }
  378 | 
  379 |   async verifySaveButtonVisible() {
  380 | 
  381 |     await this.clickAddEmployee();
  382 | 
  383 |     await expect(
  384 |       this.saveButton
  385 |     ).toBeVisible();
  386 |   }
  387 | 
  388 |   async verifyCancelButtonVisible() {
  389 | 
  390 |     await this.clickAddEmployee();
  391 | 
  392 |     await expect(
  393 |       this.cancelButton
  394 |     ).toBeVisible();
  395 |   }
  396 | 
  397 |   async verifyEmployeeIdVisible() {
  398 | 
  399 |     await this.clickAddEmployee();
  400 | 
  401 |     await expect(
  402 |       this.employeeIdField
  403 |     ).toBeVisible();
  404 |   }
  405 | 
  406 |   async verifyFirstNameRequired() {
  407 | 
  408 |     await this.clickAddEmployee();
  409 | 
  410 |     await this.saveButton.click();
  411 | 
  412 |     await expect(
  413 |       this.requiredFieldError
  414 |     ).toBeVisible();
  415 |   }
  416 | 
  417 |   async verifyEmployeeListLoaded() {
  418 | 
  419 |     await expect(
  420 |       this.employeeTableRows.first()
  421 |     ).toBeVisible();
  422 |   }
  423 | 
  424 |   async searchInvalidEmployee() {
  425 | 
  426 |     await this.employeeNameSearch.fill(
  427 |       'ZZZZZZZZZZ'
  428 |     );
  429 | 
  430 |     await this.searchButton.click();
  431 | 
  432 |     await expect(
  433 |       this.page
  434 |         .locator('span')
  435 |         .filter({
  436 |           hasText: 'No Records Found'
  437 |         })
  438 |     ).toBeVisible();
  439 |   }
  440 | 
  441 |   async searchEmptyEmployee() {
  442 | 
  443 |     await this.searchButton.click();
  444 | 
  445 |     await expect(
  446 |       this.employeeTableRows.first()
  447 |     ).toBeVisible();
  448 |   }
  449 | 
  450 |   async verifySearchButtonVisible() {
  451 | 
  452 |     await expect(
  453 |       this.searchButton
  454 |     ).toBeVisible();
  455 |   }
  456 | 
  457 |   async verifyResetButtonVisible() {
  458 | 
  459 |     await expect(
  460 |       this.resetButton
  461 |     ).toBeVisible();
  462 |   }
  463 | }
  464 | 
  465 | module.exports = { PIMPage };
```
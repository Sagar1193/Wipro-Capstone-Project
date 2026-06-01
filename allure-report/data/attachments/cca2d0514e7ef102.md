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
      - paragraph: asdas &&*%$% s ô kìa
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
- textbox: "0488"
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
  262 |     });
  263 |   }
  264 | 
  265 |   async getFirstEmployeeId() {
  266 | 
  267 |     await this.employeeTableRows.first().waitFor();
  268 | 
  269 |     const firstRow =
  270 |       await this.employeeTableRows.first().textContent();
  271 | 
  272 |     const employeeId =
  273 |       firstRow.match(/\d+/)?.[0];
  274 | 
  275 |     return employeeId;
  276 |   }
  277 | 
  278 |   async searchEmployeeById(employeeId) {
  279 | 
  280 |     await this.page.waitForURL(
  281 |       '**/viewEmployeeList'
  282 |     );
  283 | 
  284 |     await this.employeeIdSearch.waitFor({
  285 |       state: 'visible',
  286 |       timeout: 30000
  287 |     });
  288 | 
  289 |     await this.employeeIdSearch.fill(
  290 |       employeeId
  291 |     );
  292 | 
  293 |     await this.searchButton.click();
  294 |   }
  295 | 
  296 |   async verifyEmployeeIdSearch(employeeId) {
  297 | 
  298 |     await this.employeeTableRows.first().waitFor({
  299 |       state: 'visible'
  300 |     });
  301 | 
  302 |     const tableText =
  303 |       await this.employeeTableRows.first()
  304 |         .textContent();
  305 | 
  306 |     expect(tableText)
  307 |       .toContain(employeeId);
  308 |   }
  309 | 
  310 |   async resetEmployeeSearch() {
  311 | 
  312 |     await this.employeeNameSearch.fill(
  313 |       'Test Employee'
  314 |     );
  315 | 
  316 |     await this.resetButton.click();
  317 | 
  318 |     await expect(
  319 |       this.employeeNameSearch
  320 |     ).toHaveValue('');
  321 |   }
  322 | 
  323 |   async verifyPIMPageLoaded() {
  324 | 
  325 |     await expect(
  326 |       this.pimMenu
  327 |     ).toBeVisible();
  328 | 
  329 |     await expect(
  330 |       this.searchButton
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
> 362 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
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
  431 |     ).toBeVisible();
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
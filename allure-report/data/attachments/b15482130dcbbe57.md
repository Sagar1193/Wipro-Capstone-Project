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
      - paragraph: manda user
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
- textbox: "0448"
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
  254 |     });
  255 |   }
  256 | 
  257 |   async getFirstEmployeeId() {
  258 | 
  259 |     await this.employeeTableRows.first().waitFor();
  260 | 
  261 |     const firstRow =
  262 |       await this.employeeTableRows.first().textContent();
  263 | 
  264 |     const employeeId =
  265 |       firstRow.match(/\d+/)?.[0];
  266 | 
  267 |     return employeeId;
  268 |   }
  269 | 
  270 |   async searchEmployeeById(employeeId) {
  271 | 
  272 |     await this.page.waitForURL(
  273 |       '**/viewEmployeeList'
  274 |     );
  275 | 
  276 |     await this.employeeIdSearch.waitFor({
  277 |       state: 'visible',
  278 |       timeout: 30000
  279 |     });
  280 | 
  281 |     await this.employeeIdSearch.fill(
  282 |       employeeId
  283 |     );
  284 | 
  285 |     await this.searchButton.click();
  286 |   }
  287 | 
  288 |   async verifyEmployeeIdSearch(employeeId) {
  289 | 
  290 |     await this.employeeTableRows.first().waitFor({
  291 |       state: 'visible'
  292 |     });
  293 | 
  294 |     const tableText =
  295 |       await this.employeeTableRows.first()
  296 |         .textContent();
  297 | 
  298 |     expect(tableText)
  299 |       .toContain(employeeId);
  300 |   }
  301 | 
  302 |   async resetEmployeeSearch() {
  303 | 
  304 |     await this.employeeNameSearch.fill(
  305 |       'Test Employee'
  306 |     );
  307 | 
  308 |     await this.resetButton.click();
  309 | 
  310 |     await expect(
  311 |       this.employeeNameSearch
  312 |     ).toHaveValue('');
  313 |   }
  314 | 
  315 |   async verifyPIMPageLoaded() {
  316 | 
  317 |     await expect(
  318 |       this.pimMenu
  319 |     ).toBeVisible();
  320 | 
  321 |     await expect(
  322 |       this.searchButton
  323 |     ).toBeVisible();
  324 |   }
  325 | 
  326 |   async verifyAddEmployeeButtonVisible() {
  327 | 
  328 |     await expect(
  329 |       this.addEmployeeButton
  330 |     ).toBeVisible();
  331 |   }
  332 | 
  333 |   async cancelAddEmployee() {
  334 | 
  335 |     await this.clickAddEmployee();
  336 | 
  337 |     await this.cancelButton.click();
  338 | 
  339 |     await this.page.waitForURL(
  340 |       '**/viewEmployeeList'
  341 |     );
  342 | 
  343 |     await expect(
  344 |       this.searchButton
  345 |     ).toBeVisible();
  346 |   }
  347 | 
  348 |   async verifyPersonalDetailsPage() {
  349 | 
  350 |     await this.clickAddEmployee();
  351 | 
  352 |     await expect(
  353 |       this.personalDetailsHeader
> 354 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  355 |   }
  356 | }
  357 | 
  358 | module.exports = { PIMPage };
```
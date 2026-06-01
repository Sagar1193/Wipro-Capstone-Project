# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim\pim.spec.js >> PIM Module Tests >> Verify PIM Page Load
- Location: tests\pim\pim.spec.js:260:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'PIM' })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: 'PIM' })

```

# Test source

```ts
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
> 332 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
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
  367 |     ).toBeVisible();
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
```
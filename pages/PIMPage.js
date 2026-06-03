const { expect } = require('@playwright/test');

class PIMPage {

  constructor(page) {

    this.page = page;

    this.pimMenu = page.getByRole('link', { name: 'PIM' });

    this.addEmployeeButton = page.getByRole('button', { name: 'Add' });

    this.firstNameInput = page.locator('input[name="firstName"]');

    this.lastNameInput = page.locator('input[name="lastName"]');

    this.saveButton = page.getByRole('button', { name: 'Save' });

    this.successToast = page.getByText('Successfully Saved');

    this.employeeNameSearch =
      page.locator('(//input[@placeholder="Type for hints..."])[1]');

    this.searchButton =
      page.getByRole('button', { name: 'Search' });

    this.employeeTableRows =
      page.locator('.oxd-table-body .oxd-table-row');

    this.firstEmployeeEditButton =
      page.locator(
        '.oxd-table-body .oxd-table-row button'
      ).nth(0);

    this.middleNameInput =
      page.locator(
        'input[name="middleName"]'
      );

    this.personalSaveButton =
      page.getByRole('button', {
        name: 'Save'
      }).first();

    this.successUpdateToast =
      page.getByText(
        'Successfully Updated'
      );

    this.employeeNameCells =
      page.locator('.oxd-table-body .oxd-table-row .oxd-table-cell');

    this.personalDetailsHeader =
      page.getByRole('heading', {
        name: 'Personal Details'
      });

    this.myInfoMenu =
      page.getByRole('link', {
        name: 'My Info'
      });

    this.profileImage =
      page.locator(
        'input[type="file"]'
      );

    this.profileImageSaveButton =
      page.getByRole('button', {
        name: 'Save'
      });

    this.firstEmployeeDeleteButton =
      page.locator(
        '.oxd-table-body .oxd-table-row button'
      ).nth(1);

    this.confirmDeleteButton =
      page.getByRole('button', {
        name: 'Yes, Delete'
      });

    this.deleteSuccessToast =
      page.getByText(
        'Successfully Deleted'
      );

    this.employeeIdSearch =
      page.locator('.oxd-form-row .oxd-input').nth(1);

    this.employeeIdCells =
      page.locator('.oxd-table-body .oxd-table-row .oxd-table-cell:nth-child(2)');

    this.resetButton =
      page.getByRole('button', {
        name: 'Reset'
      });

    this.profilePictureImage =
      page.getByRole('img', {
        name: 'profile picture'
      }).nth(1);

    this.cancelButton =
      page.getByRole('button', {
        name: 'Cancel'
      });

    this.addEmployeeHeader =
      page.getByRole('heading', {
        name: 'Add Employee'
      });

    this.employeeIdField =
      page.locator('.oxd-input').nth(4);

    this.requiredFieldError =
      page.locator(
        '.oxd-input-field-error-message'
      ).first();
  }

  async navigateToPIM() {
    await this.pimMenu.click();
    await this.page.waitForLoadState(
      'networkidle'
    );
    await expect(
      this.searchButton
    ).toBeVisible({
      timeout: 60000
    });
  }

  async clickAddEmployee() {
    await this.addEmployeeButton.click();
  }

  async addEmployee(firstName, lastName) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.saveButton.click();
  }

  async verifyEmployeeAdded() {
  await this.personalDetailsHeader
    .waitFor({
      state: 'visible',
      timeout: 30000
    });
  }

  async searchEmployee(employeeName) {
    await this.employeeNameSearch.fill(employeeName);
    await this.searchButton.click();
  }
  
  async verifyEmployeeInTable(employeeName) {
    await this.page.waitForLoadState(
      'networkidle'
    );
    await this.employeeTableRows
      .first()
      .waitFor({
        state: 'visible',
        timeout: 30000
      });
    await expect
      .poll(
        async () => {
          const rows =
            await this.employeeTableRows
              .allTextContents();

          return rows.some(
            row => row.includes(
              employeeName
            )
          );
        },
        {
          timeout: 30000
        }
      )
      .toBeTruthy();
  }

  async getEmployeeCount() {
    await this.employeeTableRows.first().waitFor();
    return await this.employeeTableRows.count();
  }

  async navigateToMyInfo() {
    await this.myInfoMenu.click();
    await expect(
      this.personalDetailsHeader
    ).toBeVisible({
      timeout: 30000
    });
  }

  async uploadProfileImage(filePath) {
    await this.profilePictureImage.click();
    await this.profileImage.waitFor({
      state: 'attached',
      timeout: 30000
    });
    await this.profileImage.waitFor({
      state: 'attached',
      timeout: 30000
    });
    await this.profileImage.setInputFiles(
      filePath
    );
    await this.profileImageSaveButton.click();
  }

  async verifyProfileImageUploaded() {

    await expect(
      this.page.getByText(
          'Successfully Updated'
        )
      ).toBeVisible({
        timeout: 10000
      });
  }

  async editEmployee() {
    await this.firstEmployeeEditButton.click();
    await this.personalDetailsHeader
      .waitFor({
        state: 'visible'
      });
    await this.middleNameInput.fill(
      'Updated'
    );
    await this.personalSaveButton.click();
    await expect(
      this.successUpdateToast
    ).toBeVisible({
      timeout: 10000
    });
  }

  async deleteEmployee() {
    await this.firstEmployeeDeleteButton.click();
    await expect(
      this.confirmDeleteButton
    ).toBeVisible({
      timeout: 30000
    });
    await this.confirmDeleteButton.click();
    await expect(
      this.deleteSuccessToast
    ).toBeVisible({
      timeout: 30000
    });
  }

  async getFirstEmployeeId() {
    await this.employeeTableRows.first().waitFor();
    const firstRow = await this.employeeTableRows.first().textContent();
    const employeeId = firstRow.match(/\d+/)?.[0];
    return employeeId;
  }

  async searchEmployeeById(employeeId) {
    await expect(
      this.searchButton
    ).toBeVisible({
      timeout: 30000
    });
    await this.employeeIdSearch.waitFor({
      state: 'visible',
      timeout: 30000
    });
    await this.employeeIdSearch.fill(
      employeeId
    );
    await this.searchButton.click();
  }

  async verifyEmployeeIdSearch(employeeId) {
    await this.employeeTableRows.first().waitFor({
      state: 'visible'
    });
    const tableText = await this.employeeTableRows.first().textContent();
    expect(tableText).toContain(employeeId);
  }

  async resetEmployeeSearch() {
    await this.employeeNameSearch.fill(
      'Test Employee'
    );
    await this.resetButton.click();
    await expect(
      this.employeeNameSearch
    ).toHaveValue('');
  }

  async verifyPIMPageLoaded() {
    await expect(
      this.pimMenu
    ).toBeVisible();
    await expect(
      this.searchButton
    ).toBeVisible();
  }

  async verifyAddEmployeeButtonVisible() {
    await expect(
      this.addEmployeeButton
    ).toBeVisible();
  }

  async cancelAddEmployee() {
    await this.clickAddEmployee();
    await this.cancelButton.click();
    await expect(
      this.searchButton
    ).toBeVisible({
      timeout: 30000
    });
    await expect(
      this.searchButton
    ).toBeVisible();
  }

  async verifyPersonalDetailsPage() {
    await this.clickAddEmployee();
    await expect(
      this.personalDetailsHeader
    ).toBeVisible();
  }

  async verifyAddEmployeePageLoaded() {
    await this.clickAddEmployee();
    await expect(
      this.addEmployeeHeader
    ).toBeVisible();
  }

  async verifySaveButtonVisible() {
    await this.clickAddEmployee();
    await expect(
      this.saveButton
    ).toBeVisible();
  }

  async verifyCancelButtonVisible() {
    await this.clickAddEmployee();
    await expect(
      this.cancelButton
    ).toBeVisible();
  }

  async verifyEmployeeIdVisible() {
    await this.clickAddEmployee();
    await expect(
      this.employeeIdField
    ).toBeVisible();
  }

  async verifyFirstNameRequired() {
    await this.clickAddEmployee();
    await this.saveButton.click();
    await expect(
      this.requiredFieldError
    ).toBeVisible();
  }

  async verifyEmployeeListLoaded() {
    await expect(
      this.employeeTableRows.first()
    ).toBeVisible();
  }

  async searchInvalidEmployee() {
    await this.employeeNameSearch.fill(
      'ZZZZZZZZZZ'
    );
    await this.searchButton.click();
    await expect(
      this.page
        .locator('span')
        .filter({
          hasText: 'No Records Found'
        })
    ).toBeVisible();
  }

  async searchEmptyEmployee() {
    await this.searchButton.click();
    await expect(
      this.employeeTableRows.first()
    ).toBeVisible();
  }

  async verifySearchButtonVisible() {
    await expect(
      this.searchButton
    ).toBeVisible();
  }

  async verifyResetButtonVisible() {
    await expect(
      this.resetButton
    ).toBeVisible();
  }
}

module.exports = { PIMPage };
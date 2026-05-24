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
      page.locator('input[type="file"]');

    this.profileImageSaveButton =
      page.getByRole('button', {
        name: 'Save'
      }).last();
  }

  async navigateToPIM() {
    await this.pimMenu.click();
  }

  async clickAddEmployee() {
    await this.addEmployeeButton.click();
  }

  async addEmployee(firstName, lastName) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await Promise.all([
    this.page.waitForLoadState('networkidle'),
    this.saveButton.click()
    ]);
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
    await this.employeeTableRows
    .first()
    .waitFor({
      state: 'visible',
      timeout: 30000
    });
    const rows =
      await this.employeeTableRows
        .allTextContents();
    const employeeFound =
      rows.some(row =>
        row.includes(employeeName)
      );
    expect(employeeFound).toBeTruthy();
  }

  async getEmployeeCount() {
    await this.employeeTableRows.first().waitFor();
    return await this.employeeTableRows.count();
  }

  async navigateToMyInfo() {
    await this.myInfoMenu.click();
  }

  async uploadProfileImage(filePath) {
    await this.profileImage.setInputFiles(
      filePath
    );
    await this.profileImageSaveButton.click();
  }
}

module.exports = { PIMPage };
const { expect } = require('@playwright/test');

class MyInfoPage {

  constructor(page) {

    this.page = page;

    this.myInfoMenu =
      page.getByRole('link', {
        name: 'My Info'
      });

    this.personalDetailsHeader =
      page.getByRole('heading', {
        name: 'Personal Details'
      });

    this.firstNameField =
      page.locator('input[name="firstName"]');

    this.middleNameField =
      page.locator('input[name="middleName"]');

    this.lastNameField =
      page.locator('input[name="lastName"]');

    this.employeeIdField =
      page.locator('.oxd-input').nth(4);

    this.saveButton =
      page.getByRole('button', {
        name: 'Save'
      }).first();

    this.profileImage =
      page.locator('.employee-image');

    this.form =
      page.locator('form');
  }

  async navigateToMyInfo() {

    await this.myInfoMenu.click();

    await expect(
      this.personalDetailsHeader
    ).toBeVisible({
      timeout: 30000
    });
  }

  async verifyMyInfoPageLoaded() {
    await expect(
      this.personalDetailsHeader
    ).toBeVisible();
  }

  async verifyMyInfoMenuVisible() {
    await expect(
      this.myInfoMenu
    ).toBeVisible();
  }

  async verifyFirstNameFieldVisible() {
    await expect(
      this.firstNameField
    ).toBeVisible();
  }

  async verifyMiddleNameFieldVisible() {
    await expect(
      this.middleNameField
    ).toBeVisible();
  }

  async verifyLastNameFieldVisible() {
    await expect(
      this.lastNameField
    ).toBeVisible();
  }

  async verifyEmployeeIdFieldVisible() {
    await expect(
      this.employeeIdField
    ).toBeVisible();
  }

  async verifySaveButtonVisible() {
    await expect(
      this.saveButton
    ).toBeVisible();
  }

  async verifySaveButtonEnabled() {
    await expect(
      this.saveButton
    ).toBeEnabled();
  }

  async verifyProfileImageVisible() {
    await expect(
      this.profileImage
    ).toBeVisible();
  }

  async verifyFormVisible() {
    await expect(
      this.form
    ).toBeVisible();
  }

  async verifyFirstNameEnabled() {
    await expect(
      this.firstNameField
    ).toBeEnabled();
  }

  async verifyMiddleNameEnabled() {
    await expect(
      this.middleNameField
    ).toBeEnabled();
  }

  async verifyLastNameEnabled() {
    await expect(
      this.lastNameField
    ).toBeEnabled();
  }

  async verifyEmployeeIdEnabled() {
    await expect(
      this.employeeIdField
    ).toBeEnabled();
  }

  async verifyPersonalDetailsHeaderVisible() {
    await expect(
      this.personalDetailsHeader
    ).toBeVisible();
  }
}

module.exports = { MyInfoPage };
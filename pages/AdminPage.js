const { expect } = require('@playwright/test');

class AdminPage {

  constructor(page) {

    this.page = page;

    this.adminMenu =
      page.getByRole('link', {
        name: 'Admin'
      });

    this.searchButton =
      page.getByRole('button', {
        name: 'Search'
      });

    this.resetButton =
      page.getByRole('button', {
        name: 'Reset'
      });

    this.addButton =
      page.getByRole('button', {
        name: 'Add'
      });

    this.addUserHeader =
        this.page.getByRole('heading', {
            name: 'Add User'
        });

    this.cancelButton =
        page.getByRole('button', {
            name: 'Cancel'
        });

    this.saveButton =
        page.getByRole('button', {
            name: 'Save'
        });

    this.userRoleDropdown =
        page.locator('.oxd-select-text')
            .first();

    this.usernameField =
      page.locator('.oxd-input').nth(1);

    this.employeeNameField =
      page.getByPlaceholder('Type for hints...');

    this.systemUsersHeader =
      page.getByRole('heading', {
        name: 'System Users'
      });

    this.recordsTable =
      page.locator('.oxd-table-body');

    this.searchForm =
      page.locator('form');
  }

  async navigateToAdmin() {

  await this.adminMenu.click();

  await this.page.waitForURL(
    '**/admin/viewSystemUsers',
    {
      timeout: 30000
    }
  );

  await expect(
    this.searchButton
  ).toBeVisible({
    timeout: 30000
  });
}

  async verifyAdminPageLoaded() {
    await expect(
      this.searchButton
    ).toBeVisible();
  }

  async verifyAddButtonVisible() {
    await expect(
      this.addButton
    ).toBeVisible();
  }

  async verifyResetButtonVisible() {
    await expect(
      this.resetButton
    ).toBeVisible();
  }

  async verifySearchButtonVisible() {

    await expect(
        this.searchButton
    ).toBeVisible();
    }

    async verifyAddUserPageLoaded() {

    await this.addButton.click();

    await expect(
        this.addUserHeader
    ).toBeVisible();
    }

    async verifyCancelButtonVisible() {

        await this.addButton.click();

        await expect(
            this.cancelButton
        ).toBeVisible();
        }

    async verifySaveButtonVisible() {

        await this.addButton.click();

        await expect(
            this.saveButton
        ).toBeVisible();
    }

    async verifyUserRoleDropdownVisible() {

        await this.addButton.click();

        await expect(
            this.userRoleDropdown
        ).toBeVisible();
    }

    async verifyUsernameFieldVisible() {

    await expect(
      this.usernameField
    ).toBeVisible();
  }

  async verifyEmployeeNameFieldVisible() {

    await this.addButton.click();

    await expect(
      this.employeeNameField
    ).toBeVisible();
  }

  async verifySystemUsersHeaderVisible() {

    await expect(
      this.systemUsersHeader
    ).toBeVisible();
  }

  async verifyRecordsTableVisible() {

    await expect(
      this.recordsTable
    ).toBeVisible();
  }

  async verifySearchFormVisible() {

    await expect(
      this.searchForm
    ).toBeVisible();
  }

  async verifyAdminMenuVisible() {

    await expect(
      this.adminMenu
    ).toBeVisible();
  }

  async verifyAddButtonEnabled() {

    await expect(
      this.addButton
    ).toBeEnabled();
  }
}

module.exports = { AdminPage };
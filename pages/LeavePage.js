const { expect } = require('@playwright/test');

class LeavePage {

  constructor(page) {

    this.page = page;

    this.leaveMenu =
      page.getByRole('link', {
        name: 'Leave'
      });

    this.searchButton =
      page.getByRole('button', {
        name: 'Search'
      });

    this.resetButton =
      page.getByRole('button', {
        name: 'Reset'
      });

    this.applyMenu =
        page.getByRole('link', {
            name: 'Apply'
        });

        this.leaveListMenu =
        page.getByRole('link', {
            name: 'Leave List'
        });

        this.assignLeaveMenu =
        page.getByRole('link', {
            name: 'Assign Leave'
        });

        this.entitlementsMenu =
        page.getByRole('link', {
            name: 'Entitlements'
        });

        this.myLeaveMenu =
        page.getByRole('link', {
            name: 'My Leave'
        });
    
        this.leaveHeader =
          page.getByRole('heading').first();

        this.leaveTable =
          page.locator('.oxd-table-body');

  }

  async navigateToLeave() {
    await this.leaveMenu.click();
    await expect(
      this.searchButton
    ).toBeVisible({
      timeout: 30000
    });
  }

  async verifyLeavePageLoaded() {
    await expect(
      this.searchButton
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

  async verifyApplyLeavePage() {
    await this.applyMenu.click();
    await expect(
      this.leaveHeader
    ).toBeVisible({
      timeout: 30000
    });
  }

  async verifyLeaveListPage() {
    await this.leaveListMenu.click();
    await this.page.waitForURL(
      '**/leave/viewLeaveList',
      {
        timeout: 30000
      }
    );
    await expect(
      this.page.locator('form')
    ).toBeVisible({
      timeout: 30000
    });
  }

  async verifyAssignLeavePage() {
    await this.assignLeaveMenu.click();
    await expect(
      this.leaveHeader
    ).toBeVisible({
      timeout: 30000
    });
  }

  async verifyEntitlementsPage() {
  //await this.page.getByText('Entitlements').first().click();
    await this.page.locator('.oxd-topbar-body-nav-tab').filter({
        hasText: 'Entitlements'
      }).click();
    await expect(
        this.page
        .locator('body')
    ).toBeVisible();
  }

  async verifyMyLeavePage() {
    await this.myLeaveMenu.click();
    await expect(
        this.searchButton
    ).toBeVisible();
  }

  async verifyLeaveMenuVisible() {
    await expect(
      this.leaveMenu
    ).toBeVisible();
  }

  async verifyLeaveMenuEnabled() {
    await expect(
      this.leaveMenu
    ).toBeEnabled();
  }

  async verifyApplyMenuVisible() {
    await expect(
      this.applyMenu
    ).toBeVisible();
  }

  async verifyLeaveListMenuVisible() {
    await expect(
      this.leaveListMenu
    ).toBeVisible();
  }

  async verifyAssignLeaveMenuVisible() {
    await expect(
      this.assignLeaveMenu
    ).toBeVisible();
  }

  async verifyLeaveTableVisible() {
    await expect(
      this.leaveTable
    ).toBeVisible({
      timeout: 30000
    });
  }

  async verifyLeaveHeaderVisible() {
    await expect(
      this.leaveHeader
    ).toBeVisible();
  }

  async verifySearchButtonEnabled() {
    await expect(
      this.searchButton
    ).toBeEnabled();
  }

  async verifyResetButtonEnabled() {
    await expect(
      this.resetButton
    ).toBeEnabled();
  }
}

module.exports = { LeavePage };
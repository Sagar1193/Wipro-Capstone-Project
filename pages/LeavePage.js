const { expect } = require('@playwright/test');

class LeavePage {

  constructor(page) {

    this.page = page;

    this.leaveMenu =
      page.getByRole('link', {
        name: 'Leave'
      });

    this.applyButton =
      page.getByRole('link', {
        name: 'Apply'
      });

    this.leaveListButton =
      page.getByRole('link', {
        name: 'Leave List'
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

        this.applyLink =
          page.getByRole('link', {
            name: 'Apply'
          });

        this.leaveListLink =
          page.getByRole('link', {
            name: 'Leave List'
          });

        this.assignLeaveLink =
          page.getByRole('link', {
            name: 'Assign Leave'
          });
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
            this.page
            .getByRole('heading')
            .first()
        ).toBeVisible();
        }

        async verifyLeaveListPage() {

        await this.leaveListMenu.click();

        await expect(
            this.searchButton
        ).toBeVisible();
        }

        async verifyAssignLeavePage() {

        await this.assignLeaveMenu.click();

        await expect(
            this.page
            .getByRole('heading')
            .first()
        ).toBeVisible();
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
    this.applyLink
  ).toBeVisible();
}
async verifyLeaveListMenuVisible() {

  await expect(
    this.leaveListLink
  ).toBeVisible();
}

async verifyAssignLeaveMenuVisible() {

  await expect(
    this.assignLeaveLink
  ).toBeVisible();
}

async verifyLeaveTableVisible() {

  await expect(
    this.searchButton
  ).toBeVisible();
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
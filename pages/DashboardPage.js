const { expect } = require('@playwright/test');

class DashboardPage {

  constructor(page) {

    this.page = page;

    this.dashboardMenu =
      page.getByRole('link', {
        name: 'Dashboard'
      });

    this.dashboardHeader =
      page.getByRole('heading', {
        name: 'Dashboard'
      });

    this.timeAtWorkWidget =
      page.getByText('Time at Work');

    this.myActionsWidget =
      page.getByText('My Actions');

    this.quickLaunchWidget =
      page.getByText('Quick Launch');

    this.buzzLatestPostsWidget =
      page.getByText('Buzz Latest Posts');

    this.employeesOnLeaveWidget =
      page.getByText('Employees on Leave Today');

    this.employeeDistributionWidget =
      page.getByText(
        /Employee Distribution by Sub Unit/i
      );

    this.employeeLocationWidget =
      page.getByText(
        /Employee Distribution by Location/i
      );
  }

  async navigateToDashboard() {
    await this.dashboardMenu.click();
    await expect(
      this.dashboardHeader
    ).toBeVisible({
      timeout: 30000
    });
  }

  async verifyDashboardLoaded() {
    await expect(
      this.dashboardHeader
    ).toBeVisible({
      timeout: 30000
    });
  }

  async verifyDashboardMenuVisible() {
    await expect(this.dashboardMenu).toBeVisible();
  }

  async verifyTimeAtWorkWidgetVisible() {
    await expect(this.timeAtWorkWidget).toBeVisible();
  }

  async verifyMyActionsWidgetVisible() {
    await expect(this.myActionsWidget).toBeVisible();
  }

  async verifyQuickLaunchWidgetVisible() {
    await expect(this.quickLaunchWidget).toBeVisible();
  }

  async verifyBuzzLatestPostsWidgetVisible() {
    await expect(this.buzzLatestPostsWidget).toBeVisible();
  }

  async verifyEmployeesOnLeaveWidgetVisible() {
    await expect(this.employeesOnLeaveWidget).toBeVisible();
  }

  async verifyEmployeeDistributionWidgetVisible() {
    await expect(this.employeeDistributionWidget).toBeVisible();
  }

  async verifyEmployeeLocationWidgetVisible() {
    await expect(this.employeeLocationWidget).toBeVisible();
  }

  async verifyDashboardHeaderVisible() {
    await expect(
      this.dashboardHeader
    ).toBeVisible({
      timeout: 30000
    });
  }

  async verifyDashboardMenuEnabled() {
    await expect(this.dashboardMenu).toBeEnabled();
  }

  async verifyTimeAtWorkWidgetExists() {
    await expect(this.timeAtWorkWidget).toBeAttached();
  }

  async verifyMyActionsWidgetExists() {
    await expect(this.myActionsWidget).toBeAttached();
  }

  async verifyQuickLaunchWidgetExists() {
    await expect(this.quickLaunchWidget).toBeAttached();
  }

  async verifyBuzzLatestPostsWidgetExists() {
    await expect(this.buzzLatestPostsWidget).toBeAttached();
  }
}

module.exports = { DashboardPage };
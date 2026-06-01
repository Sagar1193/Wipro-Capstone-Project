const { expect } = require('@playwright/test');

class RecruitmentPage {

  constructor(page) {

    this.page = page;

    this.recruitmentMenu =
      page.getByRole('link', {
        name: 'Recruitment'
      });

    this.addButton =
      page.getByRole('button', {
        name: 'Add'
      });

    this.searchButton =
      page.getByRole('button', {
        name: 'Search'
      });

    this.resetButton =
      page.getByRole('button', {
        name: 'Reset'
      });

    this.candidatesTab =
      page.getByRole('link', {
        name: 'Candidates'
      });

    this.vacanciesTab =
      page.getByRole('link', {
        name: 'Vacancies'
      });

    this.tableBody =
      page.locator('.oxd-table-body');

    this.form =
      page.locator('form');

    this.header =
      page.getByRole('heading').first();
  }

  async navigateToRecruitment() {

  await Promise.all([
    this.page.waitForURL(
      '**/recruitment/viewRecruitmentModule',
      { timeout: 30000 }
    ),
    this.recruitmentMenu.click()
  ]);

  await expect(
    this.searchButton
  ).toBeVisible({
    timeout: 30000
  });
}

  async verifyRecruitmentPageLoaded() {
    await expect(this.searchButton).toBeVisible();
  }

  async verifyAddButtonVisible() {
    await expect(this.addButton).toBeVisible();
  }

  async verifySearchButtonVisible() {
    await expect(this.searchButton).toBeVisible();
  }

  async verifyResetButtonVisible() {
    await expect(this.resetButton).toBeVisible();
  }

  async verifyCandidatesTabVisible() {
    await expect(this.candidatesTab).toBeVisible();
  }

  async verifyVacanciesTabVisible() {
    await expect(this.vacanciesTab).toBeVisible();
  }

  async verifyRecruitmentMenuVisible() {
    await expect(this.recruitmentMenu).toBeVisible();
  }

  async verifyAddButtonEnabled() {
    await expect(this.addButton).toBeEnabled();
  }

  async verifySearchButtonEnabled() {
    await expect(this.searchButton).toBeEnabled();
  }

  async verifyResetButtonEnabled() {
    await expect(this.resetButton).toBeEnabled();
  }

  async verifyTableVisible() {
    await expect(this.tableBody).toBeVisible();
  }

  async verifyFormVisible() {
    await expect(this.form).toBeVisible();
  }

  async verifyHeaderVisible() {
    await expect(this.header).toBeVisible();
  }

  async verifyCandidatesPage() {
    await this.candidatesTab.click();
    await expect(this.searchButton).toBeVisible();
  }

  async verifyVacanciesPage() {
    await this.vacanciesTab.click();
    await expect(this.searchButton).toBeVisible();
  }
}

module.exports = { RecruitmentPage };
class BasePage {

  constructor(page) {
    this.page = page;
  }

  async navigate(path = '') {
  await this.page.goto(path, {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  }

  async wait(milliseconds) {
    await this.page.waitForTimeout(milliseconds);
  }

  async getPageTitle() {
    return await this.page.title();
  }
}

module.exports = { BasePage };
const base = require('@playwright/test');
const { PIMPage } = require('../pages/PIMPage');
const { LoginPage } = require('../pages/LoginPage');

exports.test = base.test.extend({

  loginPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);

    await use(loginPage);

  
  },
  pimPage: async ({ page }, use) => {

    const pimPage = new PIMPage(page);

    await use(pimPage);

  }
});

exports.expect = base.expect;
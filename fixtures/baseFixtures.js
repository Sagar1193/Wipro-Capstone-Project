const base = require('@playwright/test');
const { PIMPage } = require('../pages/PIMPage');
const { LoginPage } = require('../pages/LoginPage');
const { AdminPage } = require('../pages/AdminPage');
const { LeavePage } = require('../pages/LeavePage');
const { RecruitmentPage } = require('../pages/RecruitmentPage');
const { MyInfoPage } = require('../pages/MyInfoPage');
const { DashboardPage } = require('../pages/DashboardPage');

exports.test = base.test.extend({

  loginPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);

    await use(loginPage);

  
  },
  pimPage: async ({ page }, use) => {

    const pimPage = new PIMPage(page);

    await use(pimPage);

  },

  adminPage: async ({ page }, use) => {

    const adminPage = new AdminPage(page);

    await use(adminPage);
  },

  leavePage: async ({ page }, use) => {

    const leavePage =
      new LeavePage(page);

    await use(leavePage);
  },

  recruitmentPage: async ({ page }, use) => {

    const recruitmentPage =
      new RecruitmentPage(page);

    await use(recruitmentPage);
  },

  myInfoPage: async ({ page }, use) => {

    const myInfoPage =
      new MyInfoPage(page);

    await use(myInfoPage);
  },

  dashboardPage: async ({ page }, use) => {

  const dashboardPage =
    new DashboardPage(page);

  await use(dashboardPage);
}
});

exports.expect = base.expect;
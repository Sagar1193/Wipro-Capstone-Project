const { test, expect } =
require('../../fixtures/baseFixtures');

test.describe('API Mocking Tests', () => {

  test.skip('Mock Employee API Response',
    async ({ page, loginPage }) => {

    let apiIntercepted = false;

    await page.route(
      '**/web/index.php/api/v2/pim/employees*',

      async route => {

        apiIntercepted = true;

        const mockResponse = {

          data: [
            {
              empNumber: 999,
              firstName: 'Mock',
              lastName: 'Employee'
            }
          ]
        };

        await route.fulfill({

          status: 200,

          contentType: 'application/json',

          body: JSON.stringify(mockResponse)
        });
      }
    );

    await loginPage.gotoLoginPage();

    await loginPage.login();

    await loginPage.verifySuccessfulLogin();

      // Force fresh employee API request
      await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
        {
          waitUntil: 'domcontentloaded'
        }
      );

      await page.waitForTimeout(5000);
      console.log(
        'API Intercepted:',
        apiIntercepted
      );

      expect(apiIntercepted).toBeTruthy();
});

test('Verify Dashboard API Response', async ({
  page,
  loginPage
}) => {

  let dashboardApiHit = false;

  await page.route(
    '**/dashboard/employees/action-summary*',
    async route => {

      dashboardApiHit = true;

      await route.continue();
    }
  );

  await loginPage.gotoLoginPage();

  await loginPage.login();

  await loginPage.verifySuccessfulLogin();

  await page.waitForTimeout(5000);

  expect(
    dashboardApiHit
  ).toBeTruthy();
});

test('Mock Dashboard Widget API', async ({
  page,
  loginPage
}) => {

  let intercepted = false;

  await page.route(
    '**/dashboard/employees/action-summary*',
    async route => {

      intercepted = true;

      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: {
            totalEmployees: 100
          }
        })
      });
    }
  );

  await loginPage.gotoLoginPage();

  await loginPage.login();

  await loginPage.verifySuccessfulLogin();

  await page.waitForTimeout(3000);

  expect(
    intercepted
  ).toBeTruthy();
});

test('Intercept PIM Employee API', async ({
  page,
  loginPage
}) => {

  let intercepted = false;

  await page.route(
    '**/api/v2/pim/employees*',
    async route => {

      intercepted = true;

      await route.continue();
    }
  );

  await loginPage.gotoLoginPage();

  await loginPage.login();

  await loginPage.verifySuccessfulLogin();

  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList'
  );

  await page.waitForTimeout(3000);

  expect(
    intercepted
  ).toBeTruthy();
});

test('Verify Employee API Request Sent', async ({
  page,
  loginPage
}) => {

  let apiHit = false;

  page.on('response', response => {

    if (
      response.url().includes(
        '/api/v2/pim/employees'
      )
    ) {
      apiHit = true;
    }
  });

  await loginPage.gotoLoginPage();

  await loginPage.login();

  await loginPage.verifySuccessfulLogin();

  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList'
  );

  await page.waitForTimeout(3000);

  expect(apiHit).toBeTruthy();
});

test('Verify Dashboard Loads API Data', async ({
  page,
  loginPage
}) => {

  let apiHit = false;

  page.on('response', response => {

    if (
      response.url().includes(
        'action-summary'
      )
    ) {
      apiHit = true;
    }
  });

  await loginPage.gotoLoginPage();

  await loginPage.login();

  await loginPage.verifySuccessfulLogin();

  await page.waitForTimeout(3000);

  expect(apiHit).toBeTruthy();
});

});
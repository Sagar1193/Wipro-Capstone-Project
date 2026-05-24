const { test, expect } =
require('../../fixtures/baseFixtures');

test.describe('API Mocking Tests', () => {

  test('Mock Employee API Response',
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

    // Navigate directly to PIM URL
    await page.goto(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList'
    );

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

    expect(apiIntercepted).toBeTruthy();
  });

});
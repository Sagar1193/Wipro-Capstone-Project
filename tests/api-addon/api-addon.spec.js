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
          await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
              data: [
                {
                  empNumber: 999,
                  firstName: 'Mock',
                  lastName: 'Employee'
                }
              ]
            })
          });
        }
      );
      await loginPage.loginAndVerify();
      await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
        { waitUntil: 'networkidle' }
      );
      expect(
        apiIntercepted
      ).toBeTruthy();
    }
  );

  test('Verify Dashboard API Response',
    async ({ page, loginPage }) => {
      let dashboardApiHit = false;
      await page.route(
        '**/dashboard/employees/action-summary*',
        async route => {
          dashboardApiHit = true;
          await route.continue();
        }
      );
      const responsePromise =
        page.waitForResponse(
          response =>
            response.url().includes(
              'action-summary'
            ),
          {
            timeout: 60000
          }
        );
      await loginPage.loginAndVerify();
      await responsePromise;
      expect(
        dashboardApiHit
      ).toBeTruthy();
    }
  );

  test.skip('Mock Dashboard Widget API',
    async ({ page, loginPage }) => {
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
      await loginPage.loginAndVerify();
      await page.waitForResponse(
        response =>
          response.url().includes(
            'action-summary'
          ),
        {
          timeout: 30000
        }
      );
      expect(
        intercepted
      ).toBeTruthy();
    }
  );

  test.skip('Intercept PIM Employee API',
    async ({ page, loginPage }) => {
      let intercepted = false;
      await page.route(
        '**/api/v2/pim/employees*',
        async route => {
          intercepted = true;
          await route.continue();
        }
      );
      await loginPage.loginAndVerify();
      await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList'
      );
      expect(
        intercepted
      ).toBeTruthy();
    }
  );

  test('Verify Employee API Request Sent',
    async ({ page, loginPage }) => {
      await loginPage.loginAndVerify();
      const responsePromise =
        page.waitForResponse(
          response =>
            response.url().includes(
              '/api/v2/pim/employees'
            ),
          {
            timeout: 30000
          }
        );
      await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList'
      );
      const response =
        await responsePromise;
      expect(
        response.ok()
      ).toBeTruthy();
    }
  );

  test('Verify Dashboard Loads API Data',
    async ({ page, loginPage }) => {
      await loginPage.loginAndVerify();
      const responsePromise =
        page.waitForResponse(
          response =>
            response.url().includes(
              'action-summary'
            ),
          {
            timeout: 30000
          }
        );
      await page.reload();
      const response =
        await responsePromise;
      expect(
        response.ok()
      ).toBeTruthy();
    }
  );

});
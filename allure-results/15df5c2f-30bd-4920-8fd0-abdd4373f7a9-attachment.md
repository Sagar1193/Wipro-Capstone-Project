# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\api.spec.js >> API Mocking Tests >> Verify API Returns Status 200
- Location: tests\api\api.spec.js:165:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Test source

```ts
  86  |   await page.waitForTimeout(5000);
  87  | 
  88  |   expect(
  89  |     dashboardApiHit
  90  |   ).toBeTruthy();
  91  | });
  92  | 
  93  | test('Mock Dashboard Widget API', async ({
  94  |   page,
  95  |   loginPage
  96  | }) => {
  97  | 
  98  |   let intercepted = false;
  99  | 
  100 |   await page.route(
  101 |     '**/dashboard/employees/action-summary*',
  102 |     async route => {
  103 | 
  104 |       intercepted = true;
  105 | 
  106 |       await route.fulfill({
  107 |         status: 200,
  108 |         contentType: 'application/json',
  109 |         body: JSON.stringify({
  110 |           data: {
  111 |             totalEmployees: 100
  112 |           }
  113 |         })
  114 |       });
  115 |     }
  116 |   );
  117 | 
  118 |   await loginPage.gotoLoginPage();
  119 | 
  120 |   await loginPage.login();
  121 | 
  122 |   await loginPage.verifySuccessfulLogin();
  123 | 
  124 |   await page.waitForTimeout(3000);
  125 | 
  126 |   expect(
  127 |     intercepted
  128 |   ).toBeTruthy();
  129 | });
  130 | 
  131 | test('Intercept PIM Employee API', async ({
  132 |   page,
  133 |   loginPage
  134 | }) => {
  135 | 
  136 |   let intercepted = false;
  137 | 
  138 |   await page.route(
  139 |     '**/api/v2/pim/employees*',
  140 |     async route => {
  141 | 
  142 |       intercepted = true;
  143 | 
  144 |       await route.continue();
  145 |     }
  146 |   );
  147 | 
  148 |   await loginPage.gotoLoginPage();
  149 | 
  150 |   await loginPage.login();
  151 | 
  152 |   await loginPage.verifySuccessfulLogin();
  153 | 
  154 |   await page.goto(
  155 |     'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList'
  156 |   );
  157 | 
  158 |   await page.waitForTimeout(3000);
  159 | 
  160 |   expect(
  161 |     intercepted
  162 |   ).toBeTruthy();
  163 | });
  164 | 
  165 | test('Verify API Returns Status 200', async ({
  166 |   request
  167 | }) => {
  168 | 
  169 |   const response =
  170 |     await request.get(
  171 |       'https://reqres.in/api/users/2'
  172 |     );
  173 | 
  174 |   console.log(
  175 |     'Status:',
  176 |     response.status()
  177 |   );
  178 | 
  179 |   console.log(
  180 |     'Response:',
  181 |     await response.text()
  182 |   );
  183 | 
  184 |   expect(
  185 |     response.status()
> 186 |   ).toBe(200);
      |     ^ Error: expect(received).toBe(expected) // Object.is equality
  187 | });
  188 | 
  189 | test('Verify API Returns 404', async ({
  190 |   request
  191 | }) => {
  192 | 
  193 |   const response =
  194 |     await request.get(
  195 |       'https://reqres.in/api/users/23'
  196 |     );
  197 | 
  198 |   console.log(
  199 |     'Status:',
  200 |     response.status()
  201 |   );
  202 | 
  203 |   console.log(
  204 |     'Response:',
  205 |     await response.text()
  206 |   );
  207 | 
  208 |   expect(
  209 |     response.status()
  210 |   ).toBe(404);
  211 | });
  212 | 
  213 | });
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.spec.js >> OrangeHRM Login Tests >> Valid Login
- Location: tests\auth\login.spec.js:7:3

# Error details

```
TimeoutError: page.waitForURL: Timeout 15000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
  navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e12]:
          - alert [ref=e13]:
            - generic [ref=e14]:
              - generic [ref=e15]: 
              - paragraph [ref=e16]: Invalid credentials
          - generic [ref=e18]:
            - paragraph [ref=e19]: "Username : Admin"
            - paragraph [ref=e20]: "Password : admin123"
        - generic [ref=e21]:
          - generic [ref=e23]:
            - generic [ref=e24]:
              - generic [ref=e25]: 
              - generic [ref=e26]: Username
            - textbox "Username" [active] [ref=e28]
          - generic [ref=e30]:
            - generic [ref=e31]:
              - generic [ref=e32]: 
              - generic [ref=e33]: Password
            - textbox "Password" [ref=e35]
          - button "Login" [ref=e37] [cursor=pointer]
          - paragraph [ref=e39] [cursor=pointer]: Forgot your password?
      - generic [ref=e40]:
        - generic [ref=e41]:
          - link [ref=e42] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e45] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e48] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e51] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e54]:
          - paragraph [ref=e55]: OrangeHRM OS 5.8
          - paragraph [ref=e56]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e57] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e59]
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | 
  3  | class LoginPage {
  4  | 
  5  |   constructor(page) {
  6  | 
  7  |     this.page = page;
  8  | 
  9  |     this.usernameInput = page.locator('input[name="username"]');
  10 | 
  11 |     this.passwordInput = page.locator('input[name="password"]');
  12 | 
  13 |     this.loginButton = page.getByRole('button', { name: 'Login' });
  14 | 
  15 |     this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' });
  16 |   }
  17 | 
  18 |   async gotoLoginPage() {
  19 | 
  20 |     await this.page.goto('/');
  21 | 
  22 |     await this.usernameInput.waitFor({
  23 |       state: 'visible'
  24 |     });
  25 |   }
  26 | 
  27 |   async login(username, password) {
  28 | 
  29 |     await this.usernameInput.fill(username);
  30 | 
  31 |     await this.passwordInput.fill(password);
  32 | 
  33 |     await Promise.all([
> 34 |       this.page.waitForURL(/dashboard/),
     |                 ^ TimeoutError: page.waitForURL: Timeout 15000ms exceeded.
  35 |       this.loginButton.click()
  36 |     ]);
  37 |   }
  38 | 
  39 |   async verifySuccessfulLogin() {
  40 | 
  41 |     await expect(this.dashboardHeader).toBeVisible();
  42 |   }
  43 | }
  44 | 
  45 | module.exports = { LoginPage };
```
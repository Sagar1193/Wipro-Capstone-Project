# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.spec.js >> Authentication Tests >> @sanity Password Field Visible
- Location: tests\auth\login.spec.js:163:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('input[name="password"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('input[name="password"]')

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.8
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
```

# Test source

```ts
  70  | 
  71  |     await expect(
  72  |       loginPage.requiredFieldError
  73  |     ).toBeVisible();
  74  |   });
  75  | 
  76  |   test('@regression Empty Credentials',
  77  |     async ({ loginPage }) => {
  78  | 
  79  |     await loginPage.gotoLoginPage();
  80  | 
  81  |     await loginPage.login(
  82  |       '',
  83  |       ''
  84  |     );
  85  | 
  86  |     await expect(
  87  |       loginPage.requiredFieldError
  88  |     ).toBeVisible();
  89  |   });
  90  | 
  91  |   test('@sanity Password Mask Validation',
  92  |     async ({ loginPage }) => {
  93  | 
  94  |     await loginPage.gotoLoginPage();
  95  | 
  96  |     await expect(
  97  |       loginPage.passwordInput
  98  |     ).toHaveAttribute(
  99  |       'type',
  100 |       'password'
  101 |     );
  102 |   });
  103 | 
  104 |   test('@regression Username With Spaces',
  105 |     async ({ loginPage }) => {
  106 | 
  107 |     await loginPage.gotoLoginPage();
  108 | 
  109 |     await loginPage.login(
  110 |       '   ',
  111 |       'admin123'
  112 |     );
  113 | 
  114 |     await expect(
  115 |       loginPage.requiredFieldError
  116 |     ).toBeVisible();
  117 |   });
  118 | 
  119 |   test('@regression Password With Spaces',
  120 |     async ({ loginPage }) => {
  121 | 
  122 |     await loginPage.gotoLoginPage();
  123 | 
  124 |     await loginPage.login(
  125 |       'Admin',
  126 |       '   '
  127 |     );
  128 | 
  129 |     await expect(
  130 |       loginPage.requiredFieldError
  131 |     ).toBeVisible();
  132 |   });
  133 | 
  134 |   test('@sanity Login Page Title Validation',
  135 |     async ({ page, loginPage }) => {
  136 | 
  137 |     await loginPage.gotoLoginPage();
  138 | 
  139 |     await expect(page)
  140 |       .toHaveTitle(/OrangeHRM/);
  141 |   });
  142 | 
  143 |   test('@sanity Login Button Visible',
  144 |   async ({ loginPage }) => {
  145 | 
  146 |   await loginPage.gotoLoginPage();
  147 | 
  148 |   await expect(
  149 |     loginPage.loginButton
  150 |   ).toBeVisible();
  151 | });
  152 | 
  153 | test('@sanity Username Field Visible',
  154 |   async ({ loginPage }) => {
  155 | 
  156 |   await loginPage.gotoLoginPage();
  157 | 
  158 |   await expect(
  159 |     loginPage.usernameInput
  160 |   ).toBeVisible();
  161 | });
  162 | 
  163 | test('@sanity Password Field Visible',
  164 |   async ({ loginPage }) => {
  165 | 
  166 |   await loginPage.gotoLoginPage();
  167 | 
  168 |   await expect(
  169 |     loginPage.passwordInput
> 170 |   ).toBeVisible();
      |     ^ Error: expect(locator).toBeVisible() failed
  171 | });
  172 | 
  173 | test('@sanity Forgot Password Link Visible',
  174 |   async ({ loginPage }) => {
  175 | 
  176 |   await loginPage.gotoLoginPage();
  177 | 
  178 |   await expect(
  179 |     loginPage.forgotPasswordLink
  180 |   ).toBeVisible();
  181 | });
  182 | 
  183 | test('@sanity OrangeHRM Logo Visible',
  184 |   async ({ loginPage }) => {
  185 | 
  186 |   await loginPage.gotoLoginPage();
  187 | 
  188 |   await expect(
  189 |     loginPage.orangeHRMLogo
  190 |   ).toBeVisible();
  191 | });
  192 | 
  193 | });
```
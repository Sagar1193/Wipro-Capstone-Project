# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.spec.js >> Authentication Tests >> @sanity Login Button Visible
- Location: tests\auth\login.spec.js:143:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Login' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: 'Login' })

```

# Test source

```ts
  50  | 
  51  |     await loginPage.login(
  52  |       '',
  53  |       'admin123'
  54  |     );
  55  | 
  56  |     await expect(
  57  |       loginPage.requiredFieldError
  58  |     ).toBeVisible();
  59  |   });
  60  | 
  61  |   test('@regression Empty Password',
  62  |     async ({ loginPage }) => {
  63  | 
  64  |     await loginPage.gotoLoginPage();
  65  | 
  66  |     await loginPage.login(
  67  |       'Admin',
  68  |       ''
  69  |     );
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
> 150 |   ).toBeVisible();
      |     ^ Error: expect(locator).toBeVisible() failed
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
  170 |   ).toBeVisible();
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
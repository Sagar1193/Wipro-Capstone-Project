# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\api.spec.js >> API Mocking Tests >> Intercept PIM Employee API
- Location: tests\api\api.spec.js:131:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-userdropdown-name')
Expected: visible
Timeout: 30000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for locator('.oxd-userdropdown-name')
    - waiting for navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"

```

# Test source

```ts
  10  |       page.locator('input[name="username"]');
  11  | 
  12  |     this.passwordInput =
  13  |       page.locator('input[name="password"]');
  14  | 
  15  |     this.loginButton =
  16  |       page.getByRole('button', {
  17  |         name: 'Login'
  18  |       });
  19  | 
  20  |     this.dashboardHeader =
  21  |       page.locator('.oxd-topbar-header-title');
  22  | 
  23  |     this.credentialText =
  24  |       page.locator(
  25  |         '.orangehrm-demo-credentials p'
  26  |       );
  27  | 
  28  |     this.invalidCredentialsError =
  29  |       page.locator(
  30  |         '.oxd-alert-content-text'
  31  |       );
  32  | 
  33  |     this.requiredFieldError =
  34  |       page.locator(
  35  |         '.oxd-input-field-error-message'
  36  |       ).first();
  37  |   }
  38  | 
  39  |   async gotoLoginPage() {
  40  | 
  41  |     await this.navigate('/');
  42  | 
  43  |     await this.page.waitForLoadState(
  44  |       'domcontentloaded'
  45  |     );
  46  |   }
  47  | 
  48  |   async getCredentials() {
  49  | 
  50  |     const texts =
  51  |       await this.credentialText
  52  |         .allTextContents();
  53  | 
  54  |     const username =
  55  |       texts[0]
  56  |         .replace('Username :', '')
  57  |         .trim();
  58  | 
  59  |     const password =
  60  |       texts[1]
  61  |         .replace('Password :', '')
  62  |         .trim();
  63  | 
  64  |     return {
  65  |       username,
  66  |       password
  67  |     };
  68  |   }
  69  | 
  70  |   async login(
  71  |     username = process.env.APP_USERNAME,
  72  |     password = process.env.APP_PASSWORD
  73  |   ) {
  74  |     
  75  |     await this.usernameInput.waitFor({
  76  |       state: 'visible',
  77  |       timeout: 30000
  78  |     });
  79  | 
  80  |     await this.usernameInput.clear();
  81  | 
  82  |     await this.passwordInput.clear();
  83  | 
  84  |     await this.usernameInput.fill(
  85  |       username
  86  |     );
  87  | 
  88  |     await this.passwordInput.fill(
  89  |       password
  90  |     );
  91  | 
  92  |     await this.loginButton.click();
  93  | 
  94  |     await this.page.waitForLoadState(
  95  |       'domcontentloaded'
  96  |     );
  97  | 
  98  |     console.log(
  99  |       'Current URL:',
  100 |       await this.page.url()
  101 |     );
  102 |   }
  103 | 
  104 |   async verifySuccessfulLogin() {
  105 | 
  106 |     await expect(
  107 |       this.page.locator(
  108 |         '.oxd-userdropdown-name'
  109 |       )
> 110 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  111 |       timeout: 30000
  112 |     });
  113 |   }
  114 | }
  115 | 
  116 | module.exports = { LoginPage };
```
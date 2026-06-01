# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual\dashboardVisual.spec.js >> Visual Regression Tests >> Dashboard Visual Validation
- Location: tests\visual\dashboardVisual.spec.js:6:3

# Error details

```
TimeoutError: page.goto: Timeout 15000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "load"

```

# Test source

```ts
  1  | class BasePage {
  2  | 
  3  |   constructor(page) {
  4  |     this.page = page;
  5  |   }
  6  | 
  7  |   async navigate(path = '') {
> 8  |     await this.page.goto(path);
     |                     ^ TimeoutError: page.goto: Timeout 15000ms exceeded.
  9  |   }
  10 | 
  11 |   async wait(milliseconds) {
  12 |     await this.page.waitForTimeout(milliseconds);
  13 |   }
  14 | 
  15 |   async getPageTitle() {
  16 |     return await this.page.title();
  17 |   }
  18 | }
  19 | 
  20 | module.exports = { BasePage };
```
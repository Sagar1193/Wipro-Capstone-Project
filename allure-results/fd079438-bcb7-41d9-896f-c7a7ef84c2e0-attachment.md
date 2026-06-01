# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.spec.js >> Authentication Tests >> @regression Password With Spaces
- Location: tests\auth\login.spec.js:119:3

# Error details

```
Error: page.goto: net::ERR_ABORTED at https://opensource-demo.orangehrmlive.com/
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "domcontentloaded"

```

```
Error: apiRequestContext._wrapApiCall: Target page, context or browser has been closed
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leave\leave.spec.js >> Leave Module Tests >> Verify Apply Leave Page
- Location: tests\leave\leave.spec.js:53:3

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Leave' })
    - locator resolved to <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/leave/viewLeaveModule">…</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action
    - click action done
    - waiting for scheduled navigations to finish

```

# Test source

```ts
  1   | const { expect } = require('@playwright/test');
  2   | 
  3   | class LeavePage {
  4   | 
  5   |   constructor(page) {
  6   | 
  7   |     this.page = page;
  8   | 
  9   |     this.leaveMenu =
  10  |       page.getByRole('link', {
  11  |         name: 'Leave'
  12  |       });
  13  | 
  14  |     this.applyButton =
  15  |       page.getByRole('link', {
  16  |         name: 'Apply'
  17  |       });
  18  | 
  19  |     this.leaveListButton =
  20  |       page.getByRole('link', {
  21  |         name: 'Leave List'
  22  |       });
  23  | 
  24  |     this.searchButton =
  25  |       page.getByRole('button', {
  26  |         name: 'Search'
  27  |       });
  28  | 
  29  |     this.resetButton =
  30  |       page.getByRole('button', {
  31  |         name: 'Reset'
  32  |       });
  33  | 
  34  |     this.applyMenu =
  35  |         page.getByRole('link', {
  36  |             name: 'Apply'
  37  |         });
  38  | 
  39  |         this.leaveListMenu =
  40  |         page.getByRole('link', {
  41  |             name: 'Leave List'
  42  |         });
  43  | 
  44  |         this.assignLeaveMenu =
  45  |         page.getByRole('link', {
  46  |             name: 'Assign Leave'
  47  |         });
  48  | 
  49  |         this.entitlementsMenu =
  50  |         page.getByRole('link', {
  51  |             name: 'Entitlements'
  52  |         });
  53  | 
  54  |         this.myLeaveMenu =
  55  |         page.getByRole('link', {
  56  |             name: 'My Leave'
  57  |         });
  58  |   }
  59  | 
  60  |   async navigateToLeave() {
> 61  |     await this.leaveMenu.click();
      |                          ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  62  |   }
  63  | 
  64  |   async verifyLeavePageLoaded() {
  65  |     await expect(
  66  |       this.searchButton
  67  |     ).toBeVisible();
  68  |   }
  69  | 
  70  |   async verifyResetButtonVisible() {
  71  |     await expect(
  72  |       this.resetButton
  73  |     ).toBeVisible();
  74  |   }
  75  | 
  76  |   async verifySearchButtonVisible() {
  77  |     await expect(
  78  |       this.searchButton
  79  |     ).toBeVisible();
  80  |   }
  81  | 
  82  |   async verifyApplyLeavePage() {
  83  | 
  84  |   await this.applyMenu.click();
  85  | 
  86  |         await expect(
  87  |             this.page
  88  |             .getByRole('heading')
  89  |             .first()
  90  |         ).toBeVisible();
  91  |         }
  92  | 
  93  |         async verifyLeaveListPage() {
  94  | 
  95  |         await this.leaveListMenu.click();
  96  | 
  97  |         await expect(
  98  |             this.searchButton
  99  |         ).toBeVisible();
  100 |         }
  101 | 
  102 |         async verifyAssignLeavePage() {
  103 | 
  104 |         await this.assignLeaveMenu.click();
  105 | 
  106 |         await expect(
  107 |             this.page
  108 |             .getByRole('heading')
  109 |             .first()
  110 |         ).toBeVisible();
  111 |         }
  112 | 
  113 |         async verifyEntitlementsPage() {
  114 | 
  115 |         //await this.page.getByText('Entitlements').first().click();
  116 |         await this.page.locator('.oxd-topbar-body-nav-tab').filter({
  117 |             hasText: 'Entitlements'
  118 |           }).click();
  119 | 
  120 |         await expect(
  121 |             this.page
  122 |             .locator('body')
  123 |         ).toBeVisible();
  124 |         }
  125 | 
  126 |         async verifyMyLeavePage() {
  127 | 
  128 |         await this.myLeaveMenu.click();
  129 | 
  130 |         await expect(
  131 |             this.searchButton
  132 |         ).toBeVisible();
  133 |     }
  134 | }
  135 | 
  136 | module.exports = { LeavePage };
```
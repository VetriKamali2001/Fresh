# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Integration: Login UI triggers API and returns 200
- Location: tests\login.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#user-name')

```

# Test source

```ts
  1  | // tests/integration/login.integration.spec.ts
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | test('Integration: Login UI triggers API and returns 200', async ({ page }) => {
  5  |   await page.goto('/https://www.saucedemo.com/');
  6  | 
> 7  |   await page.fill('#user-name', 'standard_user');
     |              ^ Error: page.fill: Test timeout of 30000ms exceeded.
  8  |   await page.fill('#password', 'secret_sauce');
  9  | 
  10 |   // Capture API response
  11 |   const responsePromise = page.waitForResponse(res =>
  12 |     res.url().includes('/api/login') && res.request().method() === 'POST'
  13 |   );
  14 | 
  15 |   await page.click('button[type="submit"]');
  16 | 
  17 |   const response = await responsePromise;
  18 | 
  19 |   // Validate API + UI together
  20 |   expect(response.status()).toBe(200);
  21 |   await expect(page).toHaveURL('/dashboard');
  22 | });
```
const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');
  // Click [data-test="username"]
  await page.click('[data-test="username"]');
  // Fill [data-test="username"]
  await page.fill('[data-test="username"]', 'standard_user');
  // Press Tab
  await page.press('[data-test="username"]', 'Tab');
  // Fill [data-test="password"]
  await page.fill('[data-test="password"]', 'secret_sauce');
  // Press Enter
  await page.press('[data-test="password"]', 'Enter');
  expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
  // Click [data-test="add-to-cart-sauce-labs-onesie"]
  await page.click('[data-test="add-to-cart-sauce-labs-onesie"]');
  // Click [data-test="add-to-cart-sauce-labs-bike-light"]
  await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
  // Click a:has-text("2")
  await page.click('a:has-text("2")');
  expect(page.url()).toBe('https://www.saucedemo.com/cart.html');
  // Click [data-test="checkout"]
  await page.click('[data-test="checkout"]');
  expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html');
  // Click [data-test="firstName"]
  await page.click('[data-test="firstName"]');
  // Fill [data-test="firstName"]
  await page.fill('[data-test="firstName"]', 'Pavan');
  // Press Tab
  await page.press('[data-test="firstName"]', 'Tab');
  // Fill [data-test="lastName"]
  await page.fill('[data-test="lastName"]', 'Mudigonda');
  // Press Tab
  await page.press('[data-test="lastName"]', 'Tab');
  // Fill [data-test="postalCode"]
  await page.fill('[data-test="postalCode"]', 'M4S0A7');
  // Click [data-test="continue"]
  await page.click('[data-test="continue"]');
  expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-two.html');
  // Click [data-test="finish"]
  await page.click('[data-test="finish"]');
  expect(page.url()).toBe('https://www.saucedemo.com/checkout-complete.html');
  // Click text=Your order has been dispatched, and will arrive just as fast as the pony can get
  await page.click('text=Your order has been dispatched, and will arrive just as fast as the pony can get');
});

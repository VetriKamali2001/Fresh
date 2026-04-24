import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {BASE_URL,USERNAME,PASSWORD} from '../Utils/envconfig';

test('Welcome to the Login page',async ({page}) => {
   const loginPage = new LoginPage(page);
   await page.goto(BASE_URL);
   await loginPage.login(USERNAME,PASSWORD);
   // await page.locator('input[name="username"]').fill('standard_user');
   // await page.locator('input[name="password"]').fill('secret_sauce');
   // await page.locator('button[type="submit"]').click();
   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html"); 
   




}) 
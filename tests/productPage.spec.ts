import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'; 
import { ProductPage } from '../pages/ProductPage'; 
import {BASE_URL,USERNAME,PASSWORD} from '../Utils/envconfig';
import { LoginLocators } from '../Locators/LoginLocators';
import { ProductPageLocators } from '../Locators/ProductPageLocators';

test.describe('Go to product product page',()=>{
  let loginPage:LoginPage
  let productPage : ProductPage

  test.beforeEach(async({page})=>{
     loginPage = new LoginPage(page);
     productPage = new ProductPage(page);

    await page.goto(BASE_URL);
    await loginPage.login(USERNAME,PASSWORD);
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html"); 
  })
 test('product page',async({page})=>{
   await productPage.logout();
   await expect (page.locator(LoginLocators.loginbutton)).toBeVisible();
 })

 test('Validate navigation',async({page})=>{
  await productPage.openAboutPage();
   await (page.locator(ProductPageLocators.settingIcon));

     await (page.locator(ProductPageLocators.aboutlink));

     await (page.locator(ProductPageLocators.signup));
   
  })
       
 
})
  

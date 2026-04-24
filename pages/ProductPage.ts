import {Page} from '@playwright/test';
import {ProductPageLocators} from '../Locators/ProductPageLocators';
import {PASSWORD, USERNAME} from '../Utils/envconfig';

export class ProductPage {
    constructor(private page : Page){
    }
    async logout(){
         await this.page.click(ProductPageLocators.settingIcon);
         await this.page.click(ProductPageLocators.logoutlink);
    }
    async openAboutPage(){
               await this.page.click(ProductPageLocators.settingIcon);

         await this.page.click(ProductPageLocators.aboutlink);

    await this.page.click(ProductPageLocators.signup);

    }
}
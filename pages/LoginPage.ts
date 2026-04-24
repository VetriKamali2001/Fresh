import {Page} from '@playwright/test';
import {LoginLocators} from '../Locators/LoginLocators';
import { PASSWORD, USERNAME } from '../Utils/envconfig';

export class LoginPage {
    constructor(private page : Page){
    }
    async login(username:string,password:string){
        await this.page.fill(LoginLocators.userNameInput,USERNAME);
        await this.page.fill(LoginLocators.passwordInput,PASSWORD);
        await this.page.click(LoginLocators.loginbutton);
    }
}   
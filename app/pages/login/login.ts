import {Page, NavController, MenuController} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from './../../directives/global.helpers';
import {MainMenuContentPage} from './../main/main';

@Page({
  templateUrl: './build/pages/login/login.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class LoginPage {
    constructor(private nav: NavController, private menu: MenuController) {
    }

    openMainPage() {
      this.nav.push(MainMenuContentPage);
    }
}

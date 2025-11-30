import BasePage from "./base.page.js";

export default class LoginPage extends BasePage {
  constructor() {
    super();
  }

  get title() {
    return browser.$('//h1[text()="Login"]');
  }

  get inputEmail() {
    return browser.$("#email");
  }

  get inputPassword() {
    return browser.$("#password");
  }

  get buttonLogin() {
    return browser.$("button#loginButton");
  }

  get linkForgotPassword() {
    return browser.$(".primary-link.forgot-pw");
  }

  get checkboxLabelRememberMe() {
    return browser.$('[for="rememberMe-input"]');
  }

  get linkRegister() {
    return browser.$('[routerlink="/register"]');
  }

  get linkForgotPassword() {
    return browser.$("a.forgot-pw");
  }

  async waitForLoad() {
    await this.title.waitForDisplayed();
    await this.inputEmail.waitForDisplayed();
    await this.inputPassword.waitForDisplayed();
    await this.linkForgotPassword.waitForDisplayed();
    await this.checkboxLabelRememberMe.waitForDisplayed();
    await this.linkRegister.waitForDisplayed();
  }
}

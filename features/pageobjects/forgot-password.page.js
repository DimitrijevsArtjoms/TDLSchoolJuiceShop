import BasePage from "./base.page.js";

export default class ForgotPasswordPage extends BasePage {
  constructor() {
    super();
  }

  get title() {
    return browser.$('//h1[text()="Forgot Password"]');
  }

  get emailField() {
    return browser.$("#email");
  }

  get securityQuestionField() {
    return browser.$("#securityAnswer");
  }

  get securityQuestionText() {
    return $("#securityAnswer").getAttribute("placeholder");
  }

  get newPasswordField() {
    return browser.$("#newPassword");
  }

  get newPasswordRepeatField() {
    return browser.$("#newPasswordRepeat");
  }

  get changeButton() {
    return browser.$(`//button[@id="resetButton"]//span[contains(@class,"mdc-button__label")]`);
  }

  get successfullyChangedText() {
    return browser.$(".confirmation");
  }

  async waitForLoad() {
    await this.title.waitForDisplayed();
  }
}

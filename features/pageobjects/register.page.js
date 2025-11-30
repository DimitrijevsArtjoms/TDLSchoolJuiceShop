import BasePage from "./base.page.js";

export default class RegisterPage extends BasePage {
  constructor() {
    super();
  }

  get title() {
    return browser.$('//h1[text()="User Registration"]');
  }

  get inputEmail() {
    return browser.$("#emailControl");
  }

  get inputPassword() {
    return browser.$("#passwordControl");
  }

  get inputPasswordConfirm() {
    return browser.$("#repeatPasswordControl");
  }

  get switchShowPasswordAdvice() {
    return browser.$("span.mdc-switch__track");
  }

  get selectSecurityQuestion() {
    return browser.$('[name="securityQuestion"]');
  }

  async securityQuestionOption(option) {
    return browser.$(`//span[@class="mdc-list-item__primary-text"][normalize-space(text()) = "${option}"]`);
  }

  get inputAnswer() {
    return browser.$("#securityAnswerControl");
  }

  get registerButton() {
    return browser.$("button#registerButton");
  }

  get linkLogin() {
    return browser.$('[routerlink="/login"]');
  }

  get uniqueEmailErrorLabel() {
    return browser.$(`//div[@class='error' and text()='Email must be unique']`);
  }

  async waitForLoad() {
    await this.title.waitForDisplayed();
  }
}

import BasePage from "../pageobjects/base.page.js";
import LoginPage from "../pageobjects/login.page.js";
import RegisterPage from "../pageobjects/register.page.js";
import ForgotPasswordPage from "../pageobjects/forgot-password.page.js";
import SavedPaymentOptionsPage from "../pageobjects/saved-payment-options.page.js";

export default class Pages {
  constructor() {
    this.basePage = new BasePage();
    this.loginPage = this["Login"] = this["login"] = new LoginPage();
    this.registerPage = this["Register"] = this["register"] = new RegisterPage();
    this.forgotPasswordPage = this["Forgot-password"] = this["forgot-password"] = new ForgotPasswordPage();
    this.savedPaymentOptionsPage = this["My Payment options"] = this["My Payment options page"] = new SavedPaymentOptionsPage();
  }
}

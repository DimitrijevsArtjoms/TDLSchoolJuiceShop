export default class BasePage {
  constructor() {}

  get buttonAccount() {
    return browser.$("#navbarAccount");
  }

  get buttonLogin() {
    return browser.$("#navbarLoginButton");
  }

  get buttonLogout() {
    return browser.$("#navbarLogoutButton");
  }

  get buttonBasket() {
    return browser.$('[routerlink="/basket"]');
  }

  get buttonUserProfile() {
    return browser.$('//button[@aria-label="Go to user profile"]');
  }

  get buttonOrdersAndPayment() {
    return browser.$('//button[@aria-label="Show Orders and Payment Menu"]');
  }

  get buttonMyPaymentOptions() {
    return browser.$('//button[@aria-label="Go to saved payment methods page"]');
  }

  get buttonCloseWelcomeBanner() {
    return browser.$('[aria-label="Close Welcome Banner"]');
  }

  get buttonDismissCookies() {
    return browser.$('[aria-label="dismiss cookie message"]');
  }

  get snackBarLanguageChange() {
    return browser.$(".mat-mdc-snack-bar-label.mdc-snackbar__label");
  }
}

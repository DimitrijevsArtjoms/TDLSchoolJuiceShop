import { Then } from "@wdio/cucumber-framework";

Then(/^I open landing page$/, async function () {
  await browser.url("");
  await this.pages.basePage.buttonCloseWelcomeBanner.waitForDisplayed();
  await this.pages.basePage.buttonCloseWelcomeBanner.click();
  await this.pages.basePage.buttonDismissCookies.waitForDisplayed();
  await this.pages.basePage.buttonDismissCookies.click();
  await this.pages.basePage.snackBarLanguageChange.waitForExist({ reverse: true });
});

Then(/^I am on "?(.+?)"? page$/, async function (page) {
  const newPage = page.replace(/"/g, "");
  const pageObject = this.pages[newPage];
  await pageObject.waitForLoad();
});

Then(/^I press on Account button$/, async function () {
  await this.pages.basePage.buttonAccount.waitForDisplayed();
  await this.pages.basePage.buttonAccount.click();
});

Then(/^I press log in$/, async function () {
  await this.pages.basePage.buttonLogin.waitForDisplayed();
  await this.pages.basePage.buttonLogin.click();
});

Then(/^I press not yet a customer$/, async function () {
  await this.pages.loginPage.linkRegister.waitForDisplayed();
  await this.pages.loginPage.linkRegister.click();
});

Then(/^I press 'forgot password'$/, async function () {
  await this.pages.loginPage.linkForgotPassword.waitForDisplayed();
  await this.pages.loginPage.linkForgotPassword.click();
});

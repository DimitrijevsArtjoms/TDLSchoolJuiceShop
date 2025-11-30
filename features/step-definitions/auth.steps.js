import { Then } from "@wdio/cucumber-framework";
import { Given } from "@wdio/cucumber-framework";
import User from "../support/User.js";

Given("I have registered account", async function () {
  this.user = new User();
  const { email, password, secQuestionOption, securityAnswer } = this.user;
  if (!email || !password || !secQuestionOption || !securityAnswer) {
    throw new Error();
  }
});

Given("I have logged out", async function () {
  await browser.url("");

  try {
    if (await this.pages.basePage.buttonCloseWelcomeBanner.isDisplayed()) {
      await this.pages.basePage.buttonCloseWelcomeBanner.click();
    }
  } catch (e) {}

  try {
    if (await this.pages.basePage.buttonDismissCookies.isDisplayed()) {
      await this.pages.basePage.buttonDismissCookies.click();
    }
  } catch (e) {}

  const basketButtonVisible = await this.pages.basePage.buttonBasket.isDisplayed();
  if (basketButtonVisible) {
    await this.pages.basePage.buttonAccount.isDisplayed();
    await this.pages.basePage.buttonAccount.click();
    await this.pages.basePage.buttonLogout.isDisplayed();
    await this.pages.basePage.buttonLogout.click();
  }
});

import { Then } from "@wdio/cucumber-framework";

Then(/^I enter email address$/, async function () {
  await this.pages.registerPage.inputEmail.waitForDisplayed();
  const email = this.user.email;
  await this.pages.registerPage.inputEmail.setValue(email);
});

Then(/^I enter password$/, async function () {
  await this.pages.registerPage.inputPassword.waitForDisplayed();
  const password = this.user.password;
  await this.pages.registerPage.inputPassword.setValue(password);
});

Then(/^I enter password repeatedly$/, async function () {
  await this.pages.registerPage.inputPasswordConfirm.waitForDisplayed();
  await this.pages.registerPage.inputPasswordConfirm.setValue(this.user.password);
});

Then(/^I select security question about elder sibling$/, async function () {
  await this.pages.registerPage.selectSecurityQuestion.waitForDisplayed();
  await this.pages.registerPage.selectSecurityQuestion.click();
  this.user.secQuestionOption = this.user.secQuestionOption || "Your eldest siblings middle name?";
  const element = await this.pages.registerPage.securityQuestionOption(this.user.secQuestionOption);
  await element.waitForDisplayed();
  await element.click();
});

Then(/^I enter answer$/, async function () {
  await this.pages.registerPage.inputAnswer.waitForDisplayed();
  await this.pages.registerPage.inputAnswer.setValue(this.user.securityAnswer);
});

Then(/^I press register button$/, async function () {
  await this.pages.registerPage.registerButton.waitForDisplayed();
  await this.pages.registerPage.registerButton.click();
});

Then(/^I see message about email must be unique$/, async function () {
  await this.pages.registerPage.uniqueEmailErrorLabel.waitForDisplayed();
});

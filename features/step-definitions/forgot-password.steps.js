import { Then } from "@wdio/cucumber-framework";

Then(/^I enter email in forgot email page$/, async function () {
  await this.pages.forgotPasswordPage.emailField.waitForDisplayed();
  await this.pages.forgotPasswordPage.emailField.setValue(this.user.email);
});

Then(/^I click on security question field$/, async function () {
  await this.pages.forgotPasswordPage.securityQuestionField.waitForDisplayed();
  await this.pages.forgotPasswordPage.securityQuestionField.click();
});

Then(/^I see security question$/, async function () {
  await browser.waitUntil(async () => (await this.pages.forgotPasswordPage.securityQuestionField.getAttribute("placeholder"))?.includes(this.user.secQuestionOption), {
    timeout: 3000,
    interval: 100,
  });
});

Then(/^I enter security question$/, async function () {
  await this.pages.forgotPasswordPage.securityQuestionField.waitForDisplayed();
  await this.pages.forgotPasswordPage.securityQuestionField.setValue(this.user.securityAnswer);
});

Then(/^I enter new password and confirm$/, async function () {
  // use current password as "new" to avoid losing access to manually created account, but for test scenario it is enough
  const newPassword = this.user.password;
  await this.pages.forgotPasswordPage.newPasswordField.waitForDisplayed();
  await this.pages.forgotPasswordPage.newPasswordField.setValue(newPassword);
  await this.pages.forgotPasswordPage.newPasswordRepeatField.waitForDisplayed();
  await this.pages.forgotPasswordPage.newPasswordRepeatField.setValue(newPassword);
  await this.pages.forgotPasswordPage.changeButton.waitForDisplayed();
  await this.pages.forgotPasswordPage.changeButton.click();
});

Then(/^I see message about successfully changed password$/, async function () {
  await this.pages.forgotPasswordPage.successfullyChangedText.waitForDisplayed();
});

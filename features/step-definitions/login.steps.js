import { Then } from "@wdio/cucumber-framework";
import { faker } from "@faker-js/faker";

Then(/^I enter login email$/, async function () {
  await this.pages.loginPage.inputEmail.waitForDisplayed();
  await this.pages.loginPage.inputEmail.setValue(this.user.email);
});

Then(/^I enter login password$/, async function () {
  await this.pages.loginPage.inputPassword.waitForDisplayed();
  await this.pages.loginPage.inputPassword.setValue(this.user.password);
});

Then(/^I confirm login$/, async function () {
  await this.pages.loginPage.buttonLogin.waitForDisplayed();
  await this.pages.loginPage.buttonLogin.click();
});

Then(/^I am logged in$/, async function () {
  await this.pages.basePage.buttonBasket.waitForDisplayed();
});

Then(/^I have logged in$/, async function () {
  await this.pages.basePage.buttonAccount.waitForDisplayed();
  await this.pages.basePage.buttonAccount.click();
  await this.pages.basePage.buttonLogin.waitForDisplayed();
  await this.pages.basePage.buttonLogin.click();
  await this.pages.loginPage.inputEmail.waitForDisplayed();
  await this.pages.loginPage.inputEmail.setValue(this.user.email);
  await this.pages.loginPage.inputPassword.waitForDisplayed();
  await this.pages.loginPage.inputPassword.setValue(this.user.password);
  await this.pages.loginPage.buttonLogin.waitForDisplayed();
  await this.pages.loginPage.buttonLogin.click();
  await this.pages.basePage.buttonBasket.waitForDisplayed();
});

Then(/^I see Go to profile button contains login email$/, async function () {
  const element = await this.pages.basePage.buttonUserProfile;
  await element.waitForDisplayed();
  await expect(element).toHaveText(expect.stringContaining(this.user.email));
});

Then(/^I have logged with a new user$/, async function () {
  await this.pages.basePage.buttonAccount.click();
  await this.pages.basePage.buttonLogin.click();
  await this.pages.loginPage.waitForLoad();
  await this.pages.loginPage.linkRegister.click();
  await this.pages.registerPage.waitForLoad();

  await this.pages.registerPage.inputEmail.waitForDisplayed();
  this.user.email = faker.internet.email();
  await this.pages.registerPage.inputEmail.setValue(this.user.email);

  await this.pages.registerPage.inputPassword.waitForDisplayed();
  this.user.password = faker.internet.password();
  await this.pages.registerPage.inputPassword.setValue(this.user.password);

  await this.pages.registerPage.inputPasswordConfirm.waitForDisplayed();
  await this.pages.registerPage.inputPasswordConfirm.setValue(this.user.password);

  await this.pages.registerPage.selectSecurityQuestion.waitForDisplayed();
  await this.pages.registerPage.selectSecurityQuestion.click();
  this.user.secQuestionOption = "Your eldest siblings middle name?";
  const element = await this.pages.registerPage.securityQuestionOption(this.user.secQuestionOption);
  await element.waitForDisplayed();
  await element.click();

  await this.pages.registerPage.inputAnswer.waitForDisplayed();
  this.user.securityAnswer = faker.person.middleName();
  await this.pages.registerPage.inputAnswer.setValue(this.user.securityAnswer);

  await this.pages.registerPage.registerButton.waitForDisplayed();
  await this.pages.registerPage.registerButton.click();

  await this.pages.loginPage.waitForLoad();
  await this.pages.loginPage.inputEmail.waitForDisplayed();
  await this.pages.loginPage.inputEmail.setValue(this.user.email);
  await this.pages.loginPage.inputPassword.waitForDisplayed();
  await this.pages.loginPage.inputPassword.setValue(this.user.password);
  await this.pages.loginPage.buttonLogin.waitForDisplayed();
  await this.pages.loginPage.buttonLogin.click();
  await this.pages.basePage.buttonBasket.waitForDisplayed();
});

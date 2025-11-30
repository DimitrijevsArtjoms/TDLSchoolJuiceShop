import { Then } from "@wdio/cucumber-framework";

Then(/^I press on Orders and Payments$/, async function () {
  await this.pages.basePage.buttonOrdersAndPayment.waitForDisplayed();
  await this.pages.basePage.buttonOrdersAndPayment.click();
});

Then(/^I press My Payment options$/, async function () {
  await this.pages.basePage.buttonMyPaymentOptions.waitForDisplayed();
  await this.pages.basePage.buttonMyPaymentOptions.click();
});

Then(/^I press add new card$/, async function () {
  const addNewCard = this.pages.savedPaymentOptionsPage.dropDownAddNewCard;
  await addNewCard.waitForDisplayed();
  await addNewCard.click();
});

Then(/^fill in card details$/, async function (dataTable) {
  for (const { Name: name, "Card Number": cardNumber, "Expiry Month": expiryMonth, "Expiry year": expiryYear } of dataTable.hashes()) {
    await this.pages.savedPaymentOptionsPage.fillInCardDetails({
      name,
      cardNumber,
      expiryMonth,
      expiryYear,
    });
  }
});

Then(/^I submit new card details$/, async function () {
  await this.pages.savedPaymentOptionsPage.submitButton.waitForDisplayed();
  await this.pages.savedPaymentOptionsPage.submitButton.click();
});

Then(/^I see added card$/, async function (dataTable) {
  for (const [name, hiddenCardNumber, expiryDate] of dataTable.raw()) {
    const cardDetails = await this.pages.savedPaymentOptionsPage.cardDetails({ name, hiddenCardNumber, expiryDate });
    await cardDetails.waitForDisplayed();
  }
});

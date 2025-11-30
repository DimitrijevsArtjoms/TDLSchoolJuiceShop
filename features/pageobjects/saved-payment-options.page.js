import BasePage from "./base.page.js";

export default class SavedPaymentOptionsPage extends BasePage {
  constructor() {
    super();
  }

  get dropDownAddNewCard() {
    return browser.$('//mat-panel-title[contains(text(),"Add new card")]');
  }

  get title() {
    return browser.$(`//h1[contains(text(),"My Payment Options")]`);
  }

  get nameInput() {
    return browser.$(`//mat-form-field[.//mat-label[normalize-space()='Name'] or .//*[normalize-space()='Name*']]//input`);
  }
  get cardNumberInput() {
    return browser.$(`//mat-form-field[.//mat-label[normalize-space()='Card Number'] or .//*[normalize-space()='Card Number*']]//input`);
  }

  get expiryMonthInput() {
    return browser.$(`//mat-form-field[.//*[normalize-space()='Expiry Month*'] or .//mat-label[normalize-space()='Expiry Month']]//select`);
  }

  get expiryYearInput() {
    return browser.$(`//mat-form-field[.//*[normalize-space()='Expiry Year*'] or .//mat-label[normalize-space()='Expiry Year']]//select`);
  }

  get submitButton() {
    return browser.$("#submitButton");
  }

  cardDetails({ name, hiddenCardNumber, expiryDate }) {
    return browser.$(
      `//mat-row[.//mat-cell[contains(normalize-space(), "${hiddenCardNumber}")]][.//mat-cell[contains(normalize-space(), "${name}")]][.//mat-cell[contains(normalize-space(), "${expiryDate}")]]`
    );
  }

  async fillInCardDetails({ name, cardNumber, expiryMonth, expiryYear }) {
    await this.nameInput.waitForDisplayed();
    await this.nameInput.setValue(name);

    await this.cardNumberInput.waitForDisplayed();
    await this.cardNumberInput.setValue(cardNumber);

    await this.expiryMonthInput.waitForDisplayed();
    await this.expiryMonthInput.selectByAttribute("value", expiryMonth);

    await this.expiryYearInput.waitForDisplayed();
    await this.expiryYearInput.selectByAttribute("value", expiryYear);
  }

  async waitForLoad() {
    await this.title.waitForDisplayed();
    await this.dropDownAddNewCard.waitForDisplayed();
  }
}

const FIRST_NAME_FIELD = 'input[name="firstName"]';
const LAST_NAME_FIELD = 'input[name="lastName"]';
const ADDRESS_LINE_1_FIELD = 'input[name="line1"]';
const PINCODE_FIELD = 'input[name="postalCode"]';
const CITY_FIELD = 'input[name="city"]';
const STATE_FIELD = 'input[name="state"]';
const EMAIL_FIELD = 'input[name="email"]';
const MOBILE_NUMBER_FIELD = 'input[name="phone"]';
const ERROR_MESSAGE = '.input-error-msg';
const ERROR_MESSAGE_CONTENT = 'This is a required field.';

export default class CheckoutPage {
  clickOnFirstNameField() {
    cy.get(FIRST_NAME_FIELD).click();
    cy.get(ERROR_MESSAGE).should();
  }
}

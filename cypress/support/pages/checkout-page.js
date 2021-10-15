const FIRST_NAME_FIELD = 'input[name="firstName"]';
const LAST_NAME_FIELD = 'input[name="lastName"]';
const ADDRESS_LINE_1_FIELD = 'input[name="line1"]';
const PINCODE_FIELD = 'input[name="postalCode"]';
const CITY_FIELD = 'input[name="city"]';
const STATE_FIELD = 'input[name="state"]';
const EMAIL_FIELD = 'input[name="email"]';
const MOBILE_NUMBER_FIELD = 'input[name="phone"]';
const LANDMARK_FIELD = 'input[name="landmark"]';
const ERROR_MESSAGE = '.input-error-msg';
const ERROR_MESSAGE_CONTENT = 'This is a required field.';

import chechoutDetails from '../../fixtures/checkout-details.json';

export default class CheckoutPage {
  clickOnFirstNameField() {
    cy.get(FIRST_NAME_FIELD).click();
  }
  clickOnLastNameField() {
    cy.get(LAST_NAME_FIELD).click();
  }
  clickOnAddressLineField() {
    cy.get(ADDRESS_LINE_1_FIELD).click();
  }
  clickOnPinCodeField() {
    cy.get(PINCODE_FIELD).click();
  }
  clickOnMobileNumberField() {
    cy.get(MOBILE_NUMBER_FIELD).click();
  }
  clickOnEmailField() {
    cy.get(EMAIL_FIELD).click();
  }
  clickOnLandmarkField() {
    cy.get(LANDMARK_FIELD).click();
  }
  checkErrorMessage() {
    cy.get(ERROR_MESSAGE).should('be.visible');
    cy.contains(ERROR_MESSAGE_CONTENT).should('be.visible');
  }
  fillCheckOutForm() {
    cy.get(FIRST_NAME_FIELD).type(chechoutDetails.firstName);
    cy.get(LAST_NAME_FIELD).type(chechoutDetails.lastName);
    cy.get(ADDRESS_LINE_1_FIELD).type(chechoutDetails.addressLine1);
    cy.get(PINCODE_FIELD).type(chechoutDetails.pinCode);
    cy.get(CITY_FIELD).should('be.disabled');
    cy.get(STATE_FIELD).should('be.disabled');
    cy.get(EMAIL_FIELD).type(chechoutDetails.email);
    cy.get(MOBILE_NUMBER_FIELD).type(chechoutDetails.mobile);
  }
  checkErrorMessagesAreNotShowing() {
    cy.get(ERROR_MESSAGE).should('not.be.visible');
  }
}

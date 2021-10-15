/// <reference types="cypress" />
import HomePage from '../support/pages/home-page';
import ProductPage from '../support/pages/product-page';
import CartPage from '../support/pages/cart-page';
import LoginPage from '../support/pages/login-page';
import CheckoutPage from '../support/pages/checkout-page';

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const loginPage = new LoginPage();
const checkoutPage = new CheckoutPage();
describe('To test adding product to cart and checkout process', () => {
  before(() => {
    cy.visit('/');
  });

  it('should select a mobile and configure it successfully', () => {
    homePage.selectMobile();
    productPage.assertProductIsShown();
    productPage.configureProductDetails();
    productPage.checkProductDetails();
  });

  it('should add product to cart successfully ', () => {
    productPage.clickOnAddToCartButton();
    cartPage.checkCartDetails();
    cartPage.checkPriceDetails();
    cartPage.clickOnPayButton();
    loginPage.clickOnContinueAsGuestButton();
  });

  it('should error messages when required fields are left empty in checkout form', () => {
    checkoutPage.clickOnFirstNameField();
    checkoutPage.clickOnLastNameField();
    checkoutPage.clickOnAddressLineField();
    checkoutPage.clickOnPinCodeField();
    checkoutPage.clickOnMobileNumberField();
    checkoutPage.clickOnEmailField();
    checkoutPage.clickOnLandmarkField();
    checkoutPage.checkErrorMessage();
  });
  it('should disappear all error messages when adding required information in checkout form', () => {
    checkoutPage.fillCheckOutForm();
    checkoutPage.checkErrorMessagesAreNotShowing();
  });
});

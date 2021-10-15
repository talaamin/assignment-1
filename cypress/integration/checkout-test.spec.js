/// <reference types="cypress" />
import HomePage from '../support/pages/home-page';
import ProductPage from '../support/pages/product-page';
import CartPage from '../support/pages/cart-page';
import LoginPage from '../support/pages/login-page';

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const loginPage = new LoginPage();
describe('To test the checkout process', () => {
  before(() => {
    cy.visit('/');
  });

  it('should select a mobile,configure it successfully', () => {
    homePage.selectMobile();
    productPage.assertProductIsShown();
    productPage.configureProductDetails();
    productPage.checkProductDetails();
  });

  it('should add product to cart successfully ', () => {
    productPage.clickOnAddToCartButton();
    cartPage.checkCartDetails();
    cartPage.checkPriceDetails();
  });
  it('should error messages when required fields are left empty in checkout', () => {
    cartPage.clickOnPayButton();
    loginPage.clickOnContinueAsGuestButton();
  });
  after(() => {
    cartPage.clearCart({ multiple: true });
  });
});

import productDetails from '../../fixtures/product-details.json';
const NAVIGATION_HEADER = '.pd-header-navigation__headline-text';
const OPTION_SELECTOR_MAIN_TEXT = '.pd-option-selector__main-text';
const OPTION_SELECTOR_TEXT = '.pd-option-selector__text';
const PRODUCT_SUMMARY_NAME = '.summary__product-name';
const PRODUCT_SUMMARY_OPTIONS = '.summary__select-option-wrap';
const ADD_TO_CART_BUTTON = 'a[an-la="buying tool:add to cart"]';
export default class ProductPage {
  // This function checks that the product page is loaded.
  assertProductIsShown() {
    cy.get(NAVIGATION_HEADER).should('be.visible').and('have.text', productDetails.productName);
  }

  // This function configures the product in terms of color and device type
  configureProductDetails() {
    cy.get(OPTION_SELECTOR_TEXT).contains(productDetails.chooseYourColor).click({ force: true });
    cy.interceptBuyPage();
    cy.get(OPTION_SELECTOR_MAIN_TEXT).contains(productDetails.chooseYourDevice).click({ force: true });
  }

  checkProductDetails() {
    cy.get(PRODUCT_SUMMARY_NAME).should('contain', productDetails.productName);
    cy.get(PRODUCT_SUMMARY_OPTIONS)
      .should('contain', productDetails.chooseYourConnectivity)
      .and('contain', productDetails.chooseYourDevice)
      .and('contain', productDetails.chooseYourRAM)
      .and('contain', productDetails.chooseYourColor);
  }
  clickOnAddToCartButton() {
    cy.get(ADD_TO_CART_BUTTON).click({ force: true });
  }
}

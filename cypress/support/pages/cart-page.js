import productDetails from '../../fixtures/product-details.json';
const TOTAL_PRICE_ROW = '.total-price-row';
const DELETE_PRODUCT_BUTTON = '.data-omni-remove';
const PAY_BUTTON = 'button[data-omni="basket:proceed to checkout"]';
export default class CartPage {
  // This function checks that the details for the selected product are added correctly in the cart.
  checkCartDetails() {
    cy.get('.p6-s-c-p-d-l-t')
      .last()
      .should('contain', productDetails.chooseYourConnectivity)
      .and('contain', productDetails.chooseYourRAM)
      .and('contain', productDetails.chooseYourColor);
  }
  // This function checks that the price of the total product is correct
  checkPriceDetails() {
    cy.get(TOTAL_PRICE_ROW).find('.os-price-value').should('contain', productDetails.totalPrice);
  }

  // This function clears the cart
  clearCart() {
    cy.get(DELETE_PRODUCT_BUTTON).click();
  }

  clickOnPayButton() {
    cy.get(PAY_BUTTON).click({ multiple: true, force: true });
  }
}

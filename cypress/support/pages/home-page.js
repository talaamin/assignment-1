const MOBILE_TAB_ITEM = 'button[an-la*="mobile:tab"]';
const GALAXY_F42_5G_CARD_TAB = 'a[an-la*="mobile:im:galaxy f42 5g:buy now"]';

export default class HomePage {
  // This function selects a mobile from "This Month's Picks" section.
  selectMobile() {
    cy.get(MOBILE_TAB_ITEM).click();
    cy.get(GALAXY_F42_5G_CARD_TAB).click();
  }
}

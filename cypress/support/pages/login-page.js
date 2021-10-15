const CONTINUE_AS_GUEST_BUTTON = 'button[data-omni="login_try:guest"]';
export default class LoginPage {
  clickOnContinueAsGuestButton() {
    cy.get(CONTINUE_AS_GUEST_BUTTON).click({ multiple: true });
  }
}

import { formAuthentication } from "../../pages/FormAuthentication";
import { LOCATORS } from "../../utils/locators";

const label = "label";
const button = "button";
const username="Username";
const password = "Password"
const login = "Login"
const invalidUser="InvalidUser"
const invalidPassword="InvalidPassword"

describe("Form Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(formAuthentication.NAMES.formAuthenticationLink).click();
  });

  it("Verify 'Login Page'", () => {
    cy.get(LOCATORS.example).should(
      "contain",
      formAuthentication.NAMES.formAuthenticationTitle
    );
    cy.url().should("contain", formAuthentication.NAMES.linkName);
    cy.get(formAuthentication.LOCATORS.row)
      .find(label)
      .should("contain", username);
    cy.get(formAuthentication.LOCATORS.row)
      .find(label)
      .should("contain", password);
    cy.get(formAuthentication.LOCATORS.row)
      .find(formAuthentication.LOCATORS.username)
      .should("be.visible");
    cy.get(formAuthentication.LOCATORS.row)
      .find(formAuthentication.LOCATORS.password)
      .should("be.visible");
    cy.get(formAuthentication.LOCATORS.row)
      .find(button)
      .should("be.visible")
      .and("contain", login);
  });
  it("Verify 'Login Function'", () => {
    cy.get(formAuthentication.LOCATORS.username).type(invalidUser);
    cy.get(formAuthentication.LOCATORS.password).type(invalidPassword);
    cy.get(formAuthentication.LOCATORS.clickButton).click();

    cy.get(formAuthentication.LOCATORS.flash)
      .should("contain", "Your username is invalid!")
      .and("be.visible");
    cy.get(formAuthentication.LOCATORS.username).type("tomsmith");
    cy.get(formAuthentication.LOCATORS.password).type("SuperSecretPassword!");
    cy.get(formAuthentication.LOCATORS.clickButton).click();

    cy.get(formAuthentication.LOCATORS.flash)
      .should("contain", "You logged into a secure area!")
      .and("be.visible");
    cy.get(LOCATORS.example).find(formAuthentication.LOCATORS.ahref).click();
    cy.get(formAuthentication.LOCATORS.flash).should(
      "contain",
      "You logged out of the secure area!"
    );
  });
});

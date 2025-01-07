import { abTestingPage } from "../../pages/ABTestingPage";
import { basePage } from "../../pages/BasePage";
import { LOCATORS } from "../../utils/locators";

describe("[A/B Testing]", () => {
  it("Verify 'A/B Testing' page", () => {
    cy.visit("/");
    cy.get(LOCATORS.heading).should("contain", basePage.NAMES.basePageTitle);
    cy.contains(abTestingPage.NAMES.ABtesting).click();
    cy.get(LOCATORS.content).find("h3").should("contain",abTestingPage.NAMES.ABTestTitle);
    cy.url().should("include", abTestingPage.NAMES.linkName);
  });
});

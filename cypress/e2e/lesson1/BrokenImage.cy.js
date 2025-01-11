const { basePage } = require("../../pages/BasePage");
const { brokenImagesPage } = require("../../pages/BrokenImages");
const { LOCATORS } = require("../../utils/locators");

describe("Broken Images", () => {
  it("Verify 'Broken Images' page", () => {
    cy.visit("/");
    cy.get(LOCATORS.heading).should("contain", basePage.NAMES.basePageTitle);
    cy.contains(brokenImagesPage.NAMES.brokenImagesTitle).click();
    cy.get(LOCATORS.example)
      .find(brokenImagesPage.NAMES.հ3)
      .should("contain", brokenImagesPage.NAMES.brokenImagesTitle);
    cy.get(LOCATORS.example)
      .find(brokenImagesPage.NAMES.img)
      .should("be.visible");
    cy.get(LOCATORS.example)
      .find(brokenImagesPage.NAMES.img)
      .should("have.length", 3);
  });
});

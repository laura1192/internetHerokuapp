const { basePage } = require("../../pages/BasePage");
const {
  disappearingElementsPage,
} = require("../../pages/Disappearing Elements");
const { LOCATORS } = require("../../utils/locators");

const ul = "ul";
const li = "li";
const home = "Home";
const upGallery = "Gallery";
const gallery = "gallery";

describe("Disappearing Elements", () => {
  it("Verify 'Disappearing Elements' page", () => {
    cy.visit("/");
    cy.contains(
      disappearingElementsPage.NAMES.disappearingElementsTitle
    ).click();
    cy.get(LOCATORS.example).should(
      "contain",
      disappearingElementsPage.NAMES.disappearingElementsTitle
    );
    cy.url().should("contain", disappearingElementsPage.NAMES.linkName);
    cy.get(LOCATORS.example).find(ul).should("contain", li);
    cy.get(LOCATORS.example)
      .find(ul)
      .find(li)
      .first()
      .should("contain", home)
      .click();
    cy.get(LOCATORS.heading).should("contain", basePage.NAMES.basePageTitle);
  });

  it("Verify Action Button", () => {
    cy.visit("/");
    cy.contains(
      disappearingElementsPage.NAMES.disappearingElementsTitle
    ).click();
    cy.get(LOCATORS.example)
      .find(ul)
      .find(li)
      .last()
      .should("contain", upGallery)
      .click();
    cy.url().should("contain", gallery);
  });
});

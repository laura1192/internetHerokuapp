const { dropdownPage } = require("../../pages/Dropdown");
const { LOCATORS } = require("../../utils/locators");

const option = "Option 2";
const selected = "Selected";
describe("Dropdown", () => {
  it("Verify Dropdown Page ", () => {
    cy.visit("/");
    cy.contains(dropdownPage.NAMES.dropdownPageLink).click();
    cy.get(LOCATORS.example).should(
      "contain",
      dropdownPage.NAMES.dropdownPageTitle
    );
    cy.url().should("contain", dropdownPage.NAMES.linkName);
    cy.get(LOCATORS.example)
      .find(dropdownPage.LOCATORS.dropdown)
      .should("be.visible");
  });
  it("Verify selection function", () => {
    cy.visit("/");
    cy.contains(dropdownPage.NAMES.dropdownPageLink).click();
    cy.get(LOCATORS.example)
      .find(dropdownPage.LOCATORS.dropdown)
      .find("Option")
      .last()
      .should("not.have.attr", selected);
    cy.get(LOCATORS.example)
      .find(dropdownPage.LOCATORS.dropdown)
      .select(option);
    cy.get(LOCATORS.example)
      .find(dropdownPage.LOCATORS.dropdown)
      .find("Option")
      .last()
      .should("have.attr", selected);
  });
});

import { addRemoveElementsPage } from "../../pages/AddRemoveElements";
import { basePage } from "../../pages/BasePage";

const h3 = "h3";
const button = "button";
const addElement = "Add Element";
const elements = "#elements";
const mydelete = "Delete";

describe("Add/Remove Elements", () => {
  it("Verify 'Add/Remove Elements' page", () => {
    cy.visit("/");
    cy.get(addRemoveElementsPage.LOCATORS.heading).should(
      "contain",
      basePage.NAMES.basePageTitle
    );
    cy.contains(addRemoveElementsPage.NAMES.addRemoveElementsTitle).click();
    cy.url().should("contain", addRemoveElementsPage.NAMES.addRemoveElements);
    cy.get(addRemoveElementsPage.LOCATORS.content)
      .find(h3)
      .should("contain", addRemoveElementsPage.NAMES.addRemoveElementsTitle);
    cy.get(addRemoveElementsPage.LOCATORS.example)
      .find(button)
      .should("be.visible")
      .and("contain", addElement);
    cy.get(addRemoveElementsPage.LOCATORS.example)
      .find(button)
      .should(
        "have.css",
        "background-color",
        addRemoveElementsPage.COLORS.blueColor
      );
  });
  it("Verify 'Add Element' Button", () => {
    cy.visit("/");
    cy.get(addRemoveElementsPage.LOCATORS.heading).should(
      "contain",
      basePage.NAMES.basePageTitle
    );
    cy.contains(addRemoveElementsPage.NAMES.addRemoveElementsTitle).click();

    cy.get(addRemoveElementsPage.LOCATORS.example)
      .find(button)
      .then((btn) => {
        cy.wrap(btn).click();
        cy.get(elements)
          .find(button)
          .should("be.visible")
          .and("contain", mydelete);
        cy.get(elements).find(button).contains(mydelete).click();
        cy.get(elements).should("not.be.visible");
      });
  });
});

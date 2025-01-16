import { hovers } from "../../pages/Hovers";
import { LOCATORS } from "../../utils/locators";

describe("Hovers", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(hovers.NAMES.hoversLink).click();
  });
  it("Verify Hovers Page", () => {
    cy.get(LOCATORS.example).should("contain", hovers.NAMES.hoversTitle);
    cy.url().should("contain", hovers.NAMES.linkName);
    cy.get(LOCATORS.example).find("img").should("be.visible");
    cy.get(LOCATORS.example).find("img").should("have.length", 3);
    cy.get(hovers.LOCATORS.figure).first().trigger("mouseover");
    cy.get(hovers.LOCATORS.figCaption).first().should("contain.text", "name: user1");
    cy.get(hovers.LOCATORS.figCaption).first().should("contain.text", "View profile");
    cy.get(hovers.LOCATORS.figure).eq(1).trigger("mouseover");
    cy.get(hovers.LOCATORS.figCaption).eq(1).should("contain.text", "name: user2");
    cy.get(hovers.LOCATORS.figCaption).eq(1).should("contain.text", "View profile");
    cy.get(hovers.LOCATORS.figure).last().trigger("mouseover");
    cy.get(hovers.LOCATORS.figCaption).last().should("contain.text", "name: user3");
    

  });
});

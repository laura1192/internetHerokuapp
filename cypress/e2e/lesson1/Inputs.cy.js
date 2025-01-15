import { inputs } from "../../pages/Inputs";
import { LOCATORS } from "../../utils/locators";

describe("Inputs", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(inputs.NAMES.inputsLink).click();
  });

  it("Verify 'Inputs' page", () => {
    cy.get(LOCATORS.example).should("contain", inputs.NAMES.inputsTitle);
    cy.get(LOCATORS.content).should("contain", inputs.NAMES.heading);
    cy.url().should("contain", inputs.NAMES.linkName);
    cy.get(inputs.LOCATORS.inputTypesNumber).should("be.empty");
  });
  it("Verify input field", () => {
    cy.get(inputs.LOCATORS.inputTypesNumber).type("123");
    cy.get(inputs.LOCATORS.inputTypesNumber).should("have.value", "123");
    cy.get(inputs.LOCATORS.inputTypesNumber).clear();
    cy.get(inputs.LOCATORS.inputTypesNumber).should("have.value", "");
    cy.get(inputs.LOCATORS.inputTypesNumber).type("abc");
    cy.get(inputs.LOCATORS.inputTypesNumber).should("have.value", "");
    cy.get(inputs.LOCATORS.inputTypesNumber).type("-1");
    cy.get(inputs.LOCATORS.inputTypesNumber).should("have.value", "-1");
  });
  it("Verify up and down arrow keys", () => {
    cy.get(inputs.LOCATORS.inputTypesNumber).clear().type("5");
    cy.get(inputs.LOCATORS.inputTypesNumber).type("{uparrow}");
    cy.get(inputs.LOCATORS.inputTypesNumber).should("have.value", "6");
    cy.get(inputs.LOCATORS.inputTypesNumber).type("{downarrow}");
    cy.get(inputs.LOCATORS.inputTypesNumber).should("have.value", "5");
  });
});

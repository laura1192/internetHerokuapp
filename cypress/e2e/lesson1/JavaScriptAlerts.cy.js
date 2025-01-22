import { յavaScriptAlerts } from "../../pages/JavaScriptAlerts";
import { LOCATORS } from "../../utils/locators";

const jsAlertText = "I am a JS Alert";
const successText = "You successfully clicked an alert";
const clikOk = "You clicked: Ok";
const jsConfirmText = "I am a JS Confirm";
const clickJsAlert = "Click for JS Alert"
const clickJsConfirm = "Click for JS Confirm"
const clickJsPrompt = "Click for JS Prompt"
const resultText = "Result:"
const li = "li"
const h4 ="h4"

describe("JavaScript Alerts", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(յavaScriptAlerts.NAMES.յavaScriptAlertsLink).click();
  });
  it("Verify JavaScript Alerts Page", () => {
    cy.get(LOCATORS.example).should("contain",յavaScriptAlerts.NAMES.յavaScriptAlertsTitle
    );
    cy.url().should("contain", յavaScriptAlerts.NAMES.linkName);
    cy.get(LOCATORS.example).find(li).should("be.visible").and("have.length", 3);
    cy.get(LOCATORS.example).find(li).first().should("have.text", clickJsAlert);
    cy.get(LOCATORS.example).find(li).eq(1).should("have.text", clickJsConfirm);
    cy.get(LOCATORS.example).find(li).last().should("have.text", clickJsPrompt);
    cy.get(LOCATORS.example).find(h4).should("contain", resultText);
  });
  it.only("Should handle alerts", () => {
    cy.get(յavaScriptAlerts.LOCATORS.btnjsAlert).click();
    cy.on(յavaScriptAlerts.LOCATORS.windowAlert, (alertText) => {
      expect(alertText).to.eq(jsAlertText);
    cy.on(յavaScriptAlerts.LOCATORS.windowAlert, () => true);
    cy.get(յavaScriptAlerts.LOCATORS.result).should("have.text", successText);

    cy.get(յavaScriptAlerts.LOCATORS.btnjsConfirm).click();
    cy.on(յavaScriptAlerts.LOCATORS.windowConfirm, (confirmText) => {
        expect(confirmText).to.eq(jsConfirmText);
      });
    cy.on(յavaScriptAlerts.LOCATORS.windowConfirm, () => true);
    cy.get(յavaScriptAlerts.LOCATORS.result).should("have.text", clikOk);

  });
  

    });
})



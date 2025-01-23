import { LOCATORS } from "../../utils/locators";
import { keyPresses } from "../../pages/KeyPresses";
import { generateRandomName } from "../../utils/function";

const randomWord = generateRandomName(5);
const text = "text";
const UP = "UP";
const DOWN = "DOWN";
const RIGHT = "RIGHT";
const LEFT = "LEFT";
const upArrow = "{uparrow}"
const downArrow = "{downarrow}"
const leftArrow ="{leftarrow}"
const rightArrow ="{rightarrow}"
const backSpace ="{backspace}"
const backSpaceText ="BACK_SPACE"

describe("Key Presses", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(keyPresses.NAMES.keyPressesLink).click();
  });

  it("Verify 'Key Presses' page", () => {
    cy.get(LOCATORS.example).should("contain",keyPresses.NAMES.keyPressesTitle
    );
    cy.url().should("contain", keyPresses.NAMES.linkName);
    cy.get(keyPresses.LOCATORS.target).should("be.visible").and("have.value", "");
  });
  it("Verify 'Key Presses' Letters", () => {
    cy.get(keyPresses.LOCATORS.target).type(randomWord);
    cy.get(keyPresses.LOCATORS.result).invoke(text).then((text) => {
    const lastLetter = text.charAt(text.length - 1).toUpperCase();
    expect(lastLetter).to.equal(
    randomWord.charAt(randomWord.length - 1).toUpperCase());
      });
    })

    it("Verify 'Key Presses' buttons", () => {
      cy.get(keyPresses.LOCATORS.target).type(upArrow);
      cy.get(keyPresses.LOCATORS.result).should("contain", UP);
      cy.get(keyPresses.LOCATORS.target).type(downArrow);
      cy.get(keyPresses.LOCATORS.result).should("contain", DOWN);
      cy.get(keyPresses.LOCATORS.target).type(leftArrow);
      cy.get(keyPresses.LOCATORS.result).should("contain", LEFT);
      cy.get(keyPresses.LOCATORS.target).type(rightArrow);
      cy.get(keyPresses.LOCATORS.result).should("contain", RIGHT);
      cy.get(keyPresses.LOCATORS.target).type(backSpace);
      cy.get(keyPresses.LOCATORS.result).should("contain", backSpaceText);
    });
  });


import { horizontalSlider } from "../../pages/HorizontalSlider";
import { LOCATORS } from "../../utils/locators";

const input = "input";
const min = "min";
const max = "max";
const step = "step";
const span = "span"

describe("Horizontical Slider", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(horizontalSlider.NAMES.horizontalSliderLink).click();
  });
  it("Verify Horizontal Slider Page", () => {
    cy.get(LOCATORS.example).should(
      "contain",
      horizontalSlider.NAMES.horizontalSliderTitle
    );
    cy.url().should("contain", horizontalSlider.NAMES.linkName);
    cy.get(horizontalSlider.LOCATORS.sliderContainer)
      .find(horizontalSlider.LOCATORS.inputTypeRange)
      .click();
    cy.get(horizontalSlider.LOCATORS.sliderContainer)
      .find(input)
      .should("have.attr", min, "0.0");
    cy.get(horizontalSlider.LOCATORS.sliderContainer)
      .find(input)
      .should("have.attr", max, "5.0");
    cy.get(horizontalSlider.LOCATORS.sliderContainer)
      .find(input)
      .should("have.attr", step, "0.5");
    cy.get(horizontalSlider.LOCATORS.sliderContainer)
      .find(input)
      .should("have.value", 0);
  });
  it("Verify the functionality of the slider", () => {
    cy.get(horizontalSlider.LOCATORS.inputTypeRange).should("be.visible");
    cy.get(horizontalSlider.LOCATORS.sliderContainer)
      .find(span)
      .should("be.visible");
    cy.get(horizontalSlider.LOCATORS.inputTypeRange)
      .invoke("val", 4)
      .trigger("input")
      .trigger("change")
      .trigger("mouseup");
    cy.get(horizontalSlider.LOCATORS.range).should("have.text", 4);
  });
});

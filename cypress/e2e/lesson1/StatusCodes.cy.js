import { statusCodes } from "../../pages/StatusCodes";
import { LOCATORS } from "../../utils/locators";

const here = "here"
const statusCode200 = "200"
const statusCode301 = "301"
const statusCode404 = "404"
const statusCode500 = "500"
const ahref = "a"
const link200 = "/status_codes/200"
const link301 = "/status_codes/301"
const link404 = "/status_codes/404"
const link500 = "/status_codes/500"
const pageReturn200 = "This page returned a 200 status code"
const pageReturn301 = "This page returned a 301 status code"
const pageReturn404 = "This page returned a 404 status code"
const pageReturn500 = "This page returned a 500 status code"
const h3 = "h3"
const p = "p"


describe("StatusCodes", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(statusCodes.NAMES.statusCodeLink).click();
  });
  it("Status Codes Page", () => {
    cy.get(LOCATORS.example).should("contain",statusCodes.NAMES.statusCodeTitle
    );
    cy.url().should("contain", statusCodes.NAMES.linkName);
    cy.get(statusCodes.LOCATORS.li).should("be.visible");
    cy.get(statusCodes.LOCATORS.li).should("have.length", 4);
    cy.get(statusCodes.LOCATORS.li).first().should("have.text", statusCode200);
    cy.get(statusCodes.LOCATORS.li).eq(1).should("have.text",statusCode301);
    cy.get(statusCodes.LOCATORS.li).eq(2).should("have.text", statusCode404);
    cy.get(statusCodes.LOCATORS.li).last().should("have.text", statusCode500);
    cy.get(statusCodes.LOCATORS.content).find(ahref).should("be.visible").and("contain", here);
  });

  it("Status Codes Page Buttons", () => {
    cy.contains(statusCode200).should("be.visible").click();
    cy.url().should("contain", link200);
    cy.get(statusCodes.LOCATORS.content).find(p).should("contain", pageReturn200);
    cy.contains(here).should("be.visible").click();
    cy.get(statusCodes.LOCATORS.content).find(h3).should("be.visible").and("contain", statusCodes.NAMES.statusCodeTitle);

    cy.contains(statusCode301).should("be.visible").click();
    cy.url().should("contain", link301);
    cy.get(statusCodes.LOCATORS.content).find(p).should("contain", pageReturn301);
    cy.contains(here).should("be.visible").click();
    cy.get(statusCodes.LOCATORS.content).find(h3).should("be.visible").and("contain", statusCodes.NAMES.statusCodeTitle);

    cy.contains(statusCode404).should("be.visible").click();
    cy.url().should("contain", link404);
    cy.get(statusCodes.LOCATORS.content).find(p).should("contain", pageReturn404);
    cy.contains(here).should("be.visible").click();
    cy.get(statusCodes.LOCATORS.content).find(h3).should("be.visible").and("contain", statusCodes.NAMES.statusCodeTitle);

    cy.contains(statusCode500).should("be.visible").click();
    cy.url().should("contain", link500);
    cy.get(statusCodes.LOCATORS.content).find(p).should("contain", pageReturn500);
    cy.contains(here).should("be.visible").click();
    cy.get(statusCodes.LOCATORS.content).find(h3).should("be.visible").and("contain", statusCodes.NAMES.statusCodeTitle);
  });
});

const { challengingDomPage } = require("../../pages/ChallengingDom");
const { COLORS } = require("../../utils/colors");
const { LOCATORS } = require("../../utils/locators");

const myRowCount = 10
const myColomnCount = 7

describe("Challenging DOM", () => {
  it("Verify 'Challenging Dom' page", () => {
    cy.visit("/");
    cy.contains(challengingDomPage.NAMES.challengingDomTitle).click();
    cy.get(".large-10").should("be.visible");
    cy.get(LOCATORS.example).find("h3").should("contain", challengingDomPage.NAMES.challengingDomTitle);
  });
  it("Verify Button's colors", () => {
    cy.visit("/");
    cy.contains(challengingDomPage.NAMES.challengingDomTitle).click();
    cy.get(".large-2").find("a").first().should("have.css", "background-color",COLORS.blueColor);
    cy.get(".large-2").find("a").eq("1").should("have.css", "background-color",COLORS.redColor);
    cy.get (".large-2").find("a").last().should("have.css", "background-color",COLORS.greenColor);
    
  });

  it("Verify Action Button", () => {
    cy.visit("/");
    cy.contains(challengingDomPage.NAMES.challengingDomTitle).click();
    cy.get(".large-10").find('a[href="#edit"]').first().click();
    cy.url().should("include", "#edit");
    cy.get(".large-10").find('a[href="#delete"]').last().click();
    cy.url().should("include", "#delete");
    
  })
  it("Verify row's count", () => {
    cy.visit("/");
    cy.contains(challengingDomPage.NAMES.challengingDomTitle).click();
   
    cy.get(".large-10").find('table').find ("tbody").find("tr").should("have.length", myRowCount)

  })
  it("Verify colums", () => {
    cy.visit("/");
    cy.contains(challengingDomPage.NAMES.challengingDomTitle).click();
   
    cy.get(".large-10").find('table').find ("thead").find("tr").find("th").should("contain", "Sit")

  })
})
  it("Verify columns' count", () => {
    cy.visit("/");
    cy.contains(challengingDomPage.NAMES.challengingDomTitle).click();
   
    cy.get(".large-10>table>thead>tr>th").should("have.length", myColomnCount)

  });


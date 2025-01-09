const { challengingDomPage } = require("../../pages/ChallengingDom");
const { LOCATORS } = require("../../utils/locators");

const myRowCount = 10
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
    cy.get(".large-2").find("a").first().should("have.css", "background-color", "rgb(43, 166, 203)");
    cy.get(".large-2").find("a").eq("1").should("have.css", "background-color","rgb(198, 15, 19)");
    cy.get (".large-2").find("a").last().should("have.css", "background-color", "rgb(93, 164, 35)");
    
  });

  it("Verify Action Button", () => {
    cy.visit("/");
    cy.contains(challengingDomPage.NAMES.challengingDomTitle).click();
    cy.get(".large-10").find('a[href="#edit"]').first().click();
    cy.url().should("include", "#edit");
    cy.get(".large-10").find('a[href="#delete"]').last().click();
    cy.url().should("include", "#delete");
    
  })
  it.only("Verify row's count", () => {
    cy.visit("/");
    cy.contains(challengingDomPage.NAMES.challengingDomTitle).click();
   
    cy.get(".large-10").find('table').find ("tbody").find("tr").should("have.length", myRowCount)

  })
  it.only("Verify colums", () => {
    cy.visit("/");
    cy.contains(challengingDomPage.NAMES.challengingDomTitle).click();
   
    cy.get(".large-10").find('table').find ("thead").find("tr").find("th").should("contain", "Sit")

  })
  });


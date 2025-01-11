const { challengingDomPage } = require("../../pages/ChallengingDom");
const { COLORS } = require("../../utils/colors");
const { LOCATORS } = require("../../utils/locators");

const myRowCount = 10
const myColomnCount = 7
const h3 = "h3"
const a = "a"
const edit = "#edit"
const mydelete= "#delete"
const table = 'table'
const tbody = 'tbody'
const tr = 'tr'
const thead = 'thead'
const th = 'th'
const ahrefEdit = 'a[href="#edit"'
const ahrefDelete = 'a[href="#delete"]'
const sit = "Sit"
describe("Challenging DOM", () => {
  it("Verify 'Challenging Dom' page", () => {
    cy.visit("/");
    cy.contains(challengingDomPage.NAMES.challengingDomTitle).click();
    cy.get(challengingDomPage.NAMES.large10).should("be.visible");
    cy.get(LOCATORS.example).find(h3).should("contain", challengingDomPage.NAMES.challengingDomTitle);
  });
  it("Verify Button's colors", () => {
    cy.visit("/");
    cy.contains(challengingDomPage.NAMES.challengingDomTitle).click();
    cy.get(challengingDomPage.NAMES.large2).find(a).first().should("have.css", "background-color",challengingDomPage.COLORS.blueColor);
    cy.get(challengingDomPage.NAMES.large2).find(a).eq(1).should("have.css", "background-color",challengingDomPage.COLORS.redColor);
    cy.get (challengingDomPage.NAMES.large2).find(a).last().should("have.css", "background-color",challengingDomPage.COLORS.greenColor);
    
  });

  it("Verify Action Button", () => {
    cy.visit("/");
    cy.contains(challengingDomPage.NAMES.challengingDomTitle).click();
    cy.get(challengingDomPage.NAMES.large10).find(ahrefEdit).first().click();
    cy.url().should("include", edit);
    cy.get(challengingDomPage.NAMES.large10).find(ahrefDelete).last().click();
    cy.url().should("include", mydelete);
    
  })
  it("Verify row's count", () => {
    cy.visit("/");
    cy.contains(challengingDomPage.NAMES.challengingDomTitle).click();
   
    cy.get(challengingDomPage.NAMES.large10).find(table).find (tbody).find(tr).should("have.length", myRowCount)

  })
  it("Verify colums", () => {
    cy.visit("/");
    cy.contains(challengingDomPage.NAMES.challengingDomTitle).click();
   
    cy.get(challengingDomPage.NAMES.large10).find(table).find (thead).find(tr).find(th).should("contain", sit)

  })
})
  it("Verify columns' count", () => {
    cy.visit("/");
    cy.contains(challengingDomPage.NAMES.challengingDomTitle).click();
   
    cy.get(challengingDomPage.NAMES.large10).find(table).find (thead).find(tr).find(th).should("have.length", myColomnCount)

  });
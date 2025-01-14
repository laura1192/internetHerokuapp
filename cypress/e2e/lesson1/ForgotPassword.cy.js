const { forgotPasswordPage } = require("../../pages/ForgotPassword");
const { generateRandomName } = require("../../utils/function");
const { LOCATORS } = require("../../utils/locators");

const randomEmail = `${generateRandomName(6)}"@gmail.com"`;
let value;
const label = "label";
const email = "E-mail";

describe("Forgot Password", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.contains("Forgot Password").click();
    });
    
  it("Verify 'Email' page", () => {
    cy.visit("/");
    cy.contains(forgotPasswordPage.NAMES.forgotPasswordPageTitle).click();
    cy.get(LOCATORS.example).should(
      "contain",
      forgotPasswordPage.NAMES.forgotPasswordPageTitle
    );
    cy.url().should("include", forgotPasswordPage.NAMES.linkName);
    cy.get(LOCATORS.example).should(
      "contain",
      forgotPasswordPage.NAMES.forgotPasswordPageTitle
    );
    cy.get(forgotPasswordPage.LOCATORS.row)
      .find(label)
      .should("contain", email);
    cy.get(forgotPasswordPage.LOCATORS.email).should("be.empty");
    cy.get(forgotPasswordPage.LOCATORS.form).should(
      "have.css",
      "background-color",
      forgotPasswordPage.COLORS.blue
    );
  });


  it("Verify unique emails input", () => {
    
    cy.get(forgotPasswordPage.LOCATORS.email).type(randomEmail);
    cy.get(forgotPasswordPage.LOCATORS.email)
      .invoke("val")
      .then((val) => {
        value = val;
      });
      cy.then(()=>{
        expect(value).to.eq(randomEmail)
      })
      cy.get(forgotPasswordPage.LOCATORS.form).click()
      cy.get('h1').should("contain", "Internal Server Error")
});
})
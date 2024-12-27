import { basePage } from "../../pages/BasePage";
import { COLORS } from "../../utils/colors";
import { LOCATORS } from "../../utils/locators";

describe("Add/Remove Elements", () => {
    it("Verify 'Add/Remove Elements' page", () => {
        cy.visit("https://the-internet.herokuapp.com/");
        cy.get(LOCATORS.heading).should("contain", basePage.NAMES.basePageTitle);
        cy.contains ('Add/Remove Elements').click();
        cy.url().should('contain', '/add_remove_elements/')
        cy.get(LOCATORS.content).find("h3").should("contain",'Add/Remove Elements');
        cy.get(LOCATORS.example).find('button').should('be.visible').and('contain', 'Add Element')
        cy.get(LOCATORS.example).find('button').should('have.css', 'background-color',COLORS.blueColor)
    });
    it("Verify 'Add Element' Button",() => {
        cy.visit("https://the-internet.herokuapp.com/");
        cy.get(LOCATORS.heading).should("contain", basePage.NAMES.basePageTitle);
        cy.contains ('Add/Remove Elements').click();
        // cy.get(LOCATORS.example).find('button').click()
        cy.get(LOCATORS.example).find('button').then((btn)=>{
            cy.wrap(btn).click();
        cy.get('#elements').find('button').should('be.visible').and('contain', 'Delete')
        cy.get('#elements').find('button').contains('Delete').click();
        cy.get('#elements').should('not.be.visible')
        })
});
  });
  
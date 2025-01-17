import { infiniteScroll } from "../../pages/InfiniteScroll";
import { LOCATORS } from "../../utils/locators";

describe("Infinite Scroll", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(infiniteScroll.NAMES.infiniteScrollLink).click();
  });
  it("Verify Infinite Scroll Page", () => {
    cy.get(LOCATORS.example).should("contain",infiniteScroll.NAMES.infiniteScrollTitle);
    cy.url().should("contain", infiniteScroll.NAMES.linkName);
    cy.get(infiniteScroll.LOCATORS.jscrollAdded).should('be.visible').and('have.length.greaterThan', 0);
    cy.scrollTo('bottom');
    cy.get(infiniteScroll.LOCATORS.jscrollAdded).last().should('be.visible');
       
});
})
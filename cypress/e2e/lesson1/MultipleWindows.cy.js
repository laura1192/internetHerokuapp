import { multipleWindows } from "../../pages/MultipleWindows";
import { LOCATORS } from "../../utils/locators";

const clickHere = "Click Here"
const ahref = "a"

describe("Multiple Windows", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(multipleWindows.NAMES.multipleWindowsLink).click();
  });

  it("Verify Notification Messages' page", () => {
    cy.get(LOCATORS.example).should("contain",multipleWindows.NAMES.multipleWindowsTitle);
    cy.url().should("contain", multipleWindows.NAMES.linkName);
    
    cy.contains(clickHere).click();
    cy.window().then((win) => {
        console.log(win)
        expect(win.document).to.not.be.null
       })
    })
})

import { notificationMessages } from "../../pages/NotificationMessages";
import { LOCATORS } from "../../utils/locators";

const clickHere = "Click here"
const ahref = "a"

const expectedMessages = [
  "Action unsuccesful, please try again",
  "Action successful",
];

describe("Notification Messages", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(notificationMessages.NAMES.notificationMessagessLink).click();
  });

  it("Verify Notification Messages' page", () => {
    cy.get(LOCATORS.example).should("contain",notificationMessages.NAMES.notificationMessagesTitle);
    cy.url().should("contain", notificationMessages.NAMES.linkName);
  });

  it("Multiple Clicks Test by using Loop", () => {
    cy.get(LOCATORS.example).find (ahref).should("contain",clickHere).click();
    for (let i = 0; i < 6; i++) {
      cy.get(notificationMessages.LOCATORS.flash).should("be.visible").and("contain", expectedMessages[0]);
      cy.wait(2000);
    }
  });
});


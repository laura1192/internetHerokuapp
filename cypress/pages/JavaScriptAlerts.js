class JavaScriptAlerts {
  NAMES = {
    յavaScriptAlertsLink: "JavaScript Alerts",
    յavaScriptAlertsTitle: "JavaScript Alerts",
    linkName: "/javascript_alerts",
  };

  LOCATORS = {
    btnjsAlert: 'button[onclick="jsAlert()"]',
    windowAlert: "window:alert",
    result: "#result",
    btnjsConfirm: 'button[onclick="jsConfirm()"]',
    windowConfirm: "window:confirm",
  };
}
export const յavaScriptAlerts = new JavaScriptAlerts();

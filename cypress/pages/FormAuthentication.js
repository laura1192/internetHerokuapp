class FormAuthentication {
  NAMES = {
    formAuthenticationLink: "Form Authentication",
    formAuthenticationTitle: "Login Page",
    linkName: "login",
  };

  LOCATORS = {
    row: ".row",
    username: "input#username",
    password: "input#password",
    clickButton: 'button[type="submit"]',
    flash: "#flash",
    ahref: 'a[href="/logout"]',
  };
  COLORS = {
    blue: "rgb(43, 166, 203)",
  };
}

export const formAuthentication = new FormAuthentication();

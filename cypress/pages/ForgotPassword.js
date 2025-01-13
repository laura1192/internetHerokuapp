class ForgotPasswordPage {
    NAMES = {
      forgotPasswordLink:"Forgot Password",
      forgotPasswordPageTitle:"Forgot Password",
      linkName:"forgot_password",
    
      
    };
 
    LOCATORS = {
        row:".row",
        email: "#email",
       form:"#form_submit"
    };
    COLORS = {
        blue:"rgb(43, 166, 203)",
       
    };
  }
  
  export const forgotPasswordPage = new ForgotPasswordPage();
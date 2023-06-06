import loginApi from "../support/api/loginApi.js"

const elements = {
	buttons:{
        loginBtn: 'button[title="Login"]'
	},
	inputs: {
        email: '[id="email"]',
        password: '[id="password1"]'
	},
	text: {},
  anchors:{},
	divs:{}
}

export { elements as loginElements };

export default class login {

  static visitLatLong(){
    cy.visit('https://www.latlong.net/user/login');
  }

  static fillLoginCredentials(){
    cy.fixture('/userCredentials').then((user) => {
      cy.log('::LOGIN CREDENTIALS FROM FIXTURE');
      cy.get(elements.inputs.email)
        .type(user.username);
      cy.get(elements.inputs.password)
        .type(user.password);
    })
  }

  static clickLoginButton(){
    cy.get(elements.buttons.loginBtn)
    .click();
  }

  static assertLoggedIn(){
    cy.get('main')
      .contains('Welcome GZ Test');
  }

  static loginViaApi(){
    cy.fixture('/userCredentials').then((user) => {
      cy.log('::LOGIN FROM API AND FROM FIXTURE');
      login.visitLatLong();
      cy.request(loginApi(user.username,user.password));
    })
  }
}
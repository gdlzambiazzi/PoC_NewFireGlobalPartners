import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../pages/login";
import loginApi from "../support/api/loginApi.js"

const username = 'gdlzambiazzi+1@gmail.com';
const password = 'password';

Given('I access Latlong login page', () => {
    login.visitLatLong();
});

And('I fill in my credentials', () => {
    login.fillLoginCredentials();
});

When('I click Login button', () => {
    login.clickLoginButton();
});

Then('I am logged in successfully', () => {
    login.assertLoggedIn();
});

Given('I login via API', () => {
	cy.fixture('/userCredentials').then((user) => {
		cy.log('::LOGIN FROM API AND FROM FIXTURE');
        login.visitLatLong();
		cy.request(loginApi(user.username,user.password));
	})
});

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../pages/login";

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
	login.loginViaApi();
});

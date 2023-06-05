import { Given, When, Then, And, After, Before } from "cypress-cucumber-preprocessor/steps";
import placeCoordinates from "../pages/coordinates";

const latlongUrl = 'https://www.latlong.net/';

Given('I visit Latong website', () => {
  cy.visit(latlongUrl);
  placeCoordinates.assertLatLongLoaded();
});

When('I look for a {string}', (place) => {
  cy.log(place);
  placeCoordinates.clearPlaceName();
  placeCoordinates.typePlaceName(place);
  placeCoordinates.clickFindButton();
});

Then('its coordinates match the {string} I got from my real map', (realCoordinates) => {
  cy.log(realCoordinates);
  placeCoordinates.compareCoordinatesData(realCoordinates);
});

Before({ tags: '@clearSession' }, () => {
  cy.clearAllSessionStorage();
});

After({ tags: '@after' }, () => {
  cy.visit('https://www.latlong.net/user/logout');
});
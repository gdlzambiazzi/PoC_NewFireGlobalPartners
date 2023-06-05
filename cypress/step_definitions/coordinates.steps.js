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

Given('I click on {string}', (link) => {
  placeCoordinates.clickLink(link);
});

When('I look for a {string} latitude and longitude using a data file', (city) => {
  placeCoordinates.fillLatLongFromFile(city);
});

Then('the city returned onscreen is the same {string} from the data file', (city) => {
  placeCoordinates.compareCityData(city);
});
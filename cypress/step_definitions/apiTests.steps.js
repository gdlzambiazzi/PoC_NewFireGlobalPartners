import { Given, When, Then, And, After, Before } from "cypress-cucumber-preprocessor/steps";
import apiTests from "../pages/apiTests";

Given('I execute getAllBooks API', () => {
  apiTests.getAllBooks();
});

Then('I can see all the books', () => {
  apiTests.assertAllBooks();
});

And('getAllBooks API returned status 200', () => {
  apiTests.assertStatus200();
});

And('it contains the book {string}', (bookName) => {
  apiTests.containsBook(bookName);
});
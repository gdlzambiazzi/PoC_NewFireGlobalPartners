# PoC_NewFireGlobalPartners
1. Cucumber/Gherkin syntax (user friendly, human-language) is used to describe the tests on the cypress/integration/.feature files
2. The cucumber syntax is described under /cypress/step_definitions/.steps
3. The .steps files call the /pages files, which use the **Page Objects** pattern
4. Page Objects files list all the elements, selectors and functions from a specific page. They're easier to maintain and to increment
5. XHR requests are being hidden from the cypress logs to avoid overwhelming them with unnecessary logs (latlong.net generates thousands of them)

----------------------------------------------------------------------------------------------------------------------------------------------

## login.feature
1. It accesses Latlong.net login page
2. Inserts credentials
3. Asserts user logged in successfully
4. The login credentials are being fetched from a **fixture file** (cypress\fixtures\userCredentials.json)

## findCoordinates.feature
1. These scenarios are using a *Background* section, which is executed before each scenario and before each data/table iteration
2. The login is being made via API *to save time and resources* ("Given I login via API"). This API is described on */support/api/loginApi.js*
3. A @clearSession tag was defined to assure the cookies and credentials are clear on each iteration
4. The *first test case* simulates a situation where the tester would have real city coordinates (realCoordinates) fetched from a map, and then compares those realCoordinates to the coordinates returned onscreen after submitting the City
5. The *second test case* is asserting that when the user submits a latitude and longitude (originated from the dataFile.json) on the search field, they'll compare the *city* returned onscreen with the city from the **data file** from the fixtures (dataFile.json)
6. Note: the above scenario uses a table (City_1, City_2), which is then used in the dataFile to identify the correct city from the file (this is a little complicated, but it's only to show how to use data tables and data files :) )

## apiTests.feature
1. This test cases shows how to use gherkin syntax and page objects for API tests (on **demoqa** (Book Store))
2. It shows a few simple examples of assertions that can be made on an API (status code = 200, book names)
3. Those tests are using the request implemented under /cypress/support/api/getAllBooks.js

If time allowed: I'd like to implement more API tests. e.g.: register user, create book (assert it on the list), delete book (assert it's not on the list)

------------------------------------------------------------------------------------------------------------------
# Pipeline

I've implemented a simple pipeline (under *Actions*), where it checks out the project, installs dependencies and Cypress.

**Cypress is running**, but it's getting a few timeouts on findCoordinates.feature (**known issue**)
It is probably caused by the lack of resources on the pipeline. Also, the latlong.net website triggers *thousands* of XHR requests (trackers of all sorts), which causes the page performance to deteriorate.

If desired, this repository can be cloned and run locally.

There's also an issue with the *artifacts* configuration, so it's not working as desired.

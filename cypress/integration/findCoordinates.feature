Feature: Check latitude and longitude for places and addresses
	
	Background: Login on latlong.com via API
		Given I login via API
		And I visit Latong website

	@clearSession
	Scenario Outline: Seach for a place coordinates and validate that it matches with real coordinates from the table
		When I look for a "<place>"
		Then its coordinates match the "<realCoordinates>" I got from my real map
		
	Examples:
		| place      | realCoordinates        |
		|Curitiba, BR| -25.480877, -49.304424 |
		|New York, US| 40.712776, -74.005974  |
		|Berlin, DE  | 52.523430, 13.411440   |
		|Dublin, IE  | 53.344101, -6.267490   |
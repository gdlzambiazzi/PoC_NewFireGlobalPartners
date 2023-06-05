const elements = {
	buttons:{
		findButton: '[id="btnfind"]',
		convertButton: 'button[title="Show Lat Long converted address on Map"]'
	},
	inputs: {
		placeNameInput: '[id="place"]',
		latitude: '[id="latitude"]',
		longitude: '[id="longitude"]'
	},
	text: {
		coordinatesData: '[id="latlngspan"]'
	},
  anchors:{
		latLongTitle: '[title="Lat Long Finder"]'
	},
	divs:{
		navigationBar: '[id="myTopnav"]',
		body: 'body',
		textArea: '[id="address"]'
	}
}

export { elements as placeCoordinatesElements };

export default class placeCoordinates {

static assertLatLongLoaded(){
		cy.get(elements.anchors.latLongTitle)
			.should('be.visible');
}

	static typePlaceName(placeName){
		cy.get(elements.inputs.placeNameInput)
			.type(placeName, {delay: 100});
	}

	static clickFindButton(){
		cy.get(elements.buttons.findButton)
			.click();
	}

	static compareCoordinatesData(coordinates){
		cy.get(elements.text.coordinatesData)
			.should('contain',coordinates);
	}

	static clearPlaceName(){
		cy.get(elements.inputs.placeNameInput)
		  .clear();
	}

	static clickLink(link){
		cy.get(elements.divs.body)
			.contains(link)
			.click();
	}

	static fillLatLongFromFile(city){
		cy.fixture('/dataFile').then((data) => {
      cy.get(elements.inputs.latitude)
				.clear()
        .type(data[city].lat);
			cy.log(`:: Latitude ${data[city].lat} ::`);
      cy.get(elements.inputs.longitude)
				.clear()
        .type(data[city].long);
			cy.log(`:: Latitude ${data[city].long} ::`);
			cy.get(elements.buttons.convertButton)
				.click();
    })
	}

	static compareCityData(city){
		cy.fixture('/dataFile').then((data) => {
			cy.log(`:: CITY ${data[city].cityName} ::`);
      cy.get(elements.divs.textArea)
        .should('contain',data[city].cityName);
    });
	}
}
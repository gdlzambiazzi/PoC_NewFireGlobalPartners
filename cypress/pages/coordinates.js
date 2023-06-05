const elements = {
	buttons:{
		findButton: '[id="btnfind"]'
	},
	inputs: {
		placeNameInput: '[id="place"]'
	},
	text: {
		coordinatesData: '[id="latlngspan"]'
	},
  anchors:{
		latLongTitle: '[title="Lat Long Finder"]'
	},
	divs:{}
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
}
import getAllBooks from "../support/api/getAllBooks.js"

const elements = {
	buttons:{},
	inputs: {},
	text: {},
  anchors:{},
	divs:{}
}

export default class apiTests {
  
  static getAllBooks(){
    cy.request(getAllBooks())
      .then((response) => {
        window.booksList = response;
      });
  }

  static assertAllBooks(){
    cy.log(JSON.stringify(window.booksList.body.books));
  }

  static assertStatus200(){
    window.booksList.status == 200
    ? cy.log(':: STATUS CODE 200 ::')
    : cy.log(':: ERROR ::');
  }

  static containsBook(bookName){
    cy.expect(JSON.stringify(window.booksList.body.books))
      .to.contain(bookName);
  }

}
function getAllBooks() {
  const body = {};

  const options = {
    method: 'GET',
    form: true,
    url: `https://demoqa.com/BookStore/v1/Books`,
    body,
    retryOnStatusCodeFailure: true,
  };

  return options;
}

export default getAllBooks;

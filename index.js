function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  // Make a GET request to the Game of Thrones API
  return fetch('https://anapioficeandfire.com/api/books')
    .then(resp => {

      // Convert the response to JSON
      return resp.json()
    })

    .then(data => {
      // Call the renderBooks() function with the JSON data
      renderBooks(data);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

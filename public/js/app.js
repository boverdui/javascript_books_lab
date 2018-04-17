let bookArray = [];

const handleFormSubmit = function (event) {
  event.preventDefault();

  const title = this.title.value;
  const author = this.author.value;

  const radios = document.getElementsByName('category');
  let category;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      category = radios[i].value;
    }
  }
  const genre = this.genre.value;

  const book = new Book(title, author, category, genre);

  bookArray.push(book);

  const container = document.querySelector('#book-list');

  addNewBook(book, container);  

}

document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#book-form');
  form.addEventListener('submit', handleFormSubmit);

});

const addNewBook = function (book, container) {

  const bookContainer = document.createElement('ul');

  const bookTitle = document.createElement('li');
  const bookAuthor = document.createElement('li');
  const bookCategory = document.createElement('li');
  const bookGenre = document.createElement('li');

  bookTitle.textContent = `Book: ${book.title}`;
  bookAuthor.textContent = `Author: ${book.author}`;
  bookCategory.textContent = `Category: ${book.category}`;
  bookGenre.textContent = `Genre: ${book.genre}`;

  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookCategory);
  bookContainer.appendChild(bookGenre);

  container.appendChild(bookContainer);

}

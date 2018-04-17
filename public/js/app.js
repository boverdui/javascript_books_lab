let bookArray = [];

const handleFormSubmit = function (event) {
  event.preventDefault();

  const title = this.title.value;
  const author = this.author.value;
  const category = this.category.value;
  const genre = this.genre.value;

  const book = new Book(title, author, category, genre);

  bookArray.push(book);

  addNewBook(book);

  this.reset();

}

document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#book-form');
  form.addEventListener('submit', handleFormSubmit);

});

const addNewBook = function (book) {

  const container = document.querySelector('#book-list');
  const bookInfo = document.createElement('ul');
  const bookTitle = document.createElement('li');
  const bookAuthor = document.createElement('li');
  const bookCategory = document.createElement('li');
  const bookGenre = document.createElement('li');

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookCategory.textContent = book.category;
  bookGenre.textContent = book.genre;

  bookInfo.appendChild(bookTitle);
  bookInfo.appendChild(bookAuthor);
  bookInfo.appendChild(bookCategory);
  bookInfo.appendChild(bookGenre);
  container.appendChild(bookInfo);

}

const myLibrary = [];

function Book(title, author, pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let book1 = new Book("Crime and Punishment", "F. Dostoevsky", 527, true);
let book2 = new Book("War and Peace", "L. Tolstoy", 1225, true);

myLibrary.push(book1, book2)

function addBookToLibrary() {
  // do stuff here
}
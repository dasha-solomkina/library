const addBookBtn = document.querySelector(".add-book");
const readBtn = document.querySelector(".read");
const removeBtn = document.querySelector(".remove");


const myLibrary = [];

  


function Book(title, author, pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function addBookToLibrary() {
  // do stuff here
}
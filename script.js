const addBookBtn = document.querySelector(".add-book");
const readBtn = document.querySelectorAll(".read");
const removeBtn = document.querySelector(".remove");
const form = document.querySelector("#myForm");

const myLibrary = [];


function Book(title, author, pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// open the pop up to add a book when button clicked
addBookBtn.addEventListener("click", () => {
  const popup = document.querySelector("#hidden");
  popup.removeAttribute("id");
})

// read vs unread

readBtn.forEach(function(btn) {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("notread")) {
      btn.classList.remove("notread");
    } else {
      btn.classList.add("notread");
    };
  });
});


form.addEventListener("submit", () => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;
  myLibrary.push(new Book(title, author, pages, read));

})



// function addBookToLibrary() {
  
// }
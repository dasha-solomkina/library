const addBookBtn = document.querySelector(".add-book");
const readBtn = document.querySelectorAll(".read");
const removeBtn = document.querySelector(".remove");
const form = document.querySelector("#myForm");
const container = document.querySelector(".container");
const popup = document.querySelector("#hidden");

const myLibrary = [];

function Book(title, author, pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


// open the pop up to add a book when button clicked
addBookBtn.addEventListener("click", () => {
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
  popup.setAttribute("id", "hidden");
  addCard(myLibrary);

})


// add one more card
function addCard(arr) {
  const newDiv = document.createElement("div");
  const newTitle = document.createElement("p");
  const newAuthor = document.createElement("p");
  const newPages = document.createElement("p");
  const newRead = document.createElement("button");
  const newRemove = document.createElement("button");
  newDiv.classList.add("card");
  newTitle.classList.add("title");
  newAuthor.classList.add('author');
  newPages.classList.add('pages');
  newRead.classList.add('read');
  newRemove.classList.add("remove");
  newRemove.setAttribute('id', arr.length-1);
  newTitle.textContent = arr[arr.length-1].title;
  newAuthor.textContent = arr[arr.length-1].author;
  newPages.textContent = arr[arr.length-1].pages;
  if(arr[arr.length-1].read == false) {
    newRead.classList.add("notread");
    newRead.textContent = "not read";
  } else {
    newRead.textContent = "read";
  };
  newRemove.textContent = "remove";
  newDiv.appendChild(newTitle);
  newDiv.appendChild(newAuthor);
  newDiv.appendChild(newPages);
  newDiv.appendChild(newRead);
  newDiv.appendChild(newRemove);
  container.appendChild(newDiv);
}


// function addBookToLibrary() {
  
// }



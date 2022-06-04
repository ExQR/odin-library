let myLibrary = [];

function Book (title, author, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return title + ' by ' + author + ', ' + pages + ' pages, ' + read;
    }
}

function addBookToLibrary() {
    myLibrary.push(book);
}

const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', (e) => {addBookToLibrary});

const readBtn = document.querySelector('#read');
readBtn.addEventListener('click', (e) => {
        if (readBtn.value == "off") {
            readBtn.value = "on";
            readBtn.style = "background-color: rgb(25, 120, 200); transition: 1s"
        } else { 
            readBtn.value = "off";
            readBtn.style = "background-color: rgb(194,194,194); transition: 1s"
        }
    }
);

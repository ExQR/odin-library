let myLibrary = [];

function Book (title, author, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
};

const readBtn = document.querySelector('#read');
readBtn.addEventListener('click', (e) => {
        if (readBtn.value == "false") {
            readBtn.value = "true";
            readBtn.style = "background-color: rgb(25, 120, 200); transition: 1s"
        } else { 
            readBtn.value = "false";
            readBtn.style = "background-color: rgb(194,194,194); transition: 1s"
        }
    }
);

const submitBtn = document.querySelector('#add');

submitBtn.addEventListener('click', (e) => {
    let form = document.querySelector('#inputform');
    let formData = new FormData(form);
    let book = new Book(formData.get('title'), formData.get('author'), formData.get('pages'), readBtn.value);
    myLibrary.push(book);
    addCard(book);
    form.reset();
    readBtn.value = 'false';
    readBtn.style = "background-color: rgb(194,194,194); transition: 1s"
    
} );

function addCard(book) {
    const bookshelf = document.querySelector('.bookshelf');
    let card = document.createElement('div');
    card.setAttribute('id', 'card');
    card.setAttribute('index', myLibrary.indexOf(book))
    bookshelf.appendChild(card);
    for (let prop in book) {
        if (Object.prototype.hasOwnProperty.call(book, prop)) {
            let info = document.createElement('p');
            info.innerHTML = book[prop];
            card.appendChild(info);
        }        
    }
    let delBtn = document.createElement('button');
    delBtn.setAttribute('type', 'button');
    delBtn.setAttribute('id', 'delBtn');
    delBtn.innerHTML = 'del';
    card.appendChild(delBtn);
}
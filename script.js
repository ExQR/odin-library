let myLibrary = [];

function Book (title, author, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
};

const readBtn = document.querySelector('#read');
readBtn.addEventListener('click', (e) => {
        if (readBtn.value == "Not finished") {
            readBtn.value = "Finished";
            readBtn.style = "background-color: rgb(25, 120, 200); transition: 1s;"
        } else { 
            readBtn.value = "Not finished";
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
    readBtn.value = 'Not finished';
    readBtn.style = "background-color: rgb(194,194,194); transition: 1s"
    
} );


function addCard(book) {
    const bookshelf = document.querySelector('.bookshelf');
    let card = document.createElement('div');
    card.setAttribute('id', 'card');
    card.setAttribute('index', myLibrary.indexOf(book))
    bookshelf.appendChild(card);
    let info = document.createElement('div');
    info.setAttribute('id', 'info');
    card.appendChild(info);
    for (let prop in book) {
        if (Object.prototype.hasOwnProperty.call(book, prop)) {
            let infoText = document.createElement('p');
            infoText.innerHTML = book[prop];
            info.appendChild(infoText);
        }        
    }
    let delButton = document.createElement('div');
    delButton.setAttribute('id', 'del');
    let delBtn = document.createElement('button');
    delBtn.setAttribute('type', 'button');
    delBtn.setAttribute('id', 'delBtn');
    delBtn.innerHTML = '&#x1F5D1';
    card.appendChild(delButton);
    delButton.appendChild(delBtn);
    delBtn.addEventListener('click', (e) => {
        e.path[2].remove();
    })
}
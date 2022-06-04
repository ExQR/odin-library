function Book (title, author, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return title + ' by ' + author + ', ' + pages + ' pages, ' + read;
    }
}

const hobbit = new Book ('The Hobbit', "Tolkien", 295, 'not read');

console.log(hobbit.info());

class Book {
    constructor(title, author, noOfPages, read) {
        this.title = title;
        this.author = author;
        this.noOfPages = noOfPages;
        this.read = read;
    }
}

Book.prototype.info = function () {
    let tempRead = '';
    if (this.read) {
        tempRead = "done reading";
    } else {
        tempRead = "not read yet";
    }
    return `${this.title} by ${this.author}, ${this.noOfPages} pages, ${tempRead}`;
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(book1.info());
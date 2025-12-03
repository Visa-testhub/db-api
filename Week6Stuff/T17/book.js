const book = {
  books: [
    { id_book: 1, name: "Mikael Karvajalka", author: "Mika Waltari", isbn: "082305648z" },
    { id_book: 2, name: "Mikael Hakim", author: "Mika Waltari", isbn: "082305650z" },
    { id_book: 3, name: "Sinuhe egyptiläinen", author: "Mika Waltari", isbn: "082305649z" },
    { id_book: 4, name: "Täällä Pohjantähden alla", author: "Väinö Linna", isbn: "082305651z" },
    { id_book: 5, name: "Täällä Pohjantähden alla II", author: "Väinö Linna", isbn: "082305652z" }
],

getAllBooks()  {
	return this.books;
},

getOneBook(x) {
	if (typeof x === 'number') {
		return this.books.find(book => book.id_book === x);
	}
	if (typeof x === 'string') {
		bookname = this.books.find(book => book.name === x);
		if (bookname) {
			return bookname;
		}
		bookAuthor = this.books.find(book => book.author === x);
		if (bookAuthor) {
			return bookAuthor;
		}
		bookIsbn = this.books.find(book => book.isbn === x);
		if (bookIsbn) {
			return bookIsbn;
		}
	}
	return null;
	},

addBook(id_book, name, author, isbn) {
	const newBook = { id_book, name, author, isbn };
	this.books.push(newBook);
	return newBook;
}
};

console.log(book.getAllBooks());
console.log(book.getOneBook("Mikael Hakim"));
console.log(book.getOneBook(2));
console.log(book.getOneBook("082305650z"));
console.log(book.addBook(6, "Kotimaa", "R.A.Salvatore", "123456789z"));
console.log(book.getAllBooks());
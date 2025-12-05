/* 
  JavaScript OOP Challenge: Library Management System

  Task:
  Create a simple Library Management System in JavaScript using OOP concepts.

  Step 1: Book Class
  -----------------
  Define a `Book` class with the following:

  Properties:
    - title
    - author
    - isbn
    - isAvailable (boolean)

  Methods:
    - Display book details
    - Borrow the book (set isAvailable to false)
    - Return the book (set isAvailable to true)

  Challenge:
    - Use getter and setter for isAvailable to control access
    - Use static methods to count how many book objects have been created

  Step 2: Library Class
  --------------------
  Define a `Library` class with the following:

  Property:
    - books (an array of Book objects)

  Methods:
    - Add a new book to the library
    - Remove a book by ISBN
    - List all available books
    - Find a book by title

  Step 3: Demonstration
  --------------------
  - Create at least 3 book objects and add them to the library
  - Demonstrate the following:
      1. Borrow a book
      2. Try to borrow the same book again
      3. Return the book
      4. List all available books
*/

class Book {
  static count = 0;
  constructor(title, author, isbn, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this._isAvailable = isAvailable;
    Book.count++;
  }
  get isAvailable() {
    return this._isAvailable;
  }
  set isAvailable(status) {
    if (typeof status === "boolean") {
      this._isAvailable = status;
    } else {
      console.log("Failed, status needs to be of type bool");
    }
  }
  borrowBook() {
    if (this._isAvailable) {
      this._isAvailable = false;
      console.log(`You have borrowed ${this.title}`);
    } else {
      console.log(`Sorry, "${this.title}" is currently unavailable.`);
    }
  }
  returnBook() {
    if (!this._isAvailable) {
      this._isAvailable = true;
      console.log(`You have returned ${this.title}`);
    } else {
      console.log(`${this.title} is already available`);
    }
  }
  static bookCount() {
    return Book.count;
  }
}

let test = new Book("Harry Potter", "JK rowlings", 7863, true);
let test2 = new Book("Harry Potter", "JK rowlings", 7863, true);

// test.borrowBook();
// test.borrowBook();
// test2.returnBook();
// console.log(Book.count);

class Library {
  static count = 0;
  constructor(books) {
    this.books = books;
    Library.count = this.books.length;
  }
}
let lib = new Library([test, test2]);

console.log(Library.count);

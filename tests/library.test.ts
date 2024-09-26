// tests/library.test.ts
import { Library } from "../src/library";

describe("Library Management System", () => {
  let library: Library;

  beforeEach(() => {
    library = new Library();
  });

  test("should add a book to the library", () => {
    library.addBook(
      "123456789",
      "The Great Gatsby",
      "F. Scott Fitzgerald",
      1925
    );
    const books = library.viewAvailableBooks();
    expect(books.length).toBe(1);
    expect(books[0].title).toBe("The Great Gatsby");
  });
  // tests/library.test.ts
  test("should allow a user to borrow a book if it is available", () => {
    library.addBook(
      "123456789",
      "The Great Gatsby",
      "F. Scott Fitzgerald",
      1925
    );
    library.borrowBook("123456789");
    const books = library.viewAvailableBooks();
    expect(books.length).toBe(0); // Book is borrowed, so it shouldn't be available
  });

  test("should throw an error if the book is not available", () => {
    library.addBook(
      "123456789",
      "The Great Gatsby",
      "F. Scott Fitzgerald",
      1925
    );
    library.borrowBook("123456789"); // Borrow first
    expect(() => library.borrowBook("123456789")).toThrow(
      "Book is not available"
    );
  });

  // tests/library.test.ts
  test("should allow a user to return a borrowed book", () => {
    library.addBook(
      "123456789",
      "The Great Gatsby",
      "F. Scott Fitzgerald",
      1925
    );
    library.borrowBook("123456789");
    library.returnBook("123456789");
    const books = library.viewAvailableBooks();
    expect(books.length).toBe(1); // Book should be available after return
  });
});




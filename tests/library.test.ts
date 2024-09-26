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
});

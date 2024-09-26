// src/library.ts
export class Book {
  constructor(
    public isbn: string,
    public title: string,
    public author: string,
    public year: number,
    public isAvailable: boolean = true
  ) {}
}

export class Library {
  private books: Book[] = [];

  addBook(isbn: string, title: string, author: string, year: number): void {
    const newBook = new Book(isbn, title, author, year);
    this.books.push(newBook);
  }

  viewAvailableBooks(): Book[] {
    return this.books.filter((book) => book.isAvailable);
  }
}

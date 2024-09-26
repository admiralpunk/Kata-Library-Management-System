Here is the entire `README.md` content in markdown format:

```markdown
# Library Management System

This is a simple library management system written in TypeScript that allows users to add, borrow, return, and view available books in a library. The system follows Test-Driven Development (TDD) principles, and Jest is used for testing.

## Features

- **Add Books**: Users can add new books to the library.
- **Borrow Books**: Users can borrow available books from the library.
- **Return Books**: Users can return borrowed books, making them available again.
- **View Available Books**: Users can view all books that are currently available.

## Technologies Used

- **TypeScript**: Main language for the project.
- **Jest**: Testing framework.
- **Node.js**: JavaScript runtime.
- **Git**: Version control.

## Requirements

- Node.js (version 14 or higher)
- npm (Node package manager)
- Git

## Setup Instructions

Follow these steps to set up and run the project:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd library-management-system
   ```

2. **Install dependencies**:
   Run the following command to install the required packages:
   ```bash
   npm install
   ```

3. **Run the tests**:
   This project uses Jest for testing. Run the following command to execute the test suite:
   ```bash
   npm test
   ```

4. **View the code**:
   - The main code for the library management system is located in the `src/library.ts` file.
   - The test cases are written in the `tests/library.test.ts` file.

## Usage

After setting up the project, you can view the available features by running the tests or using the classes in `library.ts`:

- **Adding a book**:
  ```typescript
  const library = new Library();
  library.addBook('123456789', 'The Great Gatsby', 'F. Scott Fitzgerald', 1925);
  ```

- **Borrowing a book**:
  ```typescript
  library.borrowBook('123456789');
  ```

- **Returning a book**:
  ```typescript
  library.returnBook('123456789');
  ```

- **Viewing available books**:
  ```typescript
  const availableBooks = library.viewAvailableBooks();
  ```

## Project Structure

```bash
library-management-system
├── src
│   └── library.ts           # Main implementation of the library management system
├── tests
│   └── library.test.ts      # Unit tests for the library management system
├── package.json             # Project metadata and dependencies
├── tsconfig.json            # TypeScript configuration
├── jest.config.js           # Jest configuration
├── README.md                # This file
```

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Add a new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a Pull Request

## License

This project is licensed under the MIT License.
```

### Instructions:
- Replace `<repository-url>` with the actual URL of your Git repository before using the README.

This content should work directly as a `README.md` file in your project.

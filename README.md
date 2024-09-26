## Library Management System (TypeScript)

This project implements a simple library management system using TypeScript and Test-Driven Development (TDD).

### Project Setup

1. Create a directory for your project (e.g., `library-management-system`).
2. Initialize a Git repository: `git init`
3. Create a README file (README.md) explaining the project and setup instructions. Commit it:

```markdown
echo "# Library Management System (TypeScript)" > README.md
git add README.md
git commit -m "Initial commit with README"
```

### Dependencies

This project uses Jest as a testing framework. Install it:

```bash
npm install --save-dev jest
```

### Code Structure

The project is organized into two main folders:

* `src`: Contains the source code for the library management system logic (`library.ts`).
* `tests`: Contains test files for the functionality (`library.spec.ts`).

### Test-Driven Development (TDD)

This project adheres to the TDD approach:

1. **Write a Test:** Identify and write a test for the desired functionality in `library.spec.ts` before implementing it in `library.ts`.
2. **Make the Test Pass:** Implement the functionality in `library.ts` to make the failing test pass.
3. **Refactor (Optional):** Once the test passes, refactor the code for improved readability and maintainability.
4. **Repeat:** Repeat steps 1-3 for all functionalities.

### Running the System

While the kata focuses on code, you can directly call the implemented functions from your `library.ts` file to test them manually.

### Git Workflow

* **Track Your Progress:** After completing each functionality, commit your changes with meaningful messages describing the implemented feature.
* **Version Control:** Once all features are implemented and tests pass, push your code to a remote repository (e.g., GitHub, GitLab) for version control.

### Additional Notes

* Consider exploring more robust data structures (e.g., Maps) for storing book information.
* Implement error handling for invalid inputs or unavailable books.
* You can further extend the system by adding functionalities like searching or filtering books by different criteria.

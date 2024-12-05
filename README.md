# Unhandled Error in Express Route Parameter

This repository demonstrates a common error in Express.js route handlers:  failure to handle cases where route parameters are invalid or missing.  The example focuses on a route that expects an integer ID, but doesn't check the input to make sure it's a valid integer before attempting to use it.

## The Bug

The `bug.js` file contains an Express.js route handler that fetches a user by ID.  It fails silently if the provided ID is not a number, leading to unexpected behavior or crashes.

## The Solution

The `bugSolution.js` file shows how to fix this issue. The solution involves adding explicit error handling to check if the provided ID is a valid integer and handling cases where the user is not found. It uses `isNaN` to check for non-numeric input and returns a 404 error appropriately.

## How to Run

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `npm install express` to install Express.js.
4. Run `node bug.js` to run the buggy code (you'll need to have a sample `users` array defined in your code, as shown in the `bug.js` file).
5. Run `node bugSolution.js` to see the corrected version.

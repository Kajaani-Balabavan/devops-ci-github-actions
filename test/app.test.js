const request = require("supertest");
const { app, server } = require("../app"); // Import the app and server from app.js

describe("GET /", () => {
  it("should return 200 status and the correct message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe(
      "Basic DevOps CI with GitHub Actions from scratch!"
    );
  });
});

afterAll(() => {
  server.close(); // Close the server after tests are done
});
// This test suite uses supertest to make HTTP requests to the Express app.
// It checks if the root endpoint ("/") returns a 200 status code and the expected message.
// The server is closed after all tests are completed to free up resources.
// To run the tests, you can use a test runner like Jest.
// Make sure to install supertest and jest as dev dependencies in your project:
// npm install --save-dev supertest jest
// Then, you can run the tests using the command:
// npm test
// or if you have a script in package.json, you can run it with:
// npm run test
// This will execute the test suite and provide you with the results in the console.
// You can also add a test script in your package.json file like this:
// "scripts": {
//   "test": "jest"
// }

# Authentication and Testing Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Authentication and Testing**. During this sprint, you studied **authentication, JSON web tokens, unit testing, and backend testing**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a dad jokes app**.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers on Monday following the challenge submission. For more information on the review process [click here.](https://www.notion.so/bloomtech/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Setup

- [ ] Run `npm install` to install your dependencies.
- [ ] Build your database executing `npm run migrate`.
- [ ] Run tests locally executing `npm test`.

## Project Instructions

Dad jokes are all the rage these days! In this challenge, you will build a real wise-guy application.

Users must be able to call the `[POST] /api/auth/register` endpoint to create a new account, and the `[POST] /api/auth/login` endpoint to get a token.

We also need to make sure nobody without the token can call `[GET] /api/jokes` and gain access to our dad jokes.

We will hash the user's password using `bcryptjs`, and use JSON Web Tokens and the `jsonwebtoken` library.

### MVP

Your finished project must include all of the following requirements (further instructions are found inside each file):

- [ ] An authentication workflow with functionality for account creation and login, implemented inside `api/auth/auth-router.js`.
- [ ] Middleware used to restrict access to resources from non-authenticated requests, implemented inside `api/middleware/restricted.js`.
- [ ] A minimum of 2 tests per API endpoint, written inside `api/server.test.js`.

**IMPORTANT Notes:**

- Do not exceed 2^8 rounds of hashing with `bcryptjs`.
- If you use environment variables make sure to provide fallbacks in the code (e.g. `process.env.SECRET || "shh"`).
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries. Do not update existing packages.
- The database already has the `users` table, but if you run into issues, the migration is available.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing.

## Submission format

- [ ] Submit via Codegrade by pushing commits to your `main` branch on Github.
- [ ] Check Codegrade before the deadline to compare its results against your local tests.
- [ ] Check Codegrade on the days following the Sprint Challenge for reviewer feedback.
- [ ] New commits will be evaluated by Codegrade if pushed _before_ the sprint challenge deadline.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics.

1. Differences between using _sessions_ or _JSON Web Tokens_ for authentication.

Sessions are an authentication option in which each user that logs in to a platform is saved to a memory system and a cookie may be issued to transfer data such as the session ID. With sessions, the server can terminate a user's session on demand. On the other hand, JWTs are a lightweight method of authentication based on the platform API being able to verify the authenticity of each token it receives. With JWTs, the client has more responsibility in persisting their authentication. In either case, they are both attempts at persisting user sessions because HTTP is stateless.

In terms of session memory stores, they can be a simple in-memory object stored in your server-side code or a complete server/database dedicated to that memory. JWTs can remove the need for multiple servers on a project.
 

2. What does `bcryptjs` do to help us store passwords in a secure manner?

Bcryptjs gives us access to a hashing function that we can use to create a secure representation of a user's password, as a complex string, before it is stored in the database. Given the same inputs, the function will always produce the same hash. The function uses salt by default further enhancing the strength of the password as well as eliminating 2 users sharing the same hash. It is also possible to set the rounds of hashing that you would like the function to go through, again, further enhancing the security of the hash that is produced.

3. How are unit tests different from integration and end-to-end testing?

Unit testing involves making sure that a specific code function works as intended in isolation from the rest of our program. This differs from integration testing where we test how different parts of the program work in unison, and also from end-to-end testing where we test an entire flow of an application or mock the way a user would interact with our platform. Unit tests are meant to be very focused, fast, and run often. They act as the base of our platform's testing landscape before introducing the broader scopes of testing. 

4. How does _Test Driven Development_ change the way we write applications and tests?

Test-Driven Development is unique in that it provides a blueprint of how we want pieces of our program to operate at a very low level. Therefore, before we write any project code, we know precisely what the outputs should be, keeping our work focused and non-tangential. When we implement enough code to make a test pass we are given instant feedback and the confidence to move forward with refactoring the code and adding new features, knowing that regressions will be caught by our tests. 
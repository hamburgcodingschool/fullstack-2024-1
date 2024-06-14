# A simple date string formatter to make entering dates easier

## Install

Run `npm ci` in this folder to get all dependencies

## Test

Run `npm test` or `npx jest` in this folder.

The dataService only has getAll() and get(id) here.
To be complete, it would still need
- add(item)
- update(item)
- remove(id)

`get(id)` and `add(item)` already have a skeleton for their tests that just need to be filled. Try adding their test code and writing the `add(item)` function to do all the tests ask of it.

The controller functions in `app.js` are in the same state. In this case, we are mocking the `dataService` as we already tested it before and are only interested in the controller functions. To check what they send, we also have to mock the `res.json()` function and pass a `req` object containing it.

There is a filled version of this in `feat/test_get_add`.

## To see it in action

There is no frontend to this - but one could use a tool like [postman](https://www.postman.com/) to construct requests to `localhost:3000/data/` and see what they return. The get functions could even be called in the browser.

To start it, run `npm start` or `node server.js`

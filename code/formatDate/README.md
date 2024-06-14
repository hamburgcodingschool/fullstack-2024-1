# A simple date string formatter to make entering dates easier

## Install

Run `npm ci` in this folder to get all dependencies

## Test

Run `npm test` or `npx jest` in this folder.
Try changing the first line in formatDate.test.js to get `formatDate` from `formatDateNaive.js` instead: There is one case it doesn't cover, and adding that without breaking others is difficult in that implementation. But since the tests were there, that is quick to see as one doesn't have to manually check them all. The same goes for seeing that the better version still covers everything that worked before.

## To see it in action

Run `npx http-server` in this folder and visit [http://localhost:8080](http://localhost:8080)

To see only the formatDate which has the test, remove the 'input' event listener in dateField.js

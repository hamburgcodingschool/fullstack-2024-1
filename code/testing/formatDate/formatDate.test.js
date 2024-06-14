const { formatDate } = require('./formatDate.js');

// This way of testing is nice for functions like these, where there are a lot of in- and output combinations
// that do not need additional descriptions or setup
// Each entry in the array has its input followed by the expected output
// and the actual test code is created by looping them.
describe('formatDate(str)', () => {
  const cases = [
    // ['1', '1', true], // <- this would exclude all other tests
    ['1', '1'],
    ['12', '12.'],
    ['12.', '12.'],
    ['121', '12.1'],
    ['12.1', '12.1'],
    ['1212', '12.12.'],
    ['12.12', '12.12.'],
    ['12.12.', '12.12.'],
    ['12121', '12.12.1'],
    ['12.121', '12.12.1'],
    ['12.12.1', '12.12.1'],
    ['121212', '12.12.2012'],
    ['12.12.12', '12.12.2012'],
    // adding leading zeroes
    ['1.', '01.'],
    ['1.1', '01.1'],
    ['1.1.', '01.01.'],
    ['12.1.', '12.01.'],
    ['1.12.', '01.12.'],
    ['1.1.1', '01.01.1'],
    ['12.1.1', '12.01.1'],
    ['1.12.1', '01.12.1'],
    ['12.12.1', '12.12.1'],
    ['1.1.12', '01.01.2012'],
    ['1.1112', '01.11.2012'],
    ['12.1.12', '12.01.2012'],
    ['1.12.12', '01.12.2012'],
  ];
  for ([input, output, only] of cases) { // Array destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    if (!only) {
      it(`${input} -> ${output}`, () => {
        expect(formatDate(input)).toBe(output);
      });
    } else {
      // https://jestjs.io/docs/api#testonlyname-fn-timeout
      fit(`${i} -> ${o}`, () => {
        expect(formatDate(input)).toBe(output);
      });
    }
  } 
});

// Another way to do the same using [it.each](https://jestjs.io/docs/api#testeachtablename-fn-timeout):
// The only disadvantage is that we can't easily turn only/fit on for individual cases.
// But, its a little cleaner this way.
describe('formatDate(str)', () => {
  it.each([
    ['1', '1'],
    ['12', '12.'],
    ['12.', '12.'],
    ['121', '12.1'],
    ['12.1', '12.1'],
    ['1212', '12.12.'],
    ['12.12', '12.12.'],
    ['12.12.', '12.12.'],
    ['12121', '12.12.1'],
    ['12.121', '12.12.1'],
    ['12.12.1', '12.12.1'],
    ['121212', '12.12.2012'],
    ['12.12.12', '12.12.2012'],
    // adding leading zeroes
    ['1.', '01.'],
    ['1.1', '01.1'],
    ['1.1.', '01.01.'],
    ['12.1.', '12.01.'],
    ['1.12.', '01.12.'],
    ['1.1.1', '01.01.1'],
    ['12.1.1', '12.01.1'],
    ['1.12.1', '01.12.1'],
    ['12.12.1', '12.12.1'],
    ['1.1.12', '01.01.2012'],
    ['1.1112', '01.11.2012'],
    ['12.1.12', '12.01.2012'],
    ['1.12.12', '01.12.2012'],
  ])('%s -> %s', (input, output) => {
    expect(formatDate(input)).toBe(output);
  });
});

const { data } = require('./data.js');
const dataService = require('./dataService.js');

describe('dataService', () => {
  beforeEach(() => {
    // "mocking" data to be in a consistent state for all tests
    data.length = 0; // clears the array without creating a new one
    data.push({
      id   : 0,
      name : 'foo',
    });
  });

  describe('getAll()', () => {
    it('returns all the data', () => {
      // act / assert
      // toEqual() instead of toBe() as we are only returning a copy of the object
      // toBe() would check for the exact object reference while toEqual() only wants them to look the same
      // Try changing it to toBe() and see what it says
      expect(dataService.getAll()).toEqual(data);
    });

    it('only returns a copy of the data', () => {
      // act
      const result = dataService.getAll();
      result[0].name = 'gotcha';

      // assert
      expect(data[0].name).toBe('foo');
    });
  });

  describe('get(id)', () => {
    it('returns the data entry with the matching id', () => {
      // act / assert
    });

    it('only returns a copy of the data entry', () => {
      // act

      // assert
    });

    describe('when no entry is found', () => {
      it('returns undefined', () => {
        // act / assert
      });
    });
  });

  describe('add(newItem)', () => {
    let newItem;

    beforeEach(() => {
      newItem = {
        id   : 1,
        name : 'bar',
      };
    });

    it('adds the item', () => {
      // act

      // assert
    });

    it('returns the added item', () => {
      // act / assert
    });

    it('only stores a copy of the added item', () => {
      // act

      // assert
    });

    it('only returns a copy of the added item', () => {
      // act

      // assert
    });

    it('only returns a copy of the stored item', () => {
      // act

      // assert
    });
  });
});

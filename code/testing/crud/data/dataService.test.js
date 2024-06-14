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
      expect(dataService.get(0)).toEqual(data[0]);
    });

    it('only returns a copy of the data entry', () => {
      // act
      const item = dataService.get(0);
      item.name = 'gotcha';

      // assert
      expect(data[0].name).toBe('foo');
    });

    describe('when no entry is found', () => {
      it('returns undefined', () => {
        // act / assert
        expect(dataService.get(1)).toBeUndefined();
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
      dataService.add(newItem);

      // assert
      expect(data[1]).toEqual(newItem);
      // this also works, but includes the get function again when we only want to test add
      // expect(dataService.get(1)).toEqual(newItem)
    });

    it('returns the added item', () => {
      // act / assert
      expect(dataService.add(newItem)).toEqual(newItem);
    });

    it('only stores a copy of the added item', () => {
      // act
      dataService.add(newItem);
      newItem.name = 'gotcha';

      // assert
      expect(data[1].name).toBe('bar');
    });

    it('only returns a copy of the added item', () => {
      // act
      const item = dataService.add(newItem);
      item.name = 'gotcha';

      // assert
      expect(newItem.name).toBe('bar');
    });

    it('only returns a copy of the stored item', () => {
      // act
      const item = dataService.add(newItem);
      item.name = 'gotcha';

      // assert
      expect(data[1].name).toBe('bar')
    });
  });
});

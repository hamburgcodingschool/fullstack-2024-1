const controllers = require('./dataControllers.js');
const dataService = require('../data/dataService.js');

// https://jestjs.io/docs/mock-functions#mocking-modules
jest.mock('../data/dataService.js');

describe('the data controllers', () => {
  const data = [
    {
      id   : 0,
      name : 'foo',
    },
  ];

  describe('getAll', () => {
    // dataService.getAll() is only used here, so no need to mock it on a higher level
    beforeAll(() => {
      // we don't need to test getAll again here
      // so we just make it always return the same fake data
      // https://jestjs.io/docs/mock-functions#mock-return-values
      dataService.getAll.mockReturnValue(data);
    });
    afterEach(() => {
      // the mocked function keeps track of how many times its been called
      // if one test causes it to be called and we checked if it was called in the next,
      // the call from the first would carry over. So, we use this to clear its history afterwards.
      // https://jestjs.io/docs/mock-function-api#mockfnmockclear
      dataService.getAll.mockClear();
    });

    it('sends all data', () => {
      // arrange
      const req = {};
      const res = {
        // https://jestjs.io/docs/mock-functions#using-a-mock-function
        json: jest.fn(),
      };

      // act
      controllers.getAll(req, res);

      // assert
      expect(res.json).toHaveBeenCalledWith(data);
    });
  });

  describe('get', () => {
    beforeAll(() => {
    });
    afterEach(() => {
    });

    it('sends the data item', () => {
      // act
      // assert
    });

    describe('when no item is found', () => {
      it('sends a 404 Not Found', () => {
        // arrange
        // act
        // assert
      });
    });
  });

  describe('add', () => {
    let newItem;

    beforeAll(() => {

    });
    afterEach(() => {

    });

    it('saves the new item', () => {

    });

    it('sends the new item', () => {

    });

    describe('when the item already exists', () => {
      it('sends a 409 Conflict', () => {

      });
    });
  });
});

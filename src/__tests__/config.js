// @flow
import Config from '../config';

const mockConfigObj = {
  backslash: '\\testing',
  backslashValue: 'testing',
  envTest: 'TEST_VALUE',
  envTestValue: 'test value',
  test: 'testValue'
};

describe('Config', () => {
  beforeEach(() => {
    Config.cfg = jest.fn(key => mockConfigObj[key]);
  });

  afterEach(() => {
    jest.fn().mockReset();
    delete Config.env[mockConfigObj.envTest];
  });

});

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

  it('should remove backslash from the start of a value', () => {
    Config.cfg.backslash = mockConfigObj.backslash;
    const value = Config.get('backslash');

    expect.assertions(1);
    expect(value).toBe(mockConfigObj.backslashValue);
  });
});

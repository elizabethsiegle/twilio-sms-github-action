const mod = require('../index');

describe('check exports', () => {
  test('check if ahoy is set correctly', () => {
    expect(mod.ahoy).toEqual('Ahoy from Twilio!');
  });
});

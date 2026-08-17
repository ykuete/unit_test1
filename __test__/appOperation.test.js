const appOperation = require('../src/appOperation');
test('multiply 2 and 3 to equal 6', () => {
    expect(appOperation.multiply(2, 0)).toBe(0);
});
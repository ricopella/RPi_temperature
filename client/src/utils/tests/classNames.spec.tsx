import classNames from '../classNames';

describe('ClassNames utility', () => {
  it('should return a string of space separated values', () => {
    const assertions = new Map([
      [{}, ''],
      [{ foo: true }, 'foo'],
      [{ foo: false }, ''],
      [{ foo: true, bar: true, baz: true }, 'foo bar baz'],
      [{ foo: false, bar: true }, 'bar'],
      [{ foo: false, bar: true, baz: true }, 'bar baz'],
    ]);

    assertions.forEach((value, key) => {
      expect(classNames(key)).toEqual(value);
    });
  });
});

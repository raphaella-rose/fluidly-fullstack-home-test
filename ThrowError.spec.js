const ThrowError = require('./ThrowError')

describe(ThrowError, () => {
    it('throws error for string mismatch', () => {
        const throwError = new ThrowError();
        const throwString = throwError.string("abcef", "abc");
        expect(throwString).toBe('Expected "abcef" but found "abc"')
    })
})
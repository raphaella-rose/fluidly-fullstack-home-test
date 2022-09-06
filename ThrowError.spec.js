const ThrowError = require('./ThrowError')

describe(ThrowError, () => {
    it('throws error for string mismatch, "abcef" "abc"', () => {
        const throwError = new ThrowError();
        const throwString = throwError.string("abcef", "abc");
        expect(throwString).toBe('Expected "abcef" but found "abc"')
    })

    it('throws error for string mismatch, "dog" "dogs"', () => {
        const throwError = new ThrowError();
        const throwString = throwError.string('dog', 'dogs');
        expect(throwString).toBe('Expected "dog" but found "dogs"');
       
    })
})
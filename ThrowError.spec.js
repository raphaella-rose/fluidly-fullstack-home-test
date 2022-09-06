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

    it('throws error for string mismatch, "chocolate" "sweets"', () => {
        const throwError = new ThrowError();
        const throwString = throwError.string('chocolate', 'sweets');
        expect(throwString).toBe('Expected "chocolate" but found "sweets"');
       
    })

    it('throws error for number mismatch, 1 2', () => {
        const throwError = new ThrowError();
        const throwNumber = throwError.number(1, 2);
        expect(throwNumber).toBe('Expected 1 but found 2')
    })

    it('throws error for number mismatch, 3 5', () => {
        const throwError = new ThrowError();
        const throwNumber = throwError.number(3, 5);
        expect(throwNumber).toBe('Expected 3 but found 5')
    })

    it('throws error for number mismatch, 7 9', () => {
        const throwError = new ThrowError();
        const throwNumber = throwError.number(7, 9);
        expect(throwNumber).toBe('Expected 7 but found 9')
    })

    it('throws error for type mismatch, "1" 1', () => {
        const throwError = new ThrowError();
        const throwType = throwError.type("1", 1);
        expect(throwType).toBe('Expected type string but found type number')
    })
})
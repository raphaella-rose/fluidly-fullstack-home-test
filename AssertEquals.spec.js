const AssertEquals = require('./AssertEquals');

describe(AssertEquals, () => {

    describe('when expected and actual are the same string or number', () => {
        it('returns without throwing an error', () => {
            const throwErrorDouble = { string: () => (null) };
            const assertEqualsString = new AssertEquals('abc', 'abc', throwErrorDouble);
            const assertEqualsNumber = new AssertEquals(1, 1, throwErrorDouble);
            expect(() => assertEqualsString.isEqual().not.toThrow())
            expect(() => assertEqualsNumber.isEqual().not.toThrow())
        })
      })

    // testing for 2 strings
    describe('when expected and actual are different strings, "abcef" "abc"', () => {
        it('throws an error', () => {
            const throwErrorDouble = { string: () => ('Expected "abcef" but found "abc"') }
            const assertEquals = new AssertEquals('abcef', 'abc', throwErrorDouble);
            expect(() => assertEquals.isEqual()).toThrow('Expected "abcef" but found "abc"');
    })
  })

   // testing for two numbers
   describe('when expected and actual are different numbers, 1 2', () => {
        it('throws an error', () => {
            const throwErrorDouble = { number: () => ('Expected 1 but found 2') }
            const assertEquals = new AssertEquals(1, 2, throwErrorDouble);
            expect(() => assertEquals.isEqual()).toThrow('Expected 1 but found 2');
    })
  })
})
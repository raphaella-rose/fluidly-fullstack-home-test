const AssertEquals = require('./AssertEquals');

describe(AssertEquals, () => {

    describe('when expected and actual are the same string or number', () => {
        it('returns without throwing an error', () => {
      
            const throwErrorDouble = { isEqual: () => (null) }
            const assertEqualsString = new AssertEquals('abc', 'abc', throwErrorDouble);
            const assertEqualsNumber = new AssertEquals(1, 1, throwErrorDouble);
            expect(() => assertEqualsString.isEqual().not.toThrow())
            expect(() => assertEqualsNumber.isEqual().not.toThrow())
        })
      })
})
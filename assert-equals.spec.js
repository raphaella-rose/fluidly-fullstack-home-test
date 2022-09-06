const assertEquals = require('./assert-equals')
const AssertEquals = require('./AssertEquals')
const ThrowError = require('./ThrowError')

describe('assertEquals integration', () => {
  
  describe('when expected and actual are the same string or number', () => {
    it('returns without throwing an error', () => {
  
      const throwError = new ThrowError();
      const assertEqualsString = new AssertEquals('abc', 'abc', throwError);
      const assertEqualsNumber = new AssertEquals(1, 1, throwError);
      expect(() => assertEqualsString.isEqual().not.toThrow())
      expect(() => assertEqualsNumber.isEqual().not.toThrow())
    })
  })

  // testing for 2 strings
  describe('when expected and actual are different strings, "abcef" "abc"', () => {
    it('throws an error', () => {
      const throwError = new ThrowError();
      const assertEquals = new AssertEquals('abcef', 'abc', throwError);
      expect(() => assertEquals.isEqual()).toThrow('Expected "abcef" but found "abc"');
    })
  })

  describe('when expected and actual are different strings, "dog" "dogs"', () => {
    it('throws an error', () => {
      const throwError = new ThrowError();
      const assertEquals = new AssertEquals('dog', 'dogs', throwError);
      expect(() => assertEquals.isEqual()).toThrow('Expected "dog" but found "dogs"');
    })
  })

  describe('when expected and actual are different strings, "chocolate" "sweets"', () => {
    it('throws an error', () => {
      const throwError = new ThrowError();
      const assertEquals = new AssertEquals('chocolate', 'sweets', throwError);
      expect(() => assertEquals.isEqual()).toThrow('Expected "chocolate" but found "sweets"');
    })
  })

  // testing for two numbers
  describe('when expected and actual are different numbers, 1 2', () => {
    it('throws an error', () => {
      const throwError = new ThrowError();
      const assertEquals = new AssertEquals(1, 2, throwError);
      expect(() => assertEquals.isEqual()).toThrow('Expected 1 but found 2');
    })
  })

  describe('when expected and actual are different numbers, 3 5', () => {
    it('throws an error', () => {
      const throwError = new ThrowError();
      const assertEquals = new AssertEquals(3, 5, throwError);
      expect(() => assertEquals.isEqual()).toThrow('Expected 3 but found 5');
    })
  })

  describe('when expected and actual are different numbers, 2 7', () => {
    it('throws an error', () => {
      const throwError = new ThrowError();
      const assertEquals = new AssertEquals(2, 7, throwError);
      expect(() => assertEquals.isEqual()).toThrow('Expected 2 but found 7');
    })
  })

//   // testing for a number and a string
//   describe('when expected and actual are different types, 1 "1"', () => {
//     it('throws an error', () => {
//       const throwError = new ThrowError();
//       expect(() => assertEquals(1, '1', throwError)).toThrow('Expected type number but found type string');
//     })
//   })

//   describe('when expected and actual are different types, "2" 2', () => {
//     it('throws an error', () => {
//       const throwError = new ThrowError();
//       expect(() => assertEquals('2', 2, throwError)).toThrow('Expected type string but found type number');
//     })
//   })

//   describe('when expected and actual are different types, 4 "4', () => {
//     it('throws an error', () => {
//       const throwError = new ThrowError();
//       expect(() => assertEquals(4, "4", throwError)).toThrow('Expected type number but found type string');
//     })
//   })

//   // testing for two arrays of different lengths
//   describe('when expected and actual are different length arrays, ["a", "b"] ["a", "b", "c"]', () => {
//     it('throws an error', () => {
//       const throwError = new ThrowError();
//       expect(() => assertEquals(["a", "b"], ["a", "b", "c"], throwError)).toThrow('Expected array length 2 but found 3');
//     })
//   })

//   describe('when expected and actual are different length arrays, [1, 2, 3] [1, 2, 3, 4]', () => {
//     it('throws an error', () => {
//       const throwError = new ThrowError();
//       expect(() => assertEquals([1, 2, 3], [1, 2, 3, 4], throwError)).toThrow('Expected array length 3 but found 4');
//     })
//   })

//   describe('when expected and actual are different length arrays, [1, 2, 3, 4, 5] [1, 2, 3, 4]', () => {
//     it('throws an error', () => {
//       const throwError = new ThrowError();
//       expect(() => assertEquals([1, 2, 3, 4, 5], [1, 2, 3, 4], throwError)).toThrow('Expected array length 5 but found 4');
//     })
//   })

//   // testing for two different arrays
//   describe('when expected and actual are different arrays, ["a", "b"] ["a", "d"]', () => {
//     it('throws an error', () => {
//       const throwError = new ThrowError();
//       expect(() => assertEquals(["a", "b"], ["a", "d"], throwError)).toThrow('Expected "b" but found "d"');
//     })
//   })

//   describe('when expected and actual are different arrays, [1, 2] [1, 3]', () => {
//     it('throws an error', () => {
//       const throwError = new ThrowError();
//       expect(() => assertEquals([1, 2], [1, 3], throwError)).toThrow('Expected 2 but found 3');
//     })
//   })

//   describe('when expected and actual are different arrays, [1, 3, 3] [1, 2, 3]', () => {
//     it('throws an error', () => {
//       const throwError = new ThrowError();
//       expect(() => assertEquals([1, 3, 3], [1, 2, 3], throwError)).toThrow('Expected 3 but found 2');
//     })
//   })
})
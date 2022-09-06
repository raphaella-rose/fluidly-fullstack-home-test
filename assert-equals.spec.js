const assertEquals = require('./assert-equals')

describe('assertEquals', () => {
  // testing for 2 strings
  describe('when expected and actual are the same string or number', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals('abc', 'abc')).not.toThrow()
      expect(() => assertEquals(1, 1)).not.toThrow()
    })
  })

  describe('when expected and actual are different strings, "abcef" "abc"', () => {
    it('throws an error', () => {
      expect(() => assertEquals('abcef', 'abc')).toThrow('Expected "abcef" but found "abc"');
    })
  })

  describe('when expected and actual are different strings, "dog" "dogs"', () => {
    it('throws an error', () => {
      expect(() => assertEquals('dog', 'dogs')).toThrow('Expected "dog" but found "dogs"');
    })
  })

  describe('when expected and actual are different strings, "chocolate" "sweets"', () => {
    it('throws an error', () => {
      expect(() => assertEquals('chocolate', 'sweets')).toThrow('Expected "chocolate" but found "sweets"');
    })
  })

  // testing for two numbers
  describe('when expected and actual are different numbers, 1 2', () => {
    it('throws an error', () => {
      expect(() => assertEquals(1, 2)).toThrow('Expected 1 but found 2');
    })
  })

  describe('when expected and actual are different numbers, 3 5', () => {
    it('throws an error', () => {
      expect(() => assertEquals(3, 5)).toThrow('Expected 3 but found 5');
    })
  })

  describe('when expected and actual are different numbers, 2 7', () => {
    it('throws an error', () => {
      expect(() => assertEquals(2, 7)).toThrow('Expected 2 but found 7');
    })
  })

  // testing for a number and a string
  describe('when expected and actual are different types, 1 "1"', () => {
    it('throws an error', () => {
      expect(() => assertEquals(1, '1')).toThrow('Expected type number but found type string');
    })
  })

  describe('when expected and actual are different types, "2" 2', () => {
    it('throws an error', () => {
      expect(() => assertEquals('2', 2)).toThrow('Expected type string but found type number');
    })
  })

  describe('when expected and actual are different types, 4 "4', () => {
    it('throws an error', () => {
      expect(() => assertEquals(4, "4")).toThrow('Expected type number but found type string');
    })
  })

  // testing for two arrays
  describe('when expected and actual are different length arrays, ["a", "b"] ["a", "b", "c"]', () => {
    it('throws an error', () => {
      expect(() => assertEquals(["a", "b"], ["a", "b", "c"])).toThrow('Expected array length 2 but found 3');
    })
  })

  describe('when expected and actual are different length arrays, [1, 2, 3] [1, 2, 3, 4]', () => {
    it('throws an error', () => {
      expect(() => assertEquals([1, 2, 3], [1, 2, 3, 4])).toThrow('Expected array length 3 but found 4');
    })
  })

  describe('when expected and actual are different length arrays, [1, 2, 3, 4, 5] [1, 2, 3, 4]', () => {
    it('throws an error', () => {
      expect(() => assertEquals([1, 2, 3, 4, 5], [1, 2, 3, 4])).toThrow('Expected array length 5 but found 4');
    })
  })
})
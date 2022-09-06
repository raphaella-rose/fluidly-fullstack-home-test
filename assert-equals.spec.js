const assertEquals = require('./assert-equals')

describe('assertEquals', () => {
  describe('when expected and actual are the same string', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals('abc', 'abc')).not.toThrow()
    })

  })

  describe('when expected and actual are different strings "abcef" "abc"', () => {
    it('throws an error', () => {
      expect(() => assertEquals('abcef', 'abc')).toThrow('Expected "abcef" but found "abc"');
    })
  })

  describe('when expected and actual are different strings "dog" "dogs"', () => {
    it('throws an error', () => {
      expect(() => assertEquals('dog', 'dogs')).toThrow('Expected "dog" but found "dogs"');
    })
  })

  describe('when expected and actual are different strings "chocolate" "sweets"', () => {
    it('throws an error', () => {
      expect(() => assertEquals('chocolate', 'sweets')).toThrow('Expected "chocolate" but found "sweets"');
    })
  })
})
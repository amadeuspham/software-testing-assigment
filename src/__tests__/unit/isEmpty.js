import isEmpty from '../../isEmpty'

describe('isEmpty should check if a value is empty object, collection, map, or set if they have no own enumerable string keyed properties', () => {
  it('should return true if the value is empty', () => {
    expect(isEmpty(null)).toBe(true)
  })
  it('should return true if the value is a boolean', () => {
    expect(isEmpty(true)).toBe(true)
  })
  it('should return true if the value is a number', () => {
    expect(isEmpty(1)).toBe(true)
  })
  it('should return false if the value is an array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
  })
  it('should return false if the value is a string', () => {
    expect(isEmpty('abc')).toBe(false)
  })
  it('should return false if the value is an object', () => {
    expect(isEmpty({ 'a': 1 })).toBe(false)
  })
})

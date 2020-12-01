import isObject from '../../isObject'

describe('isObject should check if a value is an object', () => {
  it('should return true if the value is an object', () => {
    expect(isObject({})).toBe(true)
  })
  it('should return true if the value is an array', () => {
    expect(isObject([1, 2, 3])).toBe(true)
  })
  it('should return true if the value is a function', () => {
    expect(isObject(Function)).toBe(true)
  })
  it('should return false if the value is a null', () => {
    expect(isObject(null)).toBe(false)
  })
})
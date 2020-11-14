import isArrayLikeObject from '../../isArrayLikeObject'

describe('isArrayLikeObject should determine whether a value is array-like and is also an object or not', () => {
  it('should return true if the value is an JS Array', () => {
    expect(isArrayLikeObject([1, 2, 3])).toBe(true)
    expect(isArrayLikeObject([])).toBe(true)
  })
  it('should return true if the value is an children Array', () => {
    expect(isArrayLikeObject(document.body.children)).toBe(true)
  })
  it('should return false if the value is a string', () => {
    expect(isArrayLikeObject('thecrown')).toBe(false)
    expect(isArrayLikeObject('')).toBe(false)
  })
  it('should return false if the value is a Function', () => {
    expect(isArrayLikeObject(Function)).toBe(false)
  })
  it('should return false if the value is a Number', () => {
    expect(isArrayLikeObject(3)).toBe(false)
  })
  it('should return false if the value is a Boolean', () => {
    expect(isArrayLikeObject(true)).toBe(false)
  })
})
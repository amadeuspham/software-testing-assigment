import isObjectLike from '../../isObjectLike'

describe('isObjectLike should check if a value is an object-like if it is not null', () => {
  it('should return true if the value is an object', () => {
    expect(isObjectLike({})).toBe(true)
  })
  it('should return true if the value is an array', () => {
    expect(isObjectLike([1, 2, 3])).toBe(true)
  })
  it('should return false if the value is a function', () => {
    expect(isObjectLike(Function)).toBe(false)
  })
  it('should return false if the value is a null', () => {
    expect(isObjectLike(null)).toBe(false)
  })
})
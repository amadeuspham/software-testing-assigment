import isLength from '../../isLength'

describe('isLength should check if a value is a valid array-like length', () => {
  it('should return true if the value is a number', () => {
    expect(isLength(3)).toBe(true)
  })
  it('should return false if the value is a min value of an object', () => {
    expect(isLength(Number.MIN_VALUE)).toBe(false)
  })
  it('should return false if the value is an infinity', () => {
    expect(isLength(Infinity)).toBe(false)
  })
  it('should return false if the value is a string', () => {
    expect(isLength('3')).toBe(false)
  })
})
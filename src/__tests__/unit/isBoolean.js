import isBoolean from '../../isBoolean'

describe('isBoolean should determine whether a value is a boolean', () => {
  it('should return true for a boolean', () => {
    expect(isBoolean(false)).toBe(true)
  })
  it('should return false for a non-boolean object', () => {
    expect(isBoolean({'a': 1})).toBe(false)
  })
  it('should return false for an object that is not a boolean', () => {
    expect(isBoolean(null)).toBe(false)
  })
})
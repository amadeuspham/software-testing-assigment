import isTypedArray from '../../isTypedArray'

describe('isTypedArray should determine whether a value is a typed array', () => {
  it('should return true for a typed array', () => {
    expect(isTypedArray(new Uint8Array)).toBe(true)
  })
  it('should return false for an array', () => {
    expect(isTypedArray([])).toBe(false)
  })
})
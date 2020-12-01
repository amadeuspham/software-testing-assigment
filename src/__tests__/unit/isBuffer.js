import isBuffer from '../../isBuffer'

describe('isBuffer should determine whether a value is a buffer', () => {
  it('should return true for a buffer', () => {
    expect(isBuffer(new Buffer(2))).toBe(true)
  })
  it('should return false for an object that is not a buffer', () => {
    expect(isBuffer(new Uint8Array(2))).toBe(false)
  })
})
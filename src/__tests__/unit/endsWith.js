import endsWith from '../../endsWith'

describe('endsWith checks if the string ends with the target string', () => {
  it('should return true that Diana ends with a', () => {
    expect(endsWith('Diana', 'a')).toBe(true)
  })
  it('should return false that Charles ends with a', () => {
    expect(endsWith('Charles', 'a')).toBe(false)
  })
  it('should return true that Charles ends with a at index 3', () => {
    expect(endsWith('Diana', 'a', 3)).toBe(true)
  })
  it('should automatically correct the position index to 0 if the given value is negative', () => {
    expect(endsWith('Diana', 'a', -5)).toBe(false)
    expect(endsWith('Diana', 'D', -5)).toBe(false)
    expect(endsWith('Diana', '', -5)).toBe(true)
  })
  it('should automatically correct the position index to the string length if the given value is larger than the length', () => {
    expect(endsWith('Diana', 'a', 50)).toBe(true)
    expect(endsWith('Diana', 'D', 50)).toBe(false)
  })
})
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
})
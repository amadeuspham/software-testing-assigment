import toNumber from '../../toNumber'

describe('toNumber converts the value to a number', () => {
  it('should return correctly with a number', () => {
    expect(toNumber(3.2)).toBe(3.2)
  })
  it('should return correctly with a string', () => {
    expect(toNumber('3.2')).toBe(3.2)
  })
  it('should return correctly with a Infinity number', () => {
    expect(toNumber(Infinity)).toBe(Infinity)
  })
  it('should return correctly with a Min value of a number', () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324)
  })
})

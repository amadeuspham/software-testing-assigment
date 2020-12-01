import toFinite from '../../toFinite'

describe('toFinite converts the value to a finite number', () => {
  it('should return correctly with a number', () => {
    expect(toFinite(3.2)).toBe(3.2)
  })
  it('should return correctly with a string', () => {
    expect(toFinite('3.2')).toBe(3.2)
  })
  it('should return correctly with a Infinity number', () => {
    expect(toFinite(Infinity)).toBe(1.7976931348623157e+308)
  })
  it('should return correctly with a Min value of a number', () => {
    expect(toFinite(Number.MIN_VALUE)).toBe(5e-324)
  })
})

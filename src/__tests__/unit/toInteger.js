import toInteger from '../../toInteger'

describe('toInteger converts the value to an integer number', () => {
  it('should return correctly with an integer number', () => {
    expect(toInteger(3.2)).toBe(3)
  })
  it('should return correctly with a string', () => {
    expect(toInteger('3.2')).toBe(3)
  })
  it('should return correctly with a Infinity number', () => {
    expect(toInteger(Infinity)).toBe(1.7976931348623157e+308)
  })
  it('should return correctly with a Min value of a number', () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0)
  })
})

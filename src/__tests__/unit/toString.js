import toString from '../../toString'

describe('toString converts the value to a string', () => {
  it('should return correctly with a null value', () => {
    expect(toString(null)).toBe('')
  })
  it('should return correctly with -0', () => {
    expect(toString(-0)).toBe('-0')
  })
  it('should return correctly with an array', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3')
  })
  it('should return correctly with a Symbol', () => {
    expect(toString(Symbol.iterator)).toBe('Symbol(Symbol.iterator)')
  })
  it('should return correctly with an Array', () => {
    expect(toString(['a', 'b'])).toBe('a,b')
    expect(toString([null, undefined])).toBe(',')
  })
})

import isSymbol from '../../isSymbol'

describe('isSymbol should check if a value is a symbol', () => {
  it('should return true if the value is symbol', () => {
    expect(isSymbol(Symbol.iterator)).toBe(true)
  })
  it('should return false if the value is a string', () => {
    expect(isSymbol('abc')).toBe(false)
  })
})
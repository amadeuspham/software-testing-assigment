import isArrayLike from '../../isArrayLike'

describe('isArrayLike should check if a value is array-like', () => {
  it('should return true if the value is an JS Array', () => {
    expect(isArrayLike([1, 2, 3])).toBe(true)
    expect(isArrayLike([])).toBe(true)
  })
  it('should return true if the value is an children Array', () => {
    expect(isArrayLike(document.body.children)).toBe(true)
  })
  it('should return true if the value is a string', () => {
    expect(isArrayLike('thecrown')).toBe(true)
    expect(isArrayLike('')).toBe(true)
  })
  it('should return false if the value is a Function', () => {
    expect(isArrayLike(Function)).toBe(false)
  })
  it('should return false if the value is a Number', () => {
    expect(isArrayLike(3)).toBe(false)
  })
  it('should return false if the value is a Boolean', () => {
    expect(isArrayLike(true)).toBe(false)
  })
})


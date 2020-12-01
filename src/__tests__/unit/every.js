import every from '../../every'

describe('every should check if all array values are truthy according to a given predicate', () => {
  it('should check properly when values are converted to Booleans', () => {
    expect(every([true, 1, null, 'yes'], Boolean)).toBe(false)
    expect(every([true, 1, 10, 'yes'], Boolean)).toBe(true)
  })
  it('should check properly when the predicate is a "normal" function', () => {
    function isEven(num) {
      return num % 2 == 0
    }
    expect(every([0, 2, 4, 6], isEven)).toBe(true)
    expect(every([0, 2, 5, 6], isEven)).toBe(false)
  })
  it('should check properly when the predicate is an arrow function', () => {
    const isEven = (num) => {
      return num % 2 == 0
    }
    expect(every([0, 2, 4, 6], isEven)).toBe(true)
    expect(every([0, 2, 5, 6], isEven)).toBe(false)
  })
  it('should always return true for empty array', () => {
    expect(every([], Boolean)).toBe(true)
  })
  it('should intepret length of null values as 0', () => {
    expect(every(null, Boolean)).toBe(true)
  })
})
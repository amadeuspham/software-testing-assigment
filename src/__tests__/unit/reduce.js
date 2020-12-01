import reduce from '../../reduce'

describe('reduce should accumulate elements in an array to an optional accumulator, with a given iteratee function applied on each element', () => {
  it('should work as a typical summation operation', () => {
    expect(reduce([1, 2], (sum, n) => sum + n, 0)).toBe(3)
  })
})
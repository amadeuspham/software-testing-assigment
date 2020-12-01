import memoize from '../../memoize'

describe('memoize should return the new memoized function', () => {
  it('should work with the example in the documentation', () => {
    const object = { 'c': 3, 'd': 4 }
    const values = memoize(values)
    const result = values(object)
    expect(result).toEqual([3, 4])
  })
})
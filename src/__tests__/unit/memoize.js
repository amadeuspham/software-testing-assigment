import memoize from '../../memoize'

describe('memoize should return the new memoized function', () => {
  it('should return correctly with an object', () => {
    const object = { 'c': 3, 'd': 4 }
    const result = memoize(object)
    expect(result).toEqual([1, 2])
  })
})
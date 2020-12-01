import map from '../../map'

describe('map should return returns the new mapped array', () => {
  it('should return correctly with an array collection & a function iteratee', () => {
    function square(n) {
      return n * n
    }
    const result = map([4, 8], square)
    expect(result).toEqual([16, 64])
  })
  it('should still works on null values (return empty arrays)', () => {
    function square(n) {
      return n * n
    }
    const result = map(null, square)
    expect(result).toEqual([])
  })
})
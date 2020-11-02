import chunk from '../../chunk'

describe('chunk should splits array elements into separate arrays of given size', () => {
  it('should split an array correctly when its length is divisible by the given size', () => {
    const original = ['some', 'stuff', false, 2]
    const chunked = [['some', 'stuff'], [false, 2]]
    expect(chunk(original, 2)).toBe(chunked)
  })
  it('should split an array correctly when its length is not divisible by the given size', () => {
    const original = ['some', 'stuff', false, 2]
    const chunked = [['some', 'stuff', false], [2]]
    expect(chunk(original, 3)).toBe(chunked)
  })
  it('should split an array to an array of 1-element arrays when no size is given', () => {
    const original = ['some', 'stuff', false, 2]
    const chunked = [['some'], ['stuff'], [false], [2]]
    expect(chunk(original)).toBe(chunked)
  })
  it('should return an empty array if no array is given', () => {
    expect(chunk()).toStrictEqual([])
  })
})
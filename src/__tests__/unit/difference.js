import difference from '../../difference'

describe('difference should return an array containing elements in the first array that is not in the second', () => {
  it('should be able to differentiate between values of different types', () => {
    expect(difference([1, 0], [1, '0'])).toStrictEqual([0])
  })
  it('should be able to differentiate between different numbers', () => {
    expect(difference([1, 0], [1, 1, 2])).toStrictEqual([0])
    expect(difference([1, 0], [1, 1, 0])).toStrictEqual([])
  })
  it('should be able to differentiate strings', () => {
    expect(difference([1, 'hohay'], [1, '0'])).toStrictEqual(['hohay'])
    expect(difference([1, '0'], [1, '0'])).toStrictEqual([])
  })
  it('should be able to differentiate booleans', () => {
    expect(difference([1, true], [1, false])).toStrictEqual([true])
    expect(difference([1, true], [1, true])).toStrictEqual([])
  })
  it('should consider an object as equivalent to itself, but not if they are 2 different objects with the same values', () => {
    const object = { 'a': 1 }
    const other = { 'a': 1 }
    expect(difference([object], [object])).toStrictEqual([])
    expect(difference([object], [other])).toStrictEqual([object])
  })
})
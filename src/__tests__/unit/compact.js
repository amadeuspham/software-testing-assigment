import compact from '../../compact'

describe('compact should remove all falsey values from an array', () => {
  it('should remove all falsey values', () => {
    const array_with_falseys = [0, 1, false, 2, '', 3, null, 'boom', '0', true, undefined, NaN]
    const compact_array = compact(array_with_falseys)
    expect(compact_array).toEqual([1, 2, 3, 'boom', '0', true])
  })
  it('should return an empty array if all values are falsey', () => {
    const array_with_falseys = [0, false, '', null, undefined, NaN]
    const compact_array = compact(array_with_falseys)
    expect(compact_array).toEqual([])
  })
  it('should return the same array if all values are truthy', () => {
    const array_with_falseys = [1, 2, 'boom', true, ' la']
    const compact_array = compact(array_with_falseys)
    expect(compact_array).toEqual([1, 2, 'boom', true, ' la'])
  })
})
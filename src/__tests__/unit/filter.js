import filter from '../../filter'

describe('filter should return a new array containing the given array elements that are truthy according to the predicate', () => {
  it('should filter correctly', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
    ]
    expect(filter(users, ({ active }) => active)).toStrictEqual([{ 'user': 'barney', 'active': true }])
    expect(filter(users, ({ active }) => !active)).toStrictEqual([{ 'user': 'fred',   'active': false }])
  })
})
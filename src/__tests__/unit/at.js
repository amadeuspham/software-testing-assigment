import at from '../../at.js'

const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }

describe('at should return an array consists of objects corresponding to given paths', () => {
  it('should return values as expected in the given example', () => {
    const result = at(object, ['a[0].b.c', 'a[1]'])
    expect(result).toEqual([3,4])
  })
  it('should return undefined objects with invalid paths', () => {
    const invalid_location = at(object, ['a[0].b.c.d', 'a[5]'])
    expect(invalid_location).toEqual([undefined, undefined])
    const invalid_type = at(object, [5])
    expect(invalid_type).toEqual([undefined])
  })
})
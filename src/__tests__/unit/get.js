import get from '../../get'

describe('get return the value of a object at the given path, otherwise return the default value', () => {
  it('should return the correct value given the right path as a string', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }
    expect(get(object, 'a[0].b.c')).toBe(3)
  })
  it('should return the correct value given the right path as an array', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3)
  })
  it('should return the default value given an invalid path', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }
    expect(get(object, 'a.b.c', 'default')).toBe('default')
  })
  it('should return undefined given an invalid path when does not have a default value', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }
    expect(get(object, 'a.b.c')).toBe(undefined)
  })
})
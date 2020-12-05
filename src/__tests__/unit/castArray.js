import castArray from '../../castArray'

describe('castArray should cast value(s), no matter the type to an array (if it\'s not one)', () => {
  it('should cast a number to an array containing that number', () => {
    expect(castArray(1)).toEqual([1])
  })
  it('should cast a string to an array containing that string', () => {
    expect(castArray('borat')).toEqual(['borat'])
  })
  it('should cast a bool to an array containing that bool', () => {
    expect(castArray(true)).toEqual([true])
  })
  it('should cast an object to an array containing that object', () => {
    expect(castArray({title: 'Admiral-General', name: 'Aladeen'})).toEqual([{title: 'Admiral-General', name: 'Aladeen'}])
  })
  it('should cast a null or undefined value to an array containing that value', () => {
    expect(castArray(null)).toEqual([null])
    expect(castArray(undefined)).toEqual([undefined])
  })
  it('should be able to cast multiple values to an array containing the first value', () => {
    expect(castArray(1, 'three', false, null)).toEqual([1])
  })
  it('should cast an array to itself (return the same array)', () => {
    expect(castArray(['boo', 'ya', 'ka', 'sha'])).toEqual(['boo', 'ya', 'ka', 'sha'])
  })
  it('should cast an empty value to an empty array', () => {
    expect(castArray([])).toEqual([])
  })
})
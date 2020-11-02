import countBy from '../../countBy'

describe('countBy should return correct number of times the key was returned from the given iteratee', () => {
  it('should return correctly with an array collection & arrow function iteratee', () => {
    const collection = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ]
    const iteratee = value => value.active
    const result = countBy(collection, iteratee)
    expect(result).toEqual({ 'true': 2, 'false': 1 })
  })
  it('should return correctly with an object collection & arrow function iteratee', () => {
    const collection = {
      'first': { 'user': 'barney', 'active': true },
      'second': { 'user': 'betty', 'active': true },
      'third': { 'user': 'fred', 'active': false }
    }
    const iteratee = value => value.active
    const result = countBy(collection, iteratee)
    expect(result).toEqual({ 'true': 2, 'false': 1 })
  })
  it('should return correctly with an array collection & "normal" function iteratee', () => {
    const collection = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ]
    const iteratee = function (value) {return value.active}
    const result = countBy(collection, iteratee)
    expect(result).toEqual({ 'true': 2, 'false': 1 })
  })
  it('should return correctly with an object collection & "normal" function iteratee', () => {
    const collection = {
      'first': { 'user': 'barney', 'active': true },
      'second': { 'user': 'betty', 'active': true },
      'third': { 'user': 'fred', 'active': false }
    }
    const iteratee = function (value) {return value.active}
    const result = countBy(collection, iteratee)
    expect(result).toEqual({ 'true': 2, 'false': 1 })
  })
})
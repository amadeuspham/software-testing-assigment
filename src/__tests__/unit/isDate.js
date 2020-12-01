import isDate from '../../isDate'

describe('isDate should determine whether a value is a date object', () => {
  it('should return true for a boolean', () => {
    expect(isDate(new Date)).toBe(true)
  })
  it('should return false for an object that is not a date object', () => {
    expect(isDate('Mon April 23 2012')).toBe(false)
  })
})
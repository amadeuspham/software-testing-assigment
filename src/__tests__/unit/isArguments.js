import isArguments from '../../isArguments'

describe('isArguments should determine whether a value is an Argument object', () => {
  it('should return true for an Argument object', () => {
    expect(isArguments(function() { return arguments }())).toBe(true)
  })
  it('should return false an object that is not an Argument', () => {
    expect(isArguments([1, 2, 3])).toBe(false)
  })
})
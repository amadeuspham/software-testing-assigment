import defaultToAny from '../../defaultToAny'

describe('defaultToAny accepts values and return the first one that is not null/undefined/NaN', () => {
  it('should return the first value if all values are not null/undefined/NaN', () => {
    expect(defaultToAny(1, 10, 20)).toBe(1)
  })
  it('should "skip" all the null/undefined/NaN values', () => {
    expect(defaultToAny(undefined, 10, 20)).toBe(10)
    expect(defaultToAny(undefined, null, 20)).toBe(20)
  })
  it('should return NaN if all values are null/undefined/NaN', () => {
    expect(defaultToAny(undefined, null, NaN)).toBe(NaN)
    expect(defaultToAny(undefined, NaN, null)).toBe(NaN)
  })
})
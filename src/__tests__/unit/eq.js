import eq from "../../eq"

describe('eq tells whether two values are equivalent', () => {
  it('should be able to differentiate between values of different types', () => {
    expect(eq("1", 1)).toStrictEqual(false)
  })
  it('should be able to compare numbers', () => {
    expect(eq(1, 2)).toStrictEqual(false)
    expect(eq(1, 1)).toStrictEqual(true)
    expect(eq(NaN, NaN)).toStrictEqual(true)
  })
  it('should be able to compare strings', () => {
    expect(eq("lo", "hi")).toStrictEqual(false)
    expect(eq("lo", "lo")).toStrictEqual(true)
  })
  it('should be able to compare booleans', () => {
    expect(eq(true, false)).toStrictEqual(false)
    expect(eq(true, true)).toStrictEqual(true)
  })
  it('should return true when comparing the same object, but false if they are 2 different objects with the same values', () => {
    const object = { 'a': 1 }
    const other = { 'a': 1 }
    expect(eq(object, object)).toStrictEqual(true)
    expect(eq(object, other)).toStrictEqual(false)
  })
})
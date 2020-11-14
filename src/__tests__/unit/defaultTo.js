import defaultTo from '../../defaultTo'

describe('defaultTo returns the default value if the given value is NaN/null/undefined', () => {
  it('should return the default value if the given is NaN', () => {
    expect(defaultTo(NaN, 10)).toBe(10);
  })
  it('should return the default value if the given is null', () => {
    expect(defaultTo(null, 10)).toBe(10);
  })
  it('should return the default value if the given is undefined', () => {
    expect(defaultTo(undefined, 10)).toBe(10);
  })
  it('should return the given value if it is not null/undefined/NaN', () => {
    expect(defaultTo(0, 10)).toBe(0);
    expect(defaultTo(false, 10)).toBe(false);
    expect(defaultTo("boom", 10)).toBe("boom");
    expect(defaultTo("", 10)).toBe("");
  })
})
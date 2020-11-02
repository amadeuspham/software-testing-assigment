import ceil from '../../ceil'

describe('ceil should round a number up to the given precision', () => {
  it('should round a numbẻ up to the nearest integer when no precision is given', () => {
    expect(ceil(7.2354)).toBe(8)
  })
  it('should round a number up correctly when a positive precision is given', () => {
    expect(ceil(3.01, 1)).toBe(3.1)
    expect(ceil(3.0025345, 2)).toBe(3.01)
  })
  it('should round a number up correctly when a negative precision is given', () => {
    expect(ceil(12341, -2)).toBe(12400)
    expect(ceil(333, -1)).toBe(340)
  })
})
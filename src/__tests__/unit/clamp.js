import clamp from '../../clamp'

describe('clamp should return the value nearest to the given number in the given range', () => {
  it('should return the lower bound if the number is out-of-range smaller', () => {
    expect(clamp(1, 5, 10)).toBe(5)
  })
  it('should return the upper bound if the number is out-of-range bigger', () => {
    expect(clamp(10, -5, 5)).toBe(5)
  })
  it('should return the number itself it its inside the range', () => {
    expect(clamp(-1, -5, 5)).toBe(-1)
  })
  it('should automatically convert non-numerical lower bound to 0', () => {
    expect(clamp(-1, 'yo', 5)).toBe(0)
  })
  it('should automatically convert non-numerical upper bound to 0', () => {
    expect(clamp(-1, -5, 'ye')).toBe(-1)
  })
})
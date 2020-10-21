import add from '../../add.js'

describe('add should sum two numbers', () => {
  it('should sum two positive integer', () => {
    const sum = add(3, 4)
    expect(sum).toBe(7)
  })
  it('should sum two negative integer', () => {
    const sum = add(-3, -2)
    expect(sum).toBe(-5)
  })
  it('should sum both negative and positive integers', () => {
    const sum = add(-3, 4)
    expect(sum).toBe(1)
  })
  it('sum of a number and zero is the number itself', () => {
    const sum = add(3, 0)
    expect(sum).toBe(3)
  })
  it('should sum decimals', () => {
    const sum = add(3.5, -1.2)
    expect(sum).toBe(2.3)
  })
})
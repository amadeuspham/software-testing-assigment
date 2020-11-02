import capitalize from '../../capitalize'

describe('capitalize should capitalizes the first letter of a string and normalize the rest', () => {
  it('should capitalizes correctly for alphabetical string', () => {
    const original = 'Fred'
    const result = capitalize(original)
    expect(result).toBe('Fred')
  })
  it('should capitalizes correctly for alphabetical string with spaces (keep the spaces)', () => {
    const original = 'Phineas AND FeRb'
    const result = capitalize(original)
    expect(result).toBe('Phineas and ferb')
  })
  it('should not capitalize strings starting with spaces', () => {
    const original = ' Phineas AND FeRb'
    const result = capitalize(original)
    expect(result).toBe(' phineas and ferb')
  })
  it('should capitalizes correctly for strings containing numbers', () => {
    const original = 'maximumoCCupancy120'
    const result = capitalize(original)
    expect(result).toBe('Maximumoccupancy120')
  })
})
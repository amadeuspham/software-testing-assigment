import camelCase from '../../camelCase'

describe('camelCase should convert string to camel case', () => {
  it('should convert strings separated by one space', () => {
    const original = 'Foo Bar'
    const camelCased = camelCase(original)
    expect(camelCased).toBe('fooBar')
  })
  it('should convert strings separated by multiple spaces', () => {
    const original = '   Foo       Bar  '
    const camelCased = camelCase(original)
    expect(camelCased).toBe('fooBar')
  })
  it('should convert strings separated by hyphens', () => {
    const original = '--foo-bar--'
    const camelCased = camelCase(original)
    expect(camelCased).toBe('fooBar')
  })
  it('should convert strings separated by underscores', () => {
    const original = '__FOO___BAR__'
    const camelCased = camelCase(original)
    expect(camelCased).toBe('fooBar')
  })
})
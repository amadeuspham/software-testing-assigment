import words from '../../words'

describe('words should splits string into an array of its words', () => {
  it('should convert a normal string', () => {
    const original = 'fred, barney, & pebbles'
    const text = words(original)
    expect(text).toEqual(['fred', 'barney', 'pebbles'])
  })
   it('should convert a string with patterns', () => {
    const original = 'fred, barney, & pebbles'
    const text = words(original, /[^, ]+/g)
    expect(text).toEqual(['fred', 'barney', '&', 'pebbles'])
  })
})
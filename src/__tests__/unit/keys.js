import keys from '../../keys'

describe('keys should return an array of the own enumerable property names of an object', () => {
  it('should return correctly with a function', () => {
    function Foo() {
      this.a = 1
      this.b = 2
    }
    const result = keys(Foo)
    expect(result).toEqual(['a', 'b'])
  })
})

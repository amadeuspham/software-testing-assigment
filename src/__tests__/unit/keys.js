import keys from '../../keys'

describe('keys should return an array of the own enumerable property names of an object', () => {
  it('should return correctly with a class-like function', () => {
    function Foo() {
      this.a = 1
      this.b = 2
    }
    const result = keys(new Foo)
    expect(result).toEqual(['a', 'b'])
  })
  it('should return correctly with a string', () => {
    expect(keys('hi')).toEqual(['0', '1'])
  })
})

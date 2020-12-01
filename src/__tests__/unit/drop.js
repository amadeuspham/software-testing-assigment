import drop from '../../drop'

describe('drop should returns an array without the first n elements', () => {
  it('should remove the first element by default', () => {
    expect(drop([1,2,3])).toStrictEqual([2, 3])
  })
  it('should remove correctly the number of elements', () => {
    expect(drop([1,2,3], 2)).toStrictEqual([3])
  })
  it('should remove all elements if the number is equal or bigger to the length', () => {
    expect(drop([1,2,3], 5)).toStrictEqual([])
  })
  it('should return the same array if the number is 0', () => {
    expect(drop([1,2,3], 0)).toStrictEqual([1, 2, 3])
  })
  it('should intepret length of null values as 0', () => {
    expect(drop(null, 1)).toStrictEqual([])
  })
  it('should convert negative number of dropping elements to 0', () => {
    expect(drop([1,2,3], -5)).toStrictEqual([1, 2, 3])
  })
})
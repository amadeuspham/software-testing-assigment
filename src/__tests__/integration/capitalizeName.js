import isEmpty from '../../isEmpty'
import upperFirst from '../../upperFirst'

let product = {
  'id': '1234298sgdf',
  'name': 'red snapper', 
  'pricePerKg': 15, 
  'weight': 200, 
}

it('Capitalize the first letter of product name if it is not empty', () => {
  if (!isEmpty(product.name)) {
    product.name = upperFirst(product.name)
  }
  expect(product.name).toEqual('Red snapper')
})
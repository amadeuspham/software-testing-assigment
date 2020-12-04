import filter from '../../filter'
import add from '../../add'

let cart = [ 
  { 'id': '1234298sgdf',
    'name': 'red snapper', 
    'pricePerKg': 15, 
    'weight': 200, 
    'num': 1
  },
  { 'id': '412353twtwd',
    'name': 'frozen pizza', 
    'pricePerKg': 1, 
    'weight': 500,
    'num': 1
  },
]

const newProduct = {
  'id': '1234298sgdf',
  'name': 'red snapper', 
  'pricePerKg': 15, 
  'weight': 200, 
}

function addProductToCart(product) {
  const existingProducts = filter(cart, (productInCart) => {
    return product.id == productInCart.id
  })
  if (existingProducts.length) {
    let existingProduct = cart.find(productInCart => productInCart.id == product.id)
    const newQuantity = add(existingProduct.num, 1)
    existingProduct.num = newQuantity
  } else {
    cart.push(product)
  }
}

it('Count number of identical items added to the cart correctly', () => {
  const finalCart = [ 
    { 'id': '1234298sgdf',
      'name': 'red snapper', 
      'pricePerKg': 15, 
      'weight': 200, 
      'num': 2
    },
    { 'id': '412353twtwd',
      'name': 'frozen pizza', 
      'pricePerKg': 1, 
      'weight': 500,
      'num': 1
    },
  ]
  addProductToCart(newProduct)
  expect(cart).toStrictEqual(finalCart)
})
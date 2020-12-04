import filter from '../../filter'
import endsWith from '../../endsWith'
import at from '../../at'

const data = [ 
  {'id': '1234298sgdf',
    'name': 'red snapper', 
    'pricePerKg': 15, 
    'weight': 200, 
  },
  {'id': '412353twtwd',
    'name': 'frozen pizza', 
    'pricePerKg': 1, 
    'weight': 500,
  },
]

it('Search for all pizzas that are cheaper than 5 €', () => {
  const pizzas = filter(data, (product) => endsWith(product.name, 'pizza'))
  const result = filter(pizzas, (pizza) => {
    const pizzaPrice = at(pizza, ['pricePerKg'])[0]
    return pizzaPrice < 5
  })
  expect(result).toStrictEqual([data[1]])
})
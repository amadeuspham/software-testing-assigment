import isEmpty from '../../isEmpty'
import map from '../../map'
import divide from '../../divide'
import reduce from '../../reduce'
import add from '../../add'
import ceil from '../../ceil'

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

function getTotalOrder(data) {
  if (!isEmpty(data)) {
    const priceValues = map(data, product => {
      const price = product.pricePerKg*(product.weight/1000)
      return price
    })
    const totalPrice = reduce(priceValues, (sum, tax) => sum + tax, 0)
    const taxPrice = divide(totalPrice, 10)
    const totalPriceAndTax = ceil(add(totalPrice, taxPrice), 2)
    return totalPriceAndTax
  } else {
    return 0.00
  }
}

it('Shows the total order price, including taxes, which is rounded to the second decimal', () => {
  const result = getTotalOrder(data)
  expect(result).toEqual(ceil(0.5 + 3 + 3.5*0.1, 2))
})
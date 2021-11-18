import test from 'tape'
import { customerOrderReport } from './customerOrderReport'

const EXAMPLE_STATE = {
  stock: [
    {
      name: 'hats',
      quantity: 80,
      price: 2050,
    },
    {
      name: 'socks',
      quantity: 20,
      price: 345,
    },
    {
      name: 'keychain',
      quantity: 0,
      price: 557,
    },
  ],
  customers: [
    {
      name: 'kate',
      orders: [
        {
          itemName: 'hats',
          quantity: 20,
          total: 41000,
        },
        {
          itemName: 'socks',
          quantity: 10,
          total: 3450,
        },
      ],
    },
    {
      name: 'dan',
      orders: [],
    },
  ],
}

test('Testing Order Reporting', (t) => {
  const lines = customerOrderReport(EXAMPLE_STATE)
  t.same(lines, [
    'Dan: n/a',
    'Kate: hats - $410.00, socks - $34.50 | Average Order Value: $222.25',
  ])
  t.end()
})

import test from 'tape'
import { process } from './process'

const REGISTER_INPUT = `
register hats $20.50
register socks $3.45
register keychain $5.57
`

const EXAMPLE_INPUT = `
register hats $20.50
register socks $3.45
register keychain $5.57
checkin hats 100
order kate hats 20
checkin socks 30
order dan socks 35
order kate socks 10
`

test('Testing examples', (t) => {
  const { state } = process(REGISTER_INPUT)
  t.same(state, {
    stock: [
      {
        name: 'hats',
        quantity: 0,
        price: 2050,
      },
      {
        name: 'socks',
        quantity: 0,
        price: 345,
      },
      {
        name: 'keychain',
        quantity: 0,
        price: 557,
      },
    ],
    customers: [],
  })
  t.end()
})

test('Testing example full', (t) => {
  const { state } = process(EXAMPLE_INPUT)
  t.same(state, {
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
  })
  t.end()
})

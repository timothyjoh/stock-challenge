import test from 'tape'
import { StockState } from '../types'
import { register } from './register'

test('Adds a product to empty stock', (t) => {
  const INIT_STOCK: StockState = {
    stock: [],
    customers: [],
  }
  t.same(register(INIT_STOCK, 'register hats $20.50'), {
    stock: [
      {
        name: 'hats',
        quantity: 0,
        price: 2050,
      },
    ],
    customers: [],
  })
  t.end()
})

test('Adds a product to existing stock', (t) => {
  const EXISTING_STOCK: StockState = {
    stock: [
      {
        name: 'hats',
        quantity: 0,
        price: 2050,
      },
    ],
    customers: [],
  }
  t.same(register(EXISTING_STOCK, 'register shoes $50.50'), {
    stock: [
      {
        name: 'hats',
        quantity: 0,
        price: 2050,
      },
      {
        name: 'shoes',
        quantity: 0,
        price: 5050,
      },
    ],
    customers: [],
  })
  t.end()
})

test('Updates a product price when existing', (t) => {
  const EXISTING_STOCK: StockState = {
    stock: [
      {
        name: 'hats',
        quantity: 0,
        price: 2050,
      },
    ],
    customers: [],
  }
  t.same(register(EXISTING_STOCK, 'register hats $10.99'), {
    stock: [
      {
        name: 'hats',
        quantity: 0,
        price: 1099,
      },
    ],
    customers: [],
  })
  t.end()
})

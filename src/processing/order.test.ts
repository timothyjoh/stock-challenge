import test from 'tape'
import { StockState } from '../types'
import { order } from './order'

test('Dan orders 10 hats', (t) => {
  const INIT_STOCK: StockState = {
    stock: [
      {
        name: 'hats',
        quantity: 20,
        price: 555,
      },
    ],
    customers: [],
  }
  const nextState = order(INIT_STOCK, 'order dan hats 10')
  t.same(nextState, {
    stock: [
      {
        name: 'hats',
        quantity: 10,
        price: 555,
      },
    ],
    customers: [
      {
        name: 'dan',
        orders: [
          {
            itemName: 'hats',
            quantity: 10,
            total: 5550,
          },
        ],
      },
    ],
  })
  t.end()
})

test('Dan orders 30 hats, fails', (t) => {
  const INIT_STOCK: StockState = {
    stock: [
      {
        name: 'hats',
        quantity: 20,
        price: 555,
      },
    ],
    customers: [],
  }
  const nextState = order(INIT_STOCK, 'order dan hats 30')
  t.same(nextState, {
    stock: [
      {
        name: 'hats',
        quantity: 20,
        price: 555,
      },
    ],
    customers: [
      {
        name: 'dan',
        orders: [],
      },
    ],
  })
  t.end()
})

test('Dan orders 10 shoes, fails', (t) => {
  const INIT_STOCK: StockState = {
    stock: [
      {
        name: 'hats',
        quantity: 20,
        price: 555,
      },
    ],
    customers: [],
  }
  const nextState = order(INIT_STOCK, 'order dan shoes 10')
  t.same(nextState, {
    stock: [
      {
        name: 'hats',
        quantity: 20,
        price: 555,
      },
    ],
    customers: [
      {
        name: 'dan',
        orders: [],
      },
    ],
  })
  t.end()
})

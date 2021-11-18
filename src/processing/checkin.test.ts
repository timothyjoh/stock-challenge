import test from 'tape'
import { StockState } from '../types'
import { checkin } from './checkin'

test('Add 20 hats to inventory', (t) => {
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
  const nextState = checkin(INIT_STOCK, 'checkin hats 20')
  t.same(nextState, {
    stock: [
      {
        name: 'hats',
        quantity: 40,
        price: 555,
      },
    ],
    customers: [],
  })
  t.end()
})

test('Add 30 shoes to inventory, fails', (t) => {
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
  const nextState = checkin(INIT_STOCK, 'checkin shoes 30')
  t.same(nextState, {
    stock: [
      {
        name: 'hats',
        quantity: 20,
        price: 555,
      },
    ],
    customers: [],
  })
  t.end()
})

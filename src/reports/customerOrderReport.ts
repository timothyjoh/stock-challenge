import { order } from '../processing'
import { StockState, Order } from '../types'
import { formatCentsToDollars } from '../utils/money'
import { toTitleCase } from '../utils/string'
import { averageArray } from '../utils/array'

interface OrderItemTally {
  [key: string]: number
}

const orderItems = (acc: OrderItemTally, current: Order) => {
  const { itemName, quantity, total } = current
  const items = { ...acc }
  if (!items.hasOwnProperty(itemName)) {
    items[itemName] = 0
  }
  items[itemName] += total
  return items
}

const spendPerItem = (orders: Order[]) => {
  const items = orders.reduce(orderItems, {})
  return Object.keys(items).map(
    (k) => `${k} - ${formatCentsToDollars(items[k])}`,
  )
}

export const customerOrderReport = (state: StockState) => {
  const customerLines = state.customers.map((c) => {
    const nameTitled = toTitleCase(c.name)
    if (c.orders.length === 0) return `${nameTitled}: n/a`
    const spending = spendPerItem(c.orders).join(', ')
    const aov = formatCentsToDollars(averageArray(c.orders.map((o) => o.total)))
    return `${nameTitled}: ${spending} | Average Order Value: ${aov}`
  })
  return customerLines.sort((a, b) => a.localeCompare(b))
}

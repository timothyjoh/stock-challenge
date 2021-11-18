import { StockState } from '../types'

export const order = (state: StockState, line: string) => {
  const [command, customerName, itemName, quantity] = line.split(' ')
  const newState = { ...state }
  const item = newState.stock.find((i) => i.name === itemName)
  const quantityBought = parseInt(quantity)
  let customer = newState.customers.find((c) => c.name === customerName)
  if (!customer) {
    customer = { name: customerName, orders: [] }
    newState.customers.push(customer)
  }
  if (item && item.quantity >= quantityBought) {
    const newOrder = {
      itemName,
      quantity: quantityBought,
      total: quantityBought * item.price,
    }
    customer.orders.push(newOrder)
    item.quantity -= quantityBought
  }
  return newState
}

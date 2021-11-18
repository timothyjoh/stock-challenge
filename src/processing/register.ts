import { StockState } from '../types'

export const register = (state: StockState, line: string) => {
  const [command, itemName, price] = line.split(' ')
  const { stock } = state

  const exists = state.stock.find((i) => i.name === itemName)
  const cents = Math.round(parseFloat(price.replace(/[$,]/g, '')) * 100)
  if (exists && cents) {
    exists.price = cents
  } else {
    const newStock = [...stock, { name: itemName, quantity: 0, price: cents }]
    return { ...state, stock: newStock }
  }
  return state
}

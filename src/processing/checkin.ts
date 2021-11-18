import { StockState } from '../types'

export const checkin = (state: StockState, line: string) => {
  const [command, itemName, quantity] = line.split(' ')
  const newState = { ...state }
  const item = newState.stock.find((i) => i.name === itemName)
  if (!item) return state
  const quantityAdded = parseInt(quantity)
  item.quantity += quantityAdded
  return newState
}

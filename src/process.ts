import { customerOrderReport } from './reports/customerOrderReport'
import { output } from './output'
import { register, checkin, order } from './processing'
import { StockState } from './types'

const INIT_STOCK: StockState = {
  stock: [],
  customers: [],
}

const buildInventory = (acc: StockState, line: string) => {
  const [command] = line.split(' ')
  switch (command) {
    case 'register':
      return register(acc, line)
    case 'checkin':
      return checkin(acc, line)
    case 'order':
      return order(acc, line)
    default:
      return acc
  }
}

export const process = (fileData: string) => {
  const lines = fileData.split('\n')
  const state = lines.reduce(buildInventory, INIT_STOCK)
  const report = customerOrderReport(state)
  return { state, report }
}

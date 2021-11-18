interface Item {
  price: number
  quantity: number
  name: string
}

export interface Order {
  itemName: string
  quantity: number
  total: number
}

interface Customer {
  name: string
  orders: Order[]
}

export interface StockState {
  stock: Item[]
  customers: Customer[]
}

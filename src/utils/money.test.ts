import test from 'tape'
import { formatCentsToDollars } from './money'

test('Currency formatting', (t) => {
  t.same(formatCentsToDollars(45345), '$453.45')
  t.same(formatCentsToDollars(3486756), '$34,867.56')
  t.end()
})

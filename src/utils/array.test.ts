import test from 'tape'
import { averageArray } from './array'

test('Array Averages', (t) => {
  t.same(averageArray([23, 44, 457, 86]), 152.5)
  t.same(averageArray([3, 4, 3, 6]), 4)
  t.end()
})

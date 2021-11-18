import test from 'tape'
import { toTitleCase } from './string'

test('Title Case', (t) => {
  t.same(toTitleCase('patricia'), 'Patricia')
  t.same(toTitleCase('dan'), 'Dan')
  t.end()
})

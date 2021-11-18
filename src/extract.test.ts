import test from 'tape'
import proxyquire from 'proxyquire'

const { extract } = proxyquire('./extract', {
  './output': {
    output: (stuff: unknown) => {
      return 'error'
    },
  },
  './process': {
    process: (data: unknown) => {
      return 'processing'
    },
  },
})

test('Extract with good file name', (t) => {
  t.equal(extract('example1.txt'), 'processing')
  t.end()
})

test('Extract with bad file name', (t) => {
  t.equal(extract('nonexistant.txt'), 'error')
  t.end()
})

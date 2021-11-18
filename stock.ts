#!/usr/bin/env ts-node

import { extract } from './src/extract'
;(function () {
  'use strict'
  const [fileName] = process.argv.slice(2)
  extract(fileName)
})()

type Loggable = unknown[] | unknown

export const output = (lines: Loggable) => {
  switch (typeof lines) {
    case 'object':
      Array.isArray(lines) ? lines.forEach(log) : log(lines)
      break
    default:
      log(lines)
  }
}

const log = (message: unknown) => {
  console.log(message)
}

import fs from 'fs'
import { output } from './output'
import { process } from './process'

export const extract = (fileName: string) => {
  try {
    const data = fs.readFileSync(`./${fileName}`, 'utf8')
    const { report } = process(data)
    output(report)
    return report
  } catch (err) {
    return output('File could not be read.')
  }
}

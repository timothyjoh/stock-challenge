import fs from 'fs'
import { output } from './output'
import { process } from './process'

export const extract = (fileName: string) => {
  try {
    const data = fs.readFileSync(`./${fileName}`, 'utf8')
    return process(data)
  } catch (err) {
    return output('File could not be read.')
  }

  // fs.readFile(`./${fileName}`, (err, data) => {
  //   if (err) {
  //     return output('File could not be read.')
  //   } else {
  //     return process(data)
  //   }
  // })
}

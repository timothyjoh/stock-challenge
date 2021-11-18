import { output } from './output'

export const process = (fileData: unknown) => {
  output(['process is called', { fileData }])
}

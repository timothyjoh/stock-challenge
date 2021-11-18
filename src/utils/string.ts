export const toTitleCase = (str: string) =>
  str.replace(/\b\S/g, (t) => t.toUpperCase())

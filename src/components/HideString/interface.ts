export interface HideStringProps{
  text: string
  before: number
  end: number
}

export const hideString = (str: string, before: number, end: number) => {
  const reg = new RegExp(`(\\w{${before}})\\w*(\\w{${end}})`)
  return str.replace(reg, '$1...$2')
}

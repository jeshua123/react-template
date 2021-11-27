const locale = 'en'
const options = { style: 'currency', currency: 'GBP', maximumFractionDigits: 2 }

export const loadFile = (files: any) => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      return resolve(reader.result)
    })
    reader.readAsDataURL(files.item(0))
  })
}

export const formatNum = (num: number) => {
  return Intl.NumberFormat(locale, options).format(num)
}

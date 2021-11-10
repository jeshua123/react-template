export const formatDecimalNumber = (number: number | undefined) => {
  return number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export const loadFile = (files: any) => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      return resolve(reader.result)
    })
    reader.readAsDataURL(files.item(0))
  })
}

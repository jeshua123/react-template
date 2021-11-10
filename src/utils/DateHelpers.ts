const locale = navigator.language
const options: { [key: string]: string } = { day: '2-digit', month: '2-digit', year: '2-digit' }

export const timestamp = () => Date.now()
export const formatDateFull = (date: string | number) => new Date(date).toLocaleString()
// "29/1/2021 9:57:51"

export const formatTime = (date: string | number) => new Date(date).toLocaleTimeString()
// "9:57:51"

export const formatDate = (date: any) => {
  return new Date(date).toLocaleDateString(locale, options)
}
// "29/01/21"

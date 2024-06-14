import { formatDate } from './formatDate.js'

export function registerOnChange(input) {
  let oldValue = ''

  input.addEventListener('change', (e) => {
    e.target.value = formatDate(e.target.value)
    oldValue = e.target.value
  })
  input.addEventListener('input', (e) => {
    const newValue = e.target.value
    const result = onChange(newValue, oldValue)
    if (
      e.inputType === 'insertText' &&
      (newValue.length === 2 || newValue.length === 5) &&
      newValue[newValue.length - 1] !== '.'
    ) {
      e.target.value = newValue + '.'
    }
    oldValue = newValue
  })
}

export function onChange(newValue, oldValue = '') {
  if (
    newValue.length > oldValue.length &&
    (newValue.length === 2 || newValue.length === 5) &&
    newValue[newValue.length - 1] !== '.'
  ) {
    return newValue + '.'
  }
  return newValue
}

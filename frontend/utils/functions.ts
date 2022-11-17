export const toCamelCase: (text: string) => string = (text: string) => {
  return text
    .split(' ')
    .map((word, i) => 
      `${i === 0 ? word[0].toLowerCase() : word[0].toUpperCase()}${word.slice(1)}`
    )
    .join('')
}
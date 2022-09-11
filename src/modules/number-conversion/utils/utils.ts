export function toBin(value: string): string {
  return value ? Number(value).toString(2) : ''
}

export function toHex(value: string): string {
  return value ? Number(value).toString(16) : ''
}

export let spacifyRight = (str: string, chunkLength: number) => {
  let len = str.length
  let segments = Math.ceil(len / chunkLength)
  let result = ''

  for (let i = len; i > len - chunkLength * segments; i -= chunkLength) {
    if (i > chunkLength) {
      result = ' ' + str.slice(i - chunkLength, i) + result
    } else {
      result = str.slice(0, i).padStart(chunkLength, '0') + result
    }
  }

  return result
}

export function fromBin(value: string): string {
  return value ? String(parseInt(value, 2)) : ''
}

export function fromHex(value: string): string {
  return value ? String(parseInt(value, 16)) : ''
}

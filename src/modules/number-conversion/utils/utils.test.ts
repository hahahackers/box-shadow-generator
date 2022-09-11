import { toBin } from './utils'

describe('number-conversion.utils', () => {
  describe('toBin()', () => {
    it.each([
      ['0', '0000'],
      ['1', '0001'],
      ['2', '0010'],
      ['8', '1000'],
      ['9', '1001'],
      ['16', '0001 0000'],
      ['128', '1000 0000'],
      ['256', '0001 0000 0000'],
      ['1234', '0100 1101 0010'],
    ])('should work with %s', (value, expected) => {
      expect(toBin(value)).toBe(expected)
    })
  })
})

// 10011010010

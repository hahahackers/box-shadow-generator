import clamp from 'lodash.clamp'

export function transformCoordToPixelValue(coord) {
  return clamp(((coord + 20) * 100) / 40, 0, 101)
}

export function transformPixelValueToCoord(pixelValue) {
  return Math.round((pixelValue * 40) / 100 - 20)
}

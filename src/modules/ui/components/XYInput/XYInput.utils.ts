import _ from 'lodash'

export function transformCoordToPixelValue(coord) {
  return _.clamp(((coord + 20) * 100) / 40, 0, 101)
}

export function transformPixelValueToCoord(pixelValue) {
  return Math.round((pixelValue * 40) / 100 - 20)
}

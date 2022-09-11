import _ from 'lodash'

export function transformCoordToPixelValue(coord: number): number {
  return _.clamp(((coord + 20) * 100) / 40, 0, 101)
}

export function transformPixelValueToCoord(pixelValue: number): number {
  return Math.round((pixelValue * 40) / 100 - 20)
}

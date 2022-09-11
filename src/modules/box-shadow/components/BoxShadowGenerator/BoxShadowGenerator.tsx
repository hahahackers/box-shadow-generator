import React, { useState } from 'react'
import { H3 } from '@blueprintjs/core'

import { RangeInput, XYInput } from '$/ui'
import { ControlsTable } from '../ControlsTable'
import { ShapeControls } from '../ShapeControls'

import { IconReset } from './icons/IconReset'

import css from './BoxShadowGenerator.module.css'

export const BoxShadowGenerator = () => {
  let [offsetX, setOffsetX] = useState(4)
  let [offsetY, setOffsetY] = useState(4)

  let [color] = useState('black')
  let [blurRadius, setBlurRadius] = useState(0)
  let [spreadRadius, setSpreadRadius] = useState(0)

  let boxShadow = `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${color}`

  let [shape, setShape] = useState({
    width: 200,
    height: 200,
  })

  return (
    <div className={css.root}>
      <div className={css.controls}>
        <ShapeControls shape={shape} onChange={setShape} />
        <div className={css['box-shadow-controls']}>
          <H3>Box Shadow</H3>

          <ControlsTable>
            <tbody>
              <tr>
                <td>Offset X</td>
                <td>{/*<NumberInput value={offsetX} onChange={setOffsetX} />*/}</td>
                <td>px</td>
                <td rowSpan={2}>
                  <XYInput
                    value={{ x: offsetX, y: offsetY }}
                    onChange={(x, y) => {
                      setOffsetX(x)
                      setOffsetY(y)
                    }}
                  />
                </td>
                <td rowSpan={2}>
                  <button
                    className={css.button}
                    onClick={() => {
                      setOffsetX(0)
                      setOffsetY(0)
                    }}
                  >
                    <IconReset />
                  </button>
                </td>
              </tr>
              <tr>
                <td>Offset Y</td>
                <td>{/*<NumberInput value={offsetY} onChange={setOffsetY} />*/}</td>
                <td>px</td>
              </tr>
              <tr>
                <td>Blur</td>
                <td>{/*<NumberInput value={blurRadius} onChange={setBlurRadius} />*/}</td>
                <td>px</td>
                <td>
                  <RangeInput value={blurRadius} onChange={setBlurRadius} max={20} />
                </td>
                <td>
                  <button className={css.button} onClick={() => setBlurRadius(0)}>
                    <IconReset />
                  </button>
                </td>
              </tr>
              <tr>
                <td>Spread</td>
                <td>{/*<NumberInput value={spreadRadius} onChange={setSpreadRadius} />*/}</td>
                <td>px</td>
                <td>
                  <RangeInput value={spreadRadius} onChange={setSpreadRadius} max={20} />
                </td>
                <td>
                  <button className={css.button} onClick={() => setSpreadRadius(0)}>
                    <IconReset />
                  </button>
                </td>
              </tr>
            </tbody>
          </ControlsTable>
        </div>
        <div className={css.code}>
          <pre>{`box-shadow: ${boxShadow}`};</pre>
        </div>
      </div>

      <div className={css.result}>
        <div style={{ ...shape, backgroundColor: 'purple', boxShadow }} />
      </div>
    </div>
  )
}

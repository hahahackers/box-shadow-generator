import React from 'react'
import { H2 } from '@blueprintjs/core'

import { RangeInput } from '$/ui'
import { ControlsTable } from '../ControlsTable'

import css from './ShapeControls.module.css'

export const ShapeControls = (props: any) => {
  function handleChange(value: any, event: any) {
    props.onChange({
      ...props.shape,
      [event.target.name]: value,
    })
  }

  return (
    <div className={css.root}>
      <H2>Rectangle</H2>
      <ControlsTable>
        <tbody>
          <tr>
            <td>Width</td>
            <td>
              {/*<NumberInput name="width" value={props.shape.width} onChange={handleChange} />*/}
            </td>
            <td>px</td>
            <td>
              <RangeInput
                name="width"
                value={props.shape.width}
                onChange={handleChange}
                max={200}
              />
            </td>
          </tr>
          <tr>
            <td>Height</td>
            <td>
              {/*<NumberInput name="height" value={props.shape.height} onChange={handleChange} />*/}
            </td>
            <td>px</td>
            <td>
              <RangeInput
                name="height"
                value={props.shape.height}
                onChange={handleChange}
                max={200}
              />
            </td>
          </tr>
        </tbody>
      </ControlsTable>
    </div>
  )
}

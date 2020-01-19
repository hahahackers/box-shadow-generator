import React from 'react'

import { NumberInput, RangeInput, Title } from 'modules/ui'

import css from './ShapeControls.module.css'
import { ControlsTable } from 'modules/box-shadow'

export const ShapeControls = props => {
  function handleChange(value, event) {
    console.log('ShapeControls :: 10', {
      ...props.shape,
      [event.target.name]: value
    })
    props.onChange({
      ...props.shape,
      [event.target.name]: value
    })
  }

  return (
    <div className={css.root}>
      <Title>Rectangle</Title>
      <ControlsTable>
        <tbody>
          <tr>
            <td>Width</td>
            <td>
              <NumberInput name="width" value={props.shape.width} onChange={handleChange} />
            </td>
            <td>px</td>
            <td>
              <RangeInput name="width" value={props.shape.width} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>Height</td>
            <td>
              <NumberInput name="height" value={props.shape.height} onChange={handleChange} />
            </td>
            <td>px</td>
          </tr>
        </tbody>
      </ControlsTable>
    </div>
  )
}

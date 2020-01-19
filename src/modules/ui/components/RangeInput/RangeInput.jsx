import React, { useRef } from 'react'

import css from './RangeInput.module.css'

export const RangeInput = props => {
  let inputRef = useRef()

  function handleChange(event) {
    props.onChange(Number(event.target.value), event)
  }

  function handleFocus() {
    inputRef.current.select()
  }

  function handleWheel(event) {
    props.onChange(Number(props.value) - Math.sign(event.deltaY), event)
  }

  return (
    <input
      {...props}
      className={css.root}
      ref={inputRef}
      type="range"
      max={20}
      value={props.value}
      onChange={handleChange}
      onFocus={handleFocus}
      onWheel={handleWheel}
    />
  )
}

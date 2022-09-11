import React, { useRef } from 'react'

import css from './RangeInput.module.css'

export const RangeInput = (props: any) => {
  let inputRef = useRef()

  function handleChange(event: any) {
    props.onChange(Number(event.target.value), event)
  }

  function handleFocus() {
    // inputRef.current.select()
  }

  function handleWheel(event: any) {
    props.onChange(Number(props.value) - Math.sign(event.deltaY), event)
  }

  return (
    <input
      {...props}
      className={css.root}
      ref={inputRef}
      type="range"
      value={props.value}
      onChange={handleChange}
      onFocus={handleFocus}
      onWheel={handleWheel}
    />
  )
}

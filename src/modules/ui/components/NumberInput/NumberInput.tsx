import React, { DetailedHTMLProps, InputHTMLAttributes, useRef } from 'react'

import css from './NumberInput.module.css'

interface NumberInputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export const NumberInput = ({ value, onChange, ...rest }: NumberInputProps) => {
  let ref = useRef<HTMLInputElement>(null)

  function handleChange(event: any) {
    event.target.value = Number(event.target.value)

    onChange?.(event)
  }

  // function handleFocus() {
  //   // inputRef.current.select()
  // }
  //
  // function handleWheel(event) {
  //   onChange(Number(value) - Math.sign(event.deltaY), event)
  // }

  return (
    <input
      {...rest}
      className={css.root}
      ref={ref}
      type="text"
      value={value}
      onChange={handleChange}
      // value={props.value}
      // onChange={handleChange}
      // onFocus={handleFocus}
      // onWheel={handleWheel}
    />
  )
}

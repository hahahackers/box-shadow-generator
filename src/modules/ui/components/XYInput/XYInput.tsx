import React, { useRef, useEffect } from 'react'
import displace from 'displacejs'

import { transformCoordToPixelValue, transformPixelValueToCoord } from './XYInput.utils'

import css from './XYInput.module.css'

interface XYInputProps {
  onChange: (x: number, y: number) => void
  value: {
    x: number
    y: number
  }
}

export const XYInput = (props: XYInputProps) => {
  let dragZoneRef = useRef<HTMLDivElement>(null)
  let thumbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let a: any // FIXME

    if (thumbRef.current && dragZoneRef.current) {
      a = displace(thumbRef.current, {
        // @ts-ignore
        constrain: dragZoneRef.current,
        onMouseMove(element) {
          let x = transformPixelValueToCoord(element.offsetLeft)
          let y = transformPixelValueToCoord(element.offsetTop)

          props.onChange(x, y)
        },
      })
    }

    return () => {
      if (a) {
        a.destroy()
      }
    }
  }, [])

  const left = transformCoordToPixelValue(props.value.x)
  const top = transformCoordToPixelValue(props.value.y)

  return (
    <div ref={dragZoneRef} className={css.root}>
      <div ref={thumbRef} className={css.thumb} style={{ left, top }} />
    </div>
  )
}

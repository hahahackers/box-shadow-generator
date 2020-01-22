import React, { useRef, useEffect } from 'react'
import displace from 'displacejs'

import css from './XYInput.module.css'
import { transformCoordToPixelValue, transformPixelValueToCoord } from './XYInput.utils'

export const XYInput = props => {
  let dragZoneRef = useRef(null)
  let thumbRef = useRef(null)

  useEffect(() => {
    let a = displace(thumbRef.current, {
      constrain: dragZoneRef.current,
      onMouseMove(element) {
        let x = transformPixelValueToCoord(element.offsetLeft)
        let y = transformPixelValueToCoord(element.offsetTop)

        props.onChange(x, y)
      }
    })

    return () => {
      a.destroy()
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

import React from 'react'

import css from './Title.module.css'

export const Title = props => {
  return <h2 className={css.root}>{props.children}</h2>
}

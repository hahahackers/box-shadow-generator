import React from 'react'

import { NumberConversionForm } from '../../NumberConversionForm'

import css from './NumberConversionPage.module.scss'

export const NumberConversionPage = () => (
  <div className={css.root}>
    <NumberConversionForm />
  </div>
)
